import { BackHeader } from "@/components/common/back-header";
import type { Route } from "./+types/index";
import CreateClaimForm from "@/components/create-claim";

export function meta({}: Route.MetaArgs) {
  return [{ title: "ClaimHub" }, { name: "description", content: "" }];
}

export default function Claim() {
  return (
    <>
      <BackHeader />
      <CreateClaimForm />
    </>
  );
}
