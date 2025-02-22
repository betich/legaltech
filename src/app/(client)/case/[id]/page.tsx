import { BackHeader } from "@/components/common/back-header";
import CreateClaimForm from "@/components/create-claim";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <>
      <h1>Dynamic Page for ID: {id}</h1>;
    </>
  );
}
