"use client";
import { useState } from "react";
import { BackHeader } from "@/components/common/back-header";
import { Header } from "@/components/common/header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

interface Lawyer {
  initial: string;
  name: string;
  status: string;
}

const lawyers: Lawyer[] = [
  {
    initial: "ก",
    name: "กรวิทย์ เจริญสุข",
    status: "ทนายความ",
  },
  {
    initial: "ส",
    name: "สมชาย วิริยะวงศ์",
    status: "ทนายความ",
  },
  {
    initial: "ป",
    name: "ปิยะ ชินวัตร",
    status: "ทนายความ",
  },
  {
    initial: "ว",
    name: "วรรณา สุขสมบูรณ์",
    status: "ทนายความ",
  },
  {
    initial: "ท",
    name: "ทักษิณา ธนสาร",
    status: "ทนายความ",
  },
  {
    initial: "น",
    name: "นภัสวรรณ พรมมา",
    status: "ทนายความ",
  },
];

const LawyerCandidates = () => {
  const [selectedLawyer, setSelectedLawyer] = useState<number | null>(null);

  const handleSelectLawyer = (index: number) => {
    setSelectedLawyer(index);
  };

  return (
    <div>
      <Header />
      <div className="max-w-3xl pt-16 mx-auto p-6">
        <BackHeader />
        <Card className="mb-6 pt-12">
          <CardContent className="p-6">
            <h2 className="text-lg mb-6">รายชื่อทนายความ</h2>
            <div className="bg-orange-50 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-600 mb-2">คดีหมายเลข 2024101</div>
                  <div className="text-4xl font-bold text-orange-600">
                    ทนายความ
                  </div>
                </div>
                <div className="text-orange-600 text-4xl">
                  <User size={48} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg mb-6">รายชื่อทนายความที่พร้อมให้บริการ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lawyers.map((lawyer, index) => (
                <div
                  key={index}
                  className={`flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200 ${
                    selectedLawyer === index
                      ? "bg-orange-50 border-orange-300"
                      : ""
                  }`}
                  onClick={() => handleSelectLawyer(index)}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div
                      className={`w-12 h-12 rounded-full ${
                        selectedLawyer === index
                          ? "bg-orange-100"
                          : "bg-orange-50"
                      } flex items-center justify-center text-orange-600 text-xl`}
                    >
                      {lawyer.initial}
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium">{lawyer.name}</div>
                      <div className="text-sm text-gray-500">
                        {lawyer.status}
                      </div>
                    </div>
                    {selectedLawyer === index && (
                      <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-center text-gray-600 mb-4">
              <p>กรุณาเลือกทนายความที่ต้องการปรึกษา</p>
              <p>ท่านสามารถเลือกได้ 1 ท่าน</p>
            </div>
            <div className="mt-4">
              <Link href="/case/1">
                <Button
                  className="w-full py-3 bg-orange-500 text-white hover:bg-orange-600 disabled:bg-orange-200 disabled:text-gray-400"
                  disabled={selectedLawyer === null}
                  variant="default"
                >
                  ดำเนินการต่อ
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LawyerCandidates;
