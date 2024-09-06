import handler from "./../edge-functions/restyler-tags.js";

describe("restyler-tags", () => {
  const scenarios = [
    ["astyle", ["v3.1-2", "v3.1"]],
    ["cabal-fmt", ["v0.1", "v0", "v0.1.6"]],
    ["fourmolu", ["v0.10.1.0", "v0.4.0.0", "v0.3.0.0"]],
  ];

  it.each(scenarios)(
    "Fetches version tags for %s",
    async (name, tags) => {
      const request = new Request(
        `https://example.com/restyler-tags?name=${name}`
      );

      const response = await handler(request, {});
      expect(response.ok).toBe(true);

      const json = await response.json();
      expect(json.slice(-tags.length)).toEqual(tags);
    },
    60 * 1000
  );

  it("Returns 400 for missing name param", async () => {
    const request = new Request("https://example.com/restyler-tags");

    const response = await handler(request, {});

    expect(response.ok).toBe(false);
    expect(response.status).toBe(400);
  });

  it("Returns 404 for non-existent Restyler names", async () => {
    const request = new Request(
      "https://example.com/restyler-tags?name=floobey"
    );

    const response = await handler(request, {});

    expect(response.ok).toBe(false);
    expect(response.status).toBe(404);
  });
});
