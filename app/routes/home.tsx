import { Header } from "~/components/common/header";
import type { Route } from "./+types/home";
import ClaimHubClientPortal from "~/components/claimhub-client";

export function meta({}: Route.MetaArgs) {
  return [{ title: "ClaimHub" }, { name: "description", content: "" }];
}

export default function Home() {
  return (
    <>
      <Header />
      <ClaimHubClientPortal />;
    </>
  );
}
