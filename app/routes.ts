import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  //  search similar cases
  route("search", "routes/search/index.tsx"),
  // create claim
  route("claim", "routes/claim.tsx"),
  // lawyer
  route("lawyer", "routes/lawyer/index.tsx"),
  // case
  route("case", "routes/case/index.tsx"),
  route("case/:id", "routes/case/[id].tsx"),
  // evidence
  route("evidence", "routes/evidence/index.tsx"),
  // route("evidence/:id", "routes/matcher/[id].tsx"),
  // admin
  route("admin", "routes/admin/admin.tsx"),
] satisfies RouteConfig;
