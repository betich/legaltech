import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("search", "routes/search/index.tsx"),
  route("claim", "routes/claim.tsx"),
  route("evidence", "routes/evidence/index.tsx"),
  // route("case/:id", "routes/matcher/[id].tsx"),
  // route("evidence/:id", "routes/matcher/[id].tsx"),
  // route("search/:id", "routes/matcher/[id].tsx"),
  route("lawyer", "routes/lawyer.tsx"),
  route("case", "routes/case.tsx"),
] satisfies RouteConfig;
