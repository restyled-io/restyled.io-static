import type { Config, Context } from "@netlify/edge-functions";

export default async (_request: Request, _context: Context) => {
  const example = "https://objects.githubusercontent.com/github-production-release-asset-2e65be/107553617/7e7edbf0-0130-4084-ab74-9e2ae5180c79?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=releaseassetproduction%2F20240807%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240807T195604Z&X-Amz-Expires=300&X-Amz-Signature=67a2f43175c9eaa1412b4eb347593e1dc247b9c58af7c318568d975dcfea2c05&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=107553617&response-content-disposition=attachment%3B%20filename%3Drestylers.yaml&response-content-type=application%2Foctet-stream";
  const response = Response.redirect(example)
  response.headers["Access-Allow-Origin"] = "*"
  return response
}

export const config: Config = { path: "/test" };
