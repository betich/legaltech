import { Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { LawyerHeader } from "./common/lawyer-header";

const ClaimDashboard = () => {
  const stats = [
    { title: "คดีทั้งหมด", value: "245", subtitle: "อัพเดทล่าสุด" },
    { title: "คดีที่กำลังดำเนินการ", value: "3", subtitle: "ต้องดำเนินการ" },
    { title: "นัดหมายวันนี้", value: "8", subtitle: "การนัดหมาย" },
  ];

  const recentClaims = [
    {
      id: "2024001",
      date: "15 ม.ค. 2567",
      users: "32 ราย",
      status: "อัพเดทเมื่อ 2 ชั่วโมงที่แล้ว",
      link: "/lawyer/search",
    },
    {
      id: "2024002",
      date: "15 ม.ค. 2567",
      users: "32 ราย",
      status: "อัพเดทเมื่อ 2 ชั่วโมงที่แล้ว",
      link: "/lawyer/search",
    },
    {
      id: "2024003",
      date: "15 ม.ค. 2567",
      users: "32 ราย",
      status: "อัพเดทเมื่อ 2 ชั่วโมงที่แล้ว",
      link: "/lawyer/search",
    },
  ];

  const days = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <LawyerHeader newNotificationsCount={2} />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-gray-600 mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Claims */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">รายการคดีล่าสุด</h2>
          <div className="space-y-4">
            {recentClaims.map((claim) => (
              <Link href={claim.link} key={claim.id} className="block">
                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-indigo-50 rounded">
                      <svg
                        className="w-6 h-6 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">คดีหมายเลข {claim.id}</h3>
                      <p className="text-sm text-gray-500">{claim.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {claim.users}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {claim.date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Calendar */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">ปฏิทินนัดหมาย</h2>
          <div className="grid grid-cols-7 gap-2">
            {days.map((day) => (
              <div key={day} className="text-center text-sm text-gray-500 py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i + 1}
                className="aspect-square flex items-center justify-center border rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClaimDashboard;
