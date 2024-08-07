import type { Config, Context } from "@netlify/edge-functions";

export default async (_request: Request, _context: Context) => {
  const response = await fetch("https://github.com/restyled-io/restylers/releases/download/stable/restylers.yaml")
  response.headers["Access-Allow-Origin"] = "*"
  return response
}

export const config: Config = { path: "/test" };
