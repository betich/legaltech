import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  // search similar cases
  route("search", "routes/search/index.tsx"),
  // create claim
  route("claim", "routes/claim.tsx"),
  // lawyer
  route("lawyer", "routes/lawyer/index.tsx"),
  route("lawyer/search1", "routes/lawyer-search1.tsx"),
  route("lawyer/search2", "routes/lawyer-search2.tsx"),
  route("lawyer/search3", "routes/lawyer-search3.tsx"), // Ensure this line is present
  // case
  route("case", "routes/case/index.tsx"),
  route("case/:id", "routes/case/[id].tsx"),
  // evidence
  route("evidence", "routes/evidence/index.tsx"),
  // admin
  route("admin", "routes/admin/admin.tsx"),
] satisfies RouteConfig;
