import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("evidence", "routes/evidence.tsx"),
  route("matcher", "routes/matcher.tsx"),
] satisfies RouteConfig;
