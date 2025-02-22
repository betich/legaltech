import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const CostBreakdown = () => {
  const expenses = [
    {
      title: "ค่าประกาศลงหนังสือพิมพ์ (3 วัน)",
      amount: 99000,
      rate: "฿33,000/วัน",
    },
    {
      title: "ค่าส่งจดหมาย",
      amount: 80,
      rate: "฿80/ครั้ง",
    },
    {
      title: "ค่าปรึกษาทนาย",
      amount: 1520,
      rate: null,
    },
  ];

  const participants = [
    {
      initial: "ก",
      name: "กมลชนก สุขสวัสดิ์",
      status: "โจทก์ร่วม",
      share: 25150,
    },
    {
      initial: "ข",
      name: "ชวัญชัย มณีวงศ์",
      status: "โจทก์ร่วม",
      share: 25150,
    },
    {
      initial: "ค",
      name: "คณิดา บุญประเสริฐ",
      status: "โจทก์ร่วม",
      share: 25150,
    },
    {
      initial: "ฉ",
      name: "ฉัตรชัย วงศ์สุวรรณ",
      status: "โจทก์ร่วม",
      share: 25150,
    },
  ];

  return (
    <div className="max-w-3xl pt-16 mx-auto p-6">
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-lg mb-6">ค่าใช้จ่ายในการฟ้องแบบกลุ่ม</h2>
          <div className="bg-purple-50 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-gray-600 mb-2">คดีหมายเลข 2024101</div>
                <div className="text-4xl font-bold text-purple-600">
                  ฿100,600
                </div>
              </div>
              <div className="text-purple-600 text-4xl">฿</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-lg mb-6">รายละเอียดค่าใช้จ่าย</h2>
          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <FileText className="text-gray-400" />
                  <span>{expense.title}</span>
                </div>
                <div className="text-right">
                  <div className="text-purple-600 font-medium">
                    ฿{expense.amount.toLocaleString()}
                  </div>
                  {expense.rate && (
                    <div className="text-sm text-gray-500">
                      ({expense.rate})
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-lg mb-6">การกระจายค่าใช้จ่าย</h2>
          <div className="space-y-4">
            {participants.map((participant, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                    {participant.initial}
                  </div>
                  <div>
                    <div className="font-medium">{participant.name}</div>
                    <div className="text-sm text-gray-500">
                      {participant.status}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-purple-600 font-medium">
                    ฿{participant.share.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    ส่วนแบ่งค่าใช้จ่าย
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 text-center text-gray-600">
          <p>ค่าใช้จ่ายทั้งหมดถูกแบ่งเท่ากันระหว่างโจทก์ร่วมทั้ง 4 ท่าน</p>
          <p>ท่านละ ฿25,150</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CostBreakdown;
