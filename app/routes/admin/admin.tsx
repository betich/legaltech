import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Users, AlertCircle, CheckCircle, PlusCircle } from "lucide-react";

interface Chat {
  id: string;
  timestamp: string;
  clientName: string;
  keyPoints: string[];
  potentialMatches: {
    caseId: string;
    matchScore: number;
    description: string;
  }[];
  status: string;
}

const CaseClassificationManager = () => {
  const [chatLogs, setChatLogs] = useState<Chat[]>([
    {
      id: "chat_1",
      timestamp: "2024-01-05T10:30:00",
      clientName: "สมศักดิ์ จริงใจ",
      keyPoints: [
        "ได้รับผลกระทบจากมลพิษทางอากาศ",
        "อาศัยในรัศมี 3 กม. จากโรงงาน",
        "มีอาการหอบหืดตั้งแต่ปี 2566",
      ],
      potentialMatches: [
        {
          caseId: "ENV2024-001",
          matchScore: 85,
          description: "คดีมลพิษทางอากาศ - โรงงานภาคตะวันออก",
        },
      ],
      status: "pending",
    },
    {
      id: "chat_2",
      timestamp: "2024-01-05T11:45:00",
      clientName: "วิภา รักความจริง",
      keyPoints: [
        "ถูกละเมิดข้อมูลส่วนบุคคล",
        "พบการใช้ข้อมูลโดยไม่ได้รับอนุญาต",
        "เกิดความเสียหายทางการเงิน",
      ],
      potentialMatches: [],
      status: "new_case",
    },
  ]);

  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [showNewCaseForm, setShowNewCaseForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center">
            <div className="text-xl font-bold text-purple-600">ClaimHub</div>
            <div className="ml-2 text-sm font-smeibold text-gray-500">
              for admin
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Users className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16 px-6">
        <div className="max-w-6xl mx-auto space-y-6 py-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="pt-2">
                    <div className="text-sm text-gray-500">รอการตรวจสอบ</div>
                    <div className="text-2xl font-bold mt-2">8</div>
                  </div>
                  <AlertCircle className="h-8 w-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="pt-2">
                    <div className="text-sm text-gray-500">จับคู่คดีสำเร็จ</div>
                    <div className="text-2xl font-bold mt-2">12</div>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="pt-2">
                    <div className="text-sm text-gray-500">คดีใหม่</div>
                    <div className="text-2xl font-bold mt-2">3</div>
                  </div>
                  <PlusCircle className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Logs Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chat List */}
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>บันทึกการสนทนา</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {chatLogs.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat)}
                      className="p-3 border rounded-lg cursor-pointer hover:border-purple-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{chat.clientName}</div>
                        {chat.status === "pending" ? (
                          <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                            รอตรวจสอบ
                          </span>
                        ) : (
                          <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                            คดีใหม่
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {new Date(chat.timestamp).toLocaleString("th-TH")}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Details and Analysis */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>รายละเอียดการวิเคราะห์</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedChat ? (
                  <div className="space-y-6">
                    {/* Client Info */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="font-medium text-lg">
                        {selectedChat.clientName}
                      </div>
                      <div className="text-sm text-gray-500">
                        บันทึกเมื่อ:{" "}
                        {new Date(selectedChat.timestamp).toLocaleString(
                          "th-TH"
                        )}
                      </div>
                    </div>

                    {/* Key Points */}
                    <div>
                      <div className="font-medium mb-2">ประเด็นสำคัญ</div>
                      <div className="space-y-2">
                        {selectedChat.keyPoints.map((point, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                            <span className="text-gray-600">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Potential Matches */}
                    {selectedChat.potentialMatches.length > 0 ? (
                      <div>
                        <div className="font-medium mb-2">คดีที่เกี่ยวข้อง</div>
                        {selectedChat.potentialMatches.map((match, index) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">
                                  {match.description}
                                </div>
                                <div className="text-sm text-gray-500">
                                  รหัสคดี: {match.caseId}
                                </div>
                              </div>
                              <div className="text-lg font-bold text-purple-600">
                                {match.matchScore}% ตรงกัน
                              </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                เพิ่มในคดี
                              </button>
                              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                ดูรายละเอียดคดี
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        <div className="font-medium mb-2">การวิเคราะห์</div>
                        <div className="p-4 border rounded-lg">
                          <div className="text-gray-600">
                            ไม่พบคดีที่เกี่ยวข้อง - แนะนำให้สร้างคดีใหม่
                          </div>
                          <button
                            onClick={() => setShowNewCaseForm(true)}
                            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                          >
                            สร้างคดีใหม่
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-12">
                    เลือกบันทึกการสนทนาเพื่อดูรายละเอียด
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* New Case Form */}
          {showNewCaseForm && (
            <Card>
              <CardHeader>
                <CardTitle>สร้างคดีใหม่</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ชื่อคดี
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg"
                      placeholder="ระบุชื่อคดี"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ประเภทคดี
                    </label>
                    <select className="w-full p-2 border rounded-lg">
                      <option>มลพิษสิ่งแวดล้อม</option>
                      <option>ละเมิดข้อมูลส่วนบุคคล</option>
                      <option>ละเมิดสิทธิผู้บริโภค</option>
                      <option>อื่นๆ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      รายละเอียดคดี
                    </label>
                    <textarea
                      className="w-full p-2 border rounded-lg"
                      rows={4}
                      placeholder="ระบุรายละเอียดคดี"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      เงื่อนไขการเข้าร่วม
                    </label>
                    <textarea
                      className="w-full p-2 border rounded-lg"
                      rows={4}
                      placeholder="ระบุเงื่อนไขการเข้าร่วมคดี"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setShowNewCaseForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      ยกเลิก
                    </button>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      สร้างคดี
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseClassificationManager;
