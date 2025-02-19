import { type RouteConfig, index, route } from "@react-router/dev/routes";
import fs from "fs";
import path from "path";

const routesDir = path.join(__dirname, "routes");
const files = fs.readdirSync(routesDir).filter((file) => file !== "home.tsx");

const routes = files.map((file) => {
  const routeName = path.basename(file, ".tsx");
  return route(routeName, `routes/${file}`);
});

export default [index("routes/home.tsx"), ...routes] satisfies RouteConfig;
