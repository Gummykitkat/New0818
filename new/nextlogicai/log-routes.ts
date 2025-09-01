import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appDir = path.join(__dirname, "src", "app");

function getRoutes(dir: string, base = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subDir = path.join(dir, entry.name);
      routes = routes.concat(getRoutes(subDir, `${base}/${entry.name}`));
    } else if (entry.name === "page.tsx" || entry.name === "page.js") {
      // add the route
      routes.push(base === "" ? "/" : base);
    }
  }

  return routes;
}

const routes = getRoutes(appDir);
console.log("Detected routes:\n", routes.join("\n"));
