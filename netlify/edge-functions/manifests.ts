/* Redirects /data-files/restylers/manifests/:channel/restylers.yaml to
 * https://github.com/.../releases/download/:channel/restylers.yaml.
 *
 * This keeps all our docs.restyled.io links to manifests working even when we
 * move storage entirely to GitHub releases.
 *
 * This could be a simple redirect, but alas, CORS.
 */
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
