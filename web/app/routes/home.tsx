import type { Route } from "./+types/home";
import ClaimHubClientPortal from "~/components/claimhub-client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <ClaimHubClientPortal />;
}
