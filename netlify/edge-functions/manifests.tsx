import type { Context } from "@netlify/edge-functions";

declare var URLPattern: any;

export default async (request: Request, _context: Context) => {
  const {pathname} = URLPattern.exec(request.url)
  const suffix = pathname.slice("/data-files/manifests/restylers/".length)
  const ghURL = `https://github.com/restyled-io/restylers/releases/download/${suffix}`
  const response = await fetch(ghURL)
  return new Response(response.body, {
    headers: {
      'access-control-allow-origin': '*',
      'x-github-url': ghURL
    }
  })
}
