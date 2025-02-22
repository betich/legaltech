import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Users,
  AlertCircle,
  ChevronRight,
  Filter,
  CheckCircle,
} from "lucide-react";
import { BackHeader } from "./common/back-header";

const defaultCaseCriteria = [
  {
    id: 1,
    title: "ผู้ได้รับผลกระทบจากมลพิษทางอากาศ",
    requirements: [
      "อาศัยในพื้นที่รัศมี 5 กม. จากโรงงาน",
      "มีอาการทางระบบหายใจในช่วง 2 ปีที่ผ่านมา",
      "มีหลักฐานทางการแพทย์",
    ],
    currentMembers: 156,
    status: "กำลังรวบรวม",
  },
  {
    id: 2,
    title: "ผู้เสียหายจากการละเมิดข้อมูลส่วนบุคคล",
    requirements: [
      "เป็นลูกค้าของบริษัท X ในช่วงปี 2566",
      "พบการใช้ข้อมูลโดยไม่ได้รับอนุญาต",
      "มีหลักฐานความเสียหาย",
    ],
    currentMembers: 892,
    status: "เปิดรับสมาชิก",
  },
];

const MassLitigationMatcher = () => {
  const [caseCriteria, setCaseCriteria] = useState(defaultCaseCriteria);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <BackHeader />

      {/* Main Content */}
      <div className="pt-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6 py-6">
          {/* Search Section */}
          <Card>
            <CardHeader>
              <CardTitle>ค้นหากลุ่มคดีของคุณ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="ค้นหาตามประเภทคดีหรือลักษณะความเสียหาย"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg">
                  <Filter className="h-4 w-4" />
                  <span>กรองตามประเภท</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg">
                  <AlertCircle className="h-4 w-4" />
                  <span>สถานะการรับสมัคร</span>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Available Groups */}
          <Card>
            <CardHeader>
              <CardTitle>กลุ่มคดีที่เปิดรับสมาชิก</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {caseCriteria.map((caseGroup) => (
                  <div
                    key={caseGroup.id}
                    className="p-4 border rounded-lg hover:border-purple-300 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-lg">
                          {caseGroup.title}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {caseGroup.currentMembers} สมาชิก
                          </span>
                          <span className="text-sm text-purple-600 font-medium">
                            • {caseGroup.status}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>

                    <div className="mt-4">
                      <div className="text-sm font-medium mb-2">
                        คุณสมบัติที่ต้องการ:
                      </div>
                      <div className="space-y-2">
                        {caseGroup.requirements.map((req, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                            <span className="text-sm text-gray-600">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Link href={`/`}>
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                          เข้าร่วมคดีหมู่
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Help Section */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-purple-600" />
                  <div className="pt-2">
                    <div className="font-medium">ต้องการความช่วยเหลือ?</div>
                    <div className="text-sm text-gray-600 mt-1">
                      ปรึกษาเจ้าหน้าที่เพื่อประเมินคดีของคุณ
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                  ติดต่อเรา
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MassLitigationMatcher;
