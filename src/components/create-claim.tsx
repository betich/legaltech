import { useState, type ChangeEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AlertCircle, Upload, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

const CreateClaimForm = () => {
  const [plaintiffs, setPlaintiffs] = useState([
    { name: "", contact: "", role: "โจทก์ร่วม" },
  ]);
  const [files, setFiles] = useState<File[]>([]);

  const addPlaintiff = () => {
    setPlaintiffs([
      ...plaintiffs,
      { name: "", contact: "", role: "โจทก์ร่วม" },
    ]);
  };

  const removePlaintiff = (index: number) => {
    setPlaintiffs(plaintiffs.filter((_, i) => i !== index));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFiles: File[] = Array.from(e.target.files ?? []);
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl pt-24 mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-purple-600">สร้างคดีใหม่</h1>
        <p className="text-gray-500">กรอกข้อมูลเพื่อเริ่มต้นคดีแบบกลุ่ม</p>
      </div>

      <div className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>ข้อมูลพื้นฐาน</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">ชื่อคดี</Label>
              <Input id="title" placeholder="ระบุชื่อคดี" />
            </div>
            <div>
              <Label htmlFor="description">รายละเอียดคดี</Label>
              <Textarea
                id="description"
                placeholder="อธิบายรายละเอียดของคดี"
                className="min-h-[100px]"
              />
            </div>
            <div>
              <Label htmlFor="defendant">จำเลย</Label>
              <Input id="defendant" placeholder="ระบุชื่อจำเลย" />
            </div>
          </CardContent>
        </Card>

        {/* Plaintiffs */}
        <Card>
          <CardHeader>
            <CardTitle>รายชื่อโจทก์</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {plaintiffs.map((plaintiff, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">โจทก์ที่ {index + 1}</h3>
                  {index > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removePlaintiff(index)}
                      className="text-red-500"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      ลบ
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>ชื่อ-นามสกุล</Label>
                    <Input placeholder="ระบุชื่อ-นามสกุล" />
                  </div>
                  <div>
                    <Label>ข้อมูลติดต่อ</Label>
                    <Input placeholder="เบอร์โทรศัพท์หรืออีเมล" />
                  </div>
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addPlaintiff}
              className="w-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              เพิ่มโจทก์
            </Button>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card>
          <CardHeader>
            <CardTitle>เอกสารประกอบ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Input
                type="file"
                multiple
                className="hidden"
                id="file-upload"
                onChange={handleFileChange}
              />
              <Label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600">คลิกเพื่ออัปโหลดเอกสาร</p>
                <p className="text-xs text-gray-500">หรือลากไฟล์มาวาง</p>
              </Label>
            </div>
            {files.length > 0 && (
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 border rounded"
                  >
                    <span className="text-sm truncate">{file.name}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Cost Estimate */}
        <Card>
          <CardHeader>
            <CardTitle>ประมาณการค่าใช้จ่าย</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg flex gap-3">
              <AlertCircle className="text-orange-500 w-5 h-5 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-orange-700">
                ค่าใช้จ่ายในการดำเนินคดีจะถูกแบ่งเท่าๆ
                กันระหว่างโจทก์ร่วมทุกท่าน
                โดยประมาณการค่าใช้จ่ายเบื้องต้นอยู่ที่ ฿100,000 - ฿150,000
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <Link href="/">
            <Button className="bg-purple-600 hover:bg-purple-700">
              บันทึกคดี
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateClaimForm;
