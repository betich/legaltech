import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Users,
  AlertCircle,
  ChevronRight,
  Filter,
  CheckCircle,
  MessageCircle,
  X,
  Send,
} from "lucide-react";
import { BackHeader } from "./common/back-header";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { caseData, GroupCase } from "@/lib/cases";

interface SearchCases extends GroupCase {
  matchScore: number | null;
}

const MassLitigationMatcher = () => {
  const [caseCriteria, setCaseCriteria] = useState<GroupCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCases, setFilteredCases] = useState<SearchCases[]>([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [{ text: "สวัสดีค่ะ ฉันสามารถช่วยคุณค้นหาคดีที่เหมาะสมได้", isUser: false }]
  );
  const [newMessage, setNewMessage] = useState("");

  // Simulate data loading
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setCaseCriteria(caseData);
        setFilteredCases(
          caseData.map(
            (caseGroup) =>
              ({
                ...caseGroup,
                matchScore: null,
              } as SearchCases)
          )
        );
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Search functionality
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchQuery) {
        const filtered = caseCriteria.filter(
          (caseGroup) =>
            caseGroup.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            caseGroup.requirements.some((req) =>
              req.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setFilteredCases(
          filtered.map((caseGroup) => ({
            ...caseGroup,
            matchScore: Math.min(
              Math.floor(
                ((searchQuery.length * 4) /
                  (caseGroup.title.length +
                    caseGroup.requirements.join(" ").length)) *
                  100
              ),
              100
            ),
          }))
        );
      } else {
        setFilteredCases(
          caseCriteria.map((caseGroup) => ({
            ...caseGroup,
            matchScore: null,
          }))
        );
      }
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchQuery, caseCriteria]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: newMessage, isUser: true }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "ขอบคุณสำหรับคำถาม เราจะช่วยคุณค้นหาคดีที่เหมาะสมให้ค่ะ",
          isUser: false,
        },
      ]);
    }, 1000);

    setNewMessage("");
  };

  // Loading skeleton component
  const CaseSkeleton = () => (
    <div className="p-4 border rounded-lg space-y-4">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <Skeleton className="bg-gray-100 h-6 w-64" />
          <Skeleton className="bg-gray-100 h-4 w-40" />
        </div>
        <Skeleton className="h-6 w-6" />
      </div>
      <div className="space-y-2">
        <Skeleton className="bg-gray-100 h-4 w-32" />
        <Skeleton className="bg-gray-100 h-4 w-full" />
        <Skeleton className="bg-gray-100 h-4 w-full" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <BackHeader />

      <div className="pt-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6 py-6">
          {/* Search Section */}
          <Card>
            <CardHeader>
              <CardTitle>ค้นหากลุ่มคดีของคุณ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <MessageCircle className="h-6 w-6 absolute top-3 left-3 text-gray-400" />
                <textarea
                  placeholder="อธิบายหรือค้นหาตามประเภทคดีหรือลักษณะความเสียหาย"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                {loading ? (
                  <>
                    <CaseSkeleton />
                    <CaseSkeleton />
                    <CaseSkeleton />
                  </>
                ) : filteredCases.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    ไม่พบคดีที่ตรงกับการค้นหา
                  </div>
                ) : (
                  filteredCases
                    .slice(0, 10)
                    .sort((a, b) =>
                      a.matchScore && b.matchScore
                        ? b?.matchScore - a?.matchScore // dsc
                        : 0
                    )
                    .map((caseGroup) => (
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

                        {caseGroup.matchScore !== null && (
                          <div className="text-lg mt-4 font-bold text-purple-600">
                            {caseGroup.matchScore}% ตรงกัน
                          </div>
                        )}

                        <div className="mt-4">
                          <div className="text-sm font-medium mb-2">
                            คุณสมบัติที่ต้องการ:
                          </div>
                          <div className="space-y-2">
                            {caseGroup.requirements.map((req, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                                <span className="text-sm text-gray-600">
                                  {req}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 flex justify-end">
                          <Link href={`/client`}>
                            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                              เข้าร่วมคดีหมู่
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))
                )}
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

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showChatbot ? (
          <Button
            onClick={() => setShowChatbot(true)}
            className="h-12 w-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        ) : (
          <Card className="w-80">
            <CardHeader className="flex flex-row items-center justify-between p-4">
              <CardTitle className="text-lg">ผู้ช่วยค้นหาคดี</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowChatbot(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-80 overflow-y-auto space-y-4 mb-4">
                {messages.slice(0, 5).map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.isUser
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="พิมพ์ข้อความ..."
                  className="flex-1"
                />
                <Button type="submit">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MassLitigationMatcher;
