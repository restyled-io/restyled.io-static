declare var hljs: any;
declare var jsyaml: any;

const docs = "https://docs.restyled.io";
const navBarHeight = 46;

type Restyler = {
  enabled: boolean;
  name: string;
  image: string;
  command: string[];
  arguments: string[];
  include: string[];
  interpreters: string[];
  documentation: string[];
  metadata: Metadata;
};

type Metadata = {
  languages: string[];
  tests: Test[];
};

type Test = {
  contents: string;
  restyled: string;
};

function appendRestyler($section: HTMLElement, restyler: Restyler) {
  const div = document.createElement("div");
  div.innerHTML = restylerTemplate(restyler);
  div.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightElement(block);
  });

  div.querySelectorAll("a.restyler-tags").forEach((el) => {
    const a = el as HTMLAnchorElement;
    const name = a.getAttribute("data-name");

    if (name) {
      a.onclick = async (e) => {
        e.preventDefault();
        a.innerHTML = "loading...";

        const response = await fetch(`${docs}/restyler-tags?name=${name}`);

        if (response.ok) {
          const body: string[] = await response.json();
          const x = document.createElement("div");
          x.innerHTML = body.join("\n");
          a.parentElement?.insertAdjacentElement("beforeend", x);
          a.parentElement?.removeChild(a);
        }
      };
    }
  });

  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.href = `#${restyler.name}`;
  anchor.innerHTML = restyler.name;
  li.appendChild(anchor);
  anchor.onclick = (e) => {
    scrollToRestylerName(restyler.name);
    e.preventDefault();
  };

  const toc = document.querySelector("#table-of-contents > ul");

  $section.classList.remove("loading");
  $section.appendChild(div);
  toc?.appendChild(li);
}

function restylerTemplate(restyler: Restyler): string {
  const language = restyler.metadata.languages[0];
  const documentation = restyler.documentation.map((url) => {
    return `<a href="${url}">${url}</a>`;
  });

  return `
    <h2 id="${restyler.name}-restyler">
      ${restyler.name}
    </h2>

    <table>
      <tbody>
        <tr>
          <th>Languages</th>
          <td>${restyler.metadata.languages.join(", ")}</td>
        </tr>
        <tr>
          <th>Tag</th>
          <td>
            ${restyler.image.split(":").slice(-1)}
            <a class="restyler-tags" data-name=${
              restyler.name
            } href="#">[show all]</a>
          </td>
        </tr>
        <tr>
          <th>Links</th>
          <td>${documentation.join("<br />")}</td>
        </tr>
        <tr>
          <th>Enabled by default?</th>
          <td>${restyler.enabled ? "Yes" : "No"}</td>
        </tr>
      </tbody>
    </table>

    <details class="config">
    <summary>Configuration</summary>
    <pre><code class="language-yaml">${jsyaml.dump({
      image: restyler.image,
      command: restyler.command,
      arguments: restyler.arguments,
      include: restyler.include,
      interpreters: restyler.interpreters,
    })}</code></pre>
    </details>

    <details class="examples">
    <summary>Examples</summary>
    ${restyler.metadata.tests.map((t) => testTemplate(language, t)).join("\n")}
    </details>

    <hr>
  `;
}

function testTemplate(language: string | null, test: Test): string {
  const clazz = languageClass(language);

  return `
  <div class="test">
    <div class="contents">
      <p><strong>Before</strong></p>
      <pre><code class="${clazz}">${escapeHTML(test.contents)}</code></pre>
    </div>
    <div class="restyled">
      <p><strong>After</strong></p>
      <pre><code class="${clazz}">${escapeHTML(test.restyled)}</code></pre>
    </div>
  </div>
  `;
}

function languageClass(language: string | null): string {
  if (language === null) {
    return "nohighlight";
  }

  switch (language) {
    // Non-language-specific case
    case "*":
      return "nohighlight";

    // No support in highlight.js
    case "Dhall":
      return "nohighlight";
    case "GN":
      return "nohighlight";
    case "Terraform":
      return "nohighlight";

    // Present as another name
    case "C#":
      return "csharp";
    case "F#":
      return "fsharp";
    case "POSIX sh":
      return "bash";
    case "PSQL":
      return "postgresql";
    case "System Verilog":
      return "verilog";

    // Most can work by just lowercasing
    default:
      return `language-${language.toLowerCase()}`;
  }
}

function loadManifest($section: HTMLElement, channel: string) {
  const manifest = `${docs}/data-files/restylers/manifests/${channel}/restylers.yaml`;

  $.ajax(manifest, {
    error: function () {
      console.error("Error downloading manifest");
    },
    success: function (data: string) {
      const restylers: Restyler[] = jsyaml.load(data);

      for (let restyler of restylers) {
        appendRestyler($section, restyler);
      }

      const hash = window.location.hash.replace(/^#/, "");

      if (hash !== "") {
        scrollToRestylerName(hash);
      }
    },
  });
}

function scrollToRestylerName(name: string) {
  const id = `${name}-restyler`;
  const anchor = document.getElementById(id);

  if (!anchor) {
    return;
  }

  const top =
    anchor.getBoundingClientRect().top + window.scrollY - navBarHeight;

  window.scrollTo({ top: top, behavior: "smooth" });
  history.pushState(null, "", `#${name}`);

  const query = window.location.search;
  const params = new URLSearchParams(query);
  const expand = params.has("expand") ? (params.get("expand") as string) : null;

  if (!expand) {
    return;
  }

  const details = document
    .getElementById(id)
    ?.parentNode?.querySelector(`.${expand}`);

  if (!details) {
    return;
  }

  (details as HTMLDetailsElement).open = true;
}

function escapeHTML(str: string): string {
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      }[tag] || tag)
  );
}

$(function () {
  const $section = document.getElementById("restylers");

  // Avoid accidentally dumping into a "Restylers" header
  if ($section && $section.tagName === "SECTION") {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    const channel = params.has("channel")
      ? (params.get("channel") as string)
      : "stable";

    loadManifest($section, channel);
  }
});
