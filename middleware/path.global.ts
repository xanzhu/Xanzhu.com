// Version 2 test
import { ServerResponse } from "http";

export default function (req: any, res: ServerResponse) {
  // Check if the method is GET and the route is the root '/'
  if (req.method === "GET" && req.path === "/") {
    // Get the preferred language from the accept-language header
    const preferredLanguage = req.headers["accept-language"];

    // Redirect to the appropriate locale based on the preferred language
    return navigateTo(`/${preferredLanguage}`, { redirectCode: 301 });
  }
}