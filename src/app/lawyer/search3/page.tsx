"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  ChevronLeft,
  Image,
  FileText,
  File,
  Play,
  Upload,
  Filter,
  Calendar,
  Users,
  Clock,
  LayoutGrid,
  List,
  Download,
  MoreVertical,
} from "lucide-react";
import Link from "next/link";

const CaseEvidenceViewer = () => {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-4">
            <Link
              href="/lawyer"
              className="flex items-center gap-2 text-gray-600"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>กลับไปหน้าคดี</span>
            </Link>
            <div className="text-xl font-bold text-purple-600 ml-4">
              คดีหมายเลข 2024003
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              อัพเดทล่าสุด: 2 ชั่วโมงที่แล้ว
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16 px-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-72 fixed left-6 mt-6 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">ข้อมูลคดี</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500">ประเภทคดี</div>
                    <div className="font-medium">คดีอาญา</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">ศาล</div>
                    <div className="font-medium">ศาลอาญากรุงเทพ</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span>6 ลูกความ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>นัดพิจารณา: 15 มี.ค. 2567</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  หมวดหมู่หลักฐาน
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">รูปภาพ</span>
                    </div>
                    <span className="text-sm text-gray-500">32</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <File className="h-4 w-4 text-red-500" />
                      <span className="text-sm">เอกสาร PDF</span>
                    </div>
                    <span className="text-sm text-gray-500">18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">เอกสารอื่นๆ</span>
                    </div>
                    <span className="text-sm text-gray-500">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">วิดีโอ</span>
                    </div>
                    <span className="text-sm text-gray-500">6</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="ml-80 flex-1 space-y-6 pb-6">
            {/* Action Bar */}
            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="ค้นหาหลักฐาน..."
                    className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <Filter className="h-4 w-4" />
                  <span>กรอง</span>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border rounded-lg p-1">
                  <button
                    className={`p-1 rounded ${
                      viewMode === "grid" ? "bg-gray-100" : ""
                    }`}
                    onClick={() => setViewMode("grid")}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    className={`p-1 rounded ${
                      viewMode === "list" ? "bg-gray-100" : ""
                    }`}
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
                <Link
                  href="/lawyer/uploads"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  <Upload className="h-4 w-4" />
                  <span>อัพโหลดหลักฐาน</span>
                </Link>
              </div>
            </div>

            {/* Evidence Grid */}
            <div
              className={
                viewMode === "grid" ? "grid grid-cols-3 gap-4" : "space-y-4"
              }
            >
              {[
                {
                  id: 1,
                  name: "บันทึกการสอบปากคำ.pdf",
                  icon: File,
                  uploader: "พนักงานสอบสวน สมชาย",
                },
                {
                  id: 2,
                  name: "ภาพถ่ายที่เกิดเหตุ.jpg",
                  icon: Image,
                  uploader: "จ่าสิบเอก มานะ",
                },
                {
                  id: 3,
                  name: "วิดีโอกล้องวงจรปิด.mp4",
                  icon: Play,
                  uploader: "ร.ต.ท. วิชัย",
                },
                {
                  id: 4,
                  name: "รายงานการตรวจสถานที่.docx",
                  icon: FileText,
                  uploader: "พ.ต.ท. ประสิทธิ์",
                },
                {
                  id: 5,
                  name: "ภาพถ่ายวัตถุพยาน.jpg",
                  icon: Image,
                  uploader: "จ่าสิบตำรวจ สมศักดิ์",
                },
                {
                  id: 6,
                  name: "รายงานนิติเวช.pdf",
                  icon: File,
                  uploader: "นพ.รุ่งโรจน์",
                },
              ].map((item) => (
                <Card
                  key={item.id}
                  className={`${viewMode === "list" ? "p-4" : ""}`}
                >
                  {viewMode === "grid" ? (
                    <div>
                      <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                        <item.icon className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{item.name}</div>
                          <button>
                            <MoreVertical className="h-4 w-4 text-gray-400" />
                          </button>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          อัพโหลดโดย: {item.uploader}
                        </div>
                        <div className="text-sm text-gray-500">
                          28 ก.พ. 2567
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <item.icon className="h-8 w-8 text-gray-400" />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500">
                            อัพโหลดโดย: {item.uploader} • 28 ก.พ. 2567
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Download className="h-4 w-4 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <MoreVertical className="h-4 w-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseEvidenceViewer;
