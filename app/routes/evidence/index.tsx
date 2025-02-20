import EvidenceUpload from "~/components/evidence-upload";
import type { Route } from "./+types/index";
import { Header } from "~/components/common/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Evidence" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Evidence() {
  return (
    <div>
      <Header />
      <EvidenceUpload />
    </div>
  );
}
