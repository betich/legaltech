import { BackHeader } from "~/components/common/back-header";
import type { Route } from "./+types/claim";

export function meta({}: Route.MetaArgs) {
  return [{ title: "ClaimHub" }, { name: "description", content: "" }];
}

export default function Claim() {
  return (
    <>
      <BackHeader />
      <div className="min-h-screen bg-gray-50 pt-8">
        <section className="flex flex-col gap-4 px-2 sm:px-8 py-12">
          <h1 className="text-2xl font-semibold">สร้างคดีใหม่</h1>
          <p>claim</p>
        </section>
      </div>
    </>
  );
}
