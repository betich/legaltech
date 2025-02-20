import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("evidence", "routes/evidence/index.tsx"),
  route("search", "routes/search/index.tsx"),
  // route("search/:id", "routes/matcher/[id].tsx"),
  route("lawyer", "routes/lawyer.tsx"),
] satisfies RouteConfig;
