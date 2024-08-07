import type { Config, Context } from "@netlify/edge-functions";

export default async (_request: Request, _context: Context) => {
  const response = await fetch("https://github.com/restyled-io/restylers/releases/download/stable/restylers.yaml")
  return new Response(response.body, {
    headers: {
       'access-control-allow-origin': '*'
    }
  })
}

export const config: Config = { path: "/test" };
