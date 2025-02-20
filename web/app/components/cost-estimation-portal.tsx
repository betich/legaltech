import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Bell, User, Calculator, DollarSign, FileText } from "lucide-react";

const CostEstimationPortal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="text-xl font-bold text-purple-600">
            ClaimHub Cost Estimator
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-500" />
            <User className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </header>
      {/* Main Content */}
      <div className="pt-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6 py-6">
          {/* Cost Estimation Card */}
          <Card>
            <CardHeader>
              <CardTitle>ประมาณการค่าใช้จ่าย</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <div className="font-medium text-lg">
                      ค่าดำเนินการคดี Mass Case
                    </div>
                    <div className="text-purple-600 font-medium mt-1">
                      ฿15,000 ต่อราย
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calculator className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      อัพเดทล่าสุด: วันนี้
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Cost Breakdown Card */}
          <Card>
            <CardHeader>
              <CardTitle>รายละเอียดค่าใช้จ่าย</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "ค่าทนายความ", amount: "10,000" },
                  { title: "ค่าดำเนินการ", amount: "3,000" },
                  { title: "ค่าเอกสาร", amount: "2,000" },
                ].map((item, i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-purple-600">฿{item.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Quick Actions */}
          <div className="flex justify-center gap-4 px-4">
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
              <DollarSign className="h-5 w-5" />
              <span>ชำระเงิน</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
              <FileText className="h-5 w-5" />
              <span>ดูรายละเอียด</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostEstimationPortal;
