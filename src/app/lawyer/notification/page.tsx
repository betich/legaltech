"use client";
import { useState } from "react";
import { Bell, Clock, Users, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import LawyerCandidates from "@/app/(client)/case/lawyer/page";
import { LawyerHeader } from "@/components/common/lawyer-header";

interface Notification {
  id: string;
  caseId: string;
  caseTitle: string;
  timestamp: string;
  users: string;
  status: "รอการตอบรับ" | "ตอบรับแล้ว" | "ปฏิเสธแล้ว";
  description: string;
  deadline: string;
  compensation: string;
  isNew: boolean;
}

const NotificationPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "N2024001",
      caseId: "2024005",
      caseTitle: "คดีมลพิษทางน้ำ จ.ระยอง",
      timestamp: "15 มี.ค. 2567 · 14:30 น.",
      users: "156 ราย",
      status: "รอการตอบรับ",
      description:
        "คดีมลพิษทางน้ำที่ส่งผลกระทบต่อชาวประมงในพื้นที่จังหวัดระยอง",
      deadline: "21 มี.ค. 2567",
      compensation: "8,500,000 บาท",
      isNew: true,
    },
    {
      id: "N2024002",
      caseId: "2024006",
      caseTitle: "คดีผู้บริโภค บริษัท ABC",
      timestamp: "14 มี.ค. 2567 · 09:15 น.",
      users: "78 ราย",
      status: "รอการตอบรับ",
      description:
        "คดีผู้บริโภคเกี่ยวกับผลิตภัณฑ์ที่มีความบกพร่องจากบริษัท ABC",
      deadline: "20 มี.ค. 2567",
      compensation: "2,300,000 บาท",
      isNew: true,
    },
    {
      id: "N2024003",
      caseId: "2024002",
      caseTitle: "คดีที่ดิน อ.บางละมุง",
      timestamp: "10 มี.ค. 2567 · 11:45 น.",
      users: "32 ราย",
      status: "ตอบรับแล้ว",
      description: "คดีพิพาทเรื่องสิทธิที่ดินในพื้นที่อำเภอบางละมุง",
      deadline: "16 มี.ค. 2567",
      compensation: "4,200,000 บาท",
      isNew: false,
    },
  ]);

  const handleAccept = (id: string): void => {
    if (!id) return;
    try {
      setNotifications(
        notifications.map((notification) =>
          notification.id === id
            ? { ...notification, status: "ตอบรับแล้ว", isNew: false }
            : notification
        )
      );
    } catch (error) {
      console.error("Error updating notification status:", error);
    }
  };

  const handleDecline = (id: string): void => {
    if (!id) return;
    try {
      setNotifications(
        notifications.map((notification) =>
          notification.id === id
            ? { ...notification, status: "ปฏิเสธแล้ว", isNew: false }
            : notification
        )
      );
    } catch (error) {
      console.error("Error updating notification status:", error);
    }
  };

  const newNotificationsCount = notifications.filter((n) => n.isNew).length;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <LawyerHeader newNotificationsCount={newNotificationsCount} />

      {/* Notification Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Bell className="w-5 h-5 text-indigo-600" />
          การแจ้งเตือนคดีรวม
        </h2>
      </div>

      {/* Notifications */}
      <div className="space-y-4 mb-6">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={
              notification.isNew ? "border-indigo-300 bg-indigo-50" : ""
            }
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <Bell className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">
                        {notification.caseTitle}
                      </h3>
                      {notification.isNew && (
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                          ใหม่
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      คดีหมายเลข {notification.caseId}
                    </p>
                    <p className="mb-3">{notification.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">
                          ผู้เสียหาย: {notification.users}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">
                          กำหนดตอบรับ: {notification.deadline}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm">
                          ค่าเสียหาย: {notification.compensation}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">
                      {notification.timestamp}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      notification.status === "รอการตอบรับ"
                        ? "bg-yellow-100 text-yellow-800"
                        : notification.status === "ตอบรับแล้ว"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {notification.status}
                  </span>
                </div>
              </div>

              {notification.status === "รอการตอบรับ" && (
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={() => handleDecline(notification.id)}
                    className="flex items-center gap-1 px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50"
                  >
                    <XCircle className="w-4 h-4" />
                    ปฏิเสธ
                  </button>
                  <button
                    onClick={() => handleAccept(notification.id)}
                    className="flex items-center gap-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    <CheckCircle className="w-4 h-4" />
                    รับคดี
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Notifications Placeholder */}
      {notifications.length === 0 && (
        <Card className="bg-gray-50">
          <CardContent className="p-10 text-center">
            <div className="flex justify-center mb-4">
              <Bell className="w-12 h-12 text-gray-300" />
            </div>
            <h3 className="text-lg font-medium text-gray-500 mb-2">
              ไม่มีการแจ้งเตือนในขณะนี้
            </h3>
            <p className="text-gray-400">
              เมื่อมีคดีรวมใหม่เข้ามา คุณจะได้รับการแจ้งเตือนที่นี่
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NotificationPage;
