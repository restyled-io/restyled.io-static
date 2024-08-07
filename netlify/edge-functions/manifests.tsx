declare var URL: any;

import type { Context } from "@netlify/edge-functions";

export default async (request: Request, _context: Context) => {
  const url = new URL(request.url)
  const suffix = url.pathname.slice("/data-files/restylers/manifests/".length)
  const ghURL = `https://github.com/restyled-io/restylers/releases/download/${suffix}`
  const response = await fetch(ghURL)
  return new Response(response.body, {
    headers: {
      'access-control-allow-origin': '*',
      'x-github-url': ghURL
    }
  })
}
