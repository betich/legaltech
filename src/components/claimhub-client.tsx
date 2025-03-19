import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  PhoneCall,
  MessageCircle,
  Upload,
  SearchIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";

const ClaimHubClientPortal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Say Hi */}
      <main className="relative pt-24">
        <div className="from-indigo-900 relative to-orange-300 bg-gradient-to-b bg-fixed bg-center text-white py-12">
          <div className="max-w-4xl relative mx-auto px-6">
            <h1 className="text-3xl font-bold">ยินดีต้อนรับสู่ ClaimHub</h1>
            <p className="mt-2 text-lg">
              ระบบการจัดการคดีที่ทันสมัยและง่ายต่อการใช้งาน
            </p>
            <div className="flex flex-col gap-2 sm:flex-row items-center sm:gap-4 mt-4">
              <Link
                href="/search"
                className="flex gap-2 w-full sm:w-fit items-center bg-white text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50 transition-colors"
              >
                <SearchIcon className="h-5 w-5" />
                <span>ค้นหากลุ่มคดีที่ตรงกับคุณ</span>
              </Link>
              <span>หรือ</span>
              <Link
                href="/claim"
                className="flex gap-2 w-full sm:w-fit items-center bg-white text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50 transition-colors"
              >
                <PlusIcon className="h-5 w-5" />
                <span>สร้างคดีใหม่</span>
              </Link>
            </div>
          </div>
          {/* dark filter */}
          {/* <div className="absolute inset-0 bg-black opacity-30 z-0"></div> */}
        </div>
      </main>

      {/* Main Content */}
      <div className="pt-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6 py-6">
          {/* Case Status Card */}
          <Card>
            <CardHeader>
              <CardTitle>สถานะคดีของคุณ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start items-center justify-between p-4 bg-indigo-50 rounded-lg">
                  <div>
                    <div className="font-medium text-lg">
                      คดีหมายเลข 2024101
                    </div>
                    <div className="text-indigo-600 font-medium mt-1">
                      กำลังดำเนินการ
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        อัพเดทล่าสุด: 2 ชั่วโมงที่แล้ว
                      </span>
                    </div>
                    <Link
                      href="/case/1"
                      className="text-white flex items-center gap-2 rounded-md px-6 py-2 bg-indigo-600 hover:bg-indigo-700"
                    >
                      <span>ดูเพิ่มเติม</span>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div>
                    <div className="font-medium text-lg">
                      คดีหมายเลข 2024108
                    </div>
                    <div className="!text-orange-600 font-medium mt-1">
                      รอเลือกทนาย
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        อัพเดทล่าสุด: 1 วันที่แล้ว
                      </span>
                    </div>
                    <Link
                      href="/case/2"
                      className="text-white flex items-center gap-2 rounded-md px-6 py-2 bg-orange-600 hover:bg-orange-700"
                    >
                      <span>ดูเพิ่มเติม</span>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Appointment */}
          <Card>
            <CardHeader>
              <CardTitle>นัดหมายครั้งต่อไป</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-gray-500">นัดทนายความ</div>
                      <div className="bg-white text-indigo-600 border border-indigo-200 text-xs px-4 py-1 rounded-lg inline-block">
                        คดีหมายเลข 2024101
                      </div>
                    </div>
                    <div className="text-gray-500 mt-1">
                      15 มกราคม 2567 เวลา 10:00 น.
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                      <Calendar className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Updates */}
          <Card>
            <CardHeader>
              <CardTitle>ความคืบหน้าล่าสุด</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "4 ม.ค. 2567",
                    title: "ยื่นเอกสารเพิ่มเติม",
                    case: "2024101",
                    description: "ทนายได้ยื่นเอกสารประกอบคำฟ้องเพิ่มเติมแล้ว",
                  },
                  {
                    date: "2 ม.ค. 2567",
                    title: "รับทราบนัดหมาย",
                    case: "2024101",
                    description: "กำหนดนัดพบทนายเพื่อเตรียมเอกสารเพิ่มเติม",
                  },
                ].map((update, i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-gray-500">{update.date}</div>
                      <div className="bg-white text-indigo-600 border border-indigo-200 text-xs px-4 py-1 rounded-lg inline-block">
                        คดีหมายเลข {update.case}
                      </div>
                    </div>
                    <div className="font-medium mt-1">{update.title}</div>
                    <div className="text-gray-600 mt-1">
                      {update.description}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions - Centered */}
          <div className="flex justify-center gap-4 px-4 text-sm sm:text-base">
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
              <PhoneCall className="h-5 w-5" />
              <span>ติดต่อทนาย</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span>ส่งข้อความ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimHubClientPortal;