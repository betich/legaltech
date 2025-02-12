import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Calendar, Search, User, FileText, Clock, PhoneCall, MessageCircle } from 'lucide-react';

const ClaimHubClientPortal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="text-xl font-bold text-purple-600">ClaimHub</div>
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-500" />
            <User className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </header>

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
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <div className="font-medium text-lg">คดีหมายเลข 2024101</div>
                    <div className="text-purple-600 font-medium mt-1">กำลังดำเนินการ</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">อัพเดทล่าสุด: 2 ชั่วโมงที่แล้ว</span>
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
                    <div className="font-medium">นัดพบทนายความ</div>
                    <div className="text-gray-500 mt-1">15 มกราคม 2567 เวลา 10:00 น.</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-purple-100 text-purple-600 rounded-lg">
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
                    date: '4 ม.ค. 2567',
                    title: 'ยื่นเอกสารเพิ่มเติม',
                    description: 'ทนายได้ยื่นเอกสารประกอบคำฟ้องเพิ่มเติมแล้ว'
                  },
                  {
                    date: '2 ม.ค. 2567',
                    title: 'รับทราบนัดหมาย',
                    description: 'กำหนดนัดพบทนายเพื่อเตรียมเอกสารเพิ่มเติม'
                  }
                ].map((update, i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <div className="text-sm text-gray-500">{update.date}</div>
                    <div className="font-medium mt-1">{update.title}</div>
                    <div className="text-gray-600 mt-1">{update.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions - Centered */}
          <div className="flex justify-center gap-4 px-4">
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
              <PhoneCall className="h-5 w-5" />
              <span>ติดต่อทนาย</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
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
