declare var URL: any;

import type { Context } from "@netlify/edge-functions";

type Tag = {
  name: string;
};

type Page = {
  next: string | null | undefined;
  results: Tag[];
};

class ResponseError extends Error {
  status: number;
  statusText: string;

  constructor(status: number, statusText: string) {
    super(`${status}: ${statusText}`);
    this.name = "ResponseError";
    this.status = status;
    this.statusText = statusText;
  }

  toResponse(): Response {
    return new Response(this.statusText, {
      status: this.status,
      headers: {
        "access-control-allow-origin": "*",
        "content-type": "application/json",
      },
    });
  }
}

async function fetchPage(url: string): Promise<Page> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new ResponseError(response.status, response.statusText);
  }

  const page: Page = await response.json();

  return page;
}

async function fetchTags(
  namespace: string,
  repository: string
): Promise<Tag[]> {
  let page: Page = {
    next: `https://hub.docker.com/v2/namespaces/${namespace}/repositories/${repository}/tags?page_size=100`,
    results: [],
  };

  let results: Tag[] = [];

  while (true) {
    results = results.concat(
      page.results.filter((tag) => !isCommitSha(tag.name))
    );

    if (!page.next) {
      break;
    }

    page = await fetchPage(page.next);
  }

  return results;
}

function isCommitSha(name: string): boolean {
  return name.match(/^[a-f0-9]{40}$/) !== null;
}

export default async (request: Request, _context: Context) => {
  try {
    const url = new URL(request.url);
    const params: URLSearchParams = url.searchParams;
    const name = params.get("name");

    if (!name) {
      throw new ResponseError(400, "name parameter is required");
    }

    const tags = await fetchTags("restyled", `restyler-${name}`);
    const body = JSON.stringify(tags.map((tag) => tag.name));

    return new Response(body, {
      headers: {
        "access-control-allow-origin": "*",
        "content-type": "application/json",
      },
    });
  } catch (e) {
    if (e instanceof ResponseError) {
      return e.toResponse();
    }

    throw e; // rethrow
  }
};
