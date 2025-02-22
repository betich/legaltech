import { BackHeader } from "@/components/common/back-header";
import CostBreakdown from "@/components/cost-breakdown";
import { Clock, UploadCloud } from "lucide-react";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <>
      <BackHeader />
      {/* <h1>Dynamic Page for ID: {id}</h1> */}
      <div className="flex items-center justify-between bg-purple-50 rounded-lg pt-24 pb-16 px-8">
        <div>
          <div className="font-medium text-lg">คดีหมายเลข 2024101</div>
          <div className="text-purple-600 font-medium mt-1">กำลังดำเนินการ</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              อัพเดทล่าสุด: 2 ชั่วโมงที่แล้ว
            </span>
          </div>
          <Link
            href="/case/1/evidence"
            className="text-white flex items-center gap-2 rounded-md px-6 py-2 bg-purple-600 hover:bg-purple-700"
          >
            <UploadCloud className="h-4 w-4" />
            <span>อัปโหลดหลักฐาน</span>
          </Link>
        </div>
      </div>
      <CostBreakdown />
    </>
  );
}
