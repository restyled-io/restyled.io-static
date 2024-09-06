import handler from "./../edge-functions/restyler-tags.js";

describe("restyler-tags", () => {
  it(
    "Returns all non-SHA tags from DockerHub",
    async () => {
      const request = new Request(
        "https://example.com/restyler-tags?name=fourmolu"
      );

      const response = await handler(request, {});
      expect(response.ok).toBe(true);

      // Assert on oldest 5 so, as we ship new tags, this test still passes
      const json = await response.json();
      expect(json.slice(-5)).toEqual([
        "v0.14.1.0",
        "v0.13.0.0",
        "v0.12.0.0",
        "v0.10.1.0",
        "v0.4.0.0",
      ]);
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
