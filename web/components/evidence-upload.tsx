import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Upload, 
  Camera, 
  File, 
  Image, 
  Video, 
  MessageSquare, 
  FileAudio, 
  Receipt, 
  ArrowLeft,
  Plus,
  X
} from 'lucide-react';

const EvidenceUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: 'chat_screenshot.jpg', type: 'image', size: '2.4 MB' },
    { name: 'receipt_001.pdf', type: 'document', size: '1.1 MB' }
  ]);

  const evidenceTypes = [
    { icon: Image, label: 'รูปภาพ', formats: 'JPG, PNG, HEIC' },
    { icon: Video, label: 'วิดีโอ', formats: 'MP4, MOV' },
    { icon: FileAudio, label: 'เสียง', formats: 'MP3, WAV' },
    { icon: Receipt, label: 'ใบเสร็จ', formats: 'PDF, JPG' },
    { icon: MessageSquare, label: 'ข้อความแชท', formats: 'JPG, PNG, PDF' },
    { icon: File, label: 'เอกสารอื่นๆ', formats: 'PDF, DOCX' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="flex items-center px-6 py-3">
          <button className="flex items-center gap-2 text-gray-600">
            <ArrowLeft className="h-5 w-5" />
            <span>กลับ</span>
          </button>
          <h1 className="ml-4 text-xl font-bold text-purple-600">อัพโหลดหลักฐาน</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16 px-6">
        <div className="max-w-4xl mx-auto py-6 space-y-6">
          {/* Instructions Card */}
          <Card>
            <CardHeader>
              <CardTitle>ประเภทหลักฐานที่รองรับ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {evidenceTypes.map((type, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-gray-50">
                    <type.icon className="h-6 w-6 text-purple-600 mb-2" />
                    <div className="font-medium">{type.label}</div>
                    <div className="text-sm text-gray-500">รองรับไฟล์ {type.formats}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upload Area */}
          <Card>
            <CardContent className="p-6">
              <div 
                className={`border-2 border-dashed rounded-lg p-8 text-center
                  ${dragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300'}`}
                onDragEnter={() => setDragActive(true)}
                onDragLeave={() => setDragActive(false)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => setDragActive(false)}
              >
                <Upload className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="font-medium mb-2">ลากไฟล์มาวางที่นี่ หรือ</div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                  เลือกไฟล์
                </button>
                <div className="text-sm text-gray-500 mt-2">สูงสุด 100 MB ต่อไฟล์</div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Upload Buttons */}
          <div className="flex gap-4 justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100">
              <Camera className="h-5 w-5" />
              <span>ถ่ายภาพ</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100">
              <Video className="h-5 w-5" />
              <span>ถ่ายวิดีโอ</span>
            </button>
          </div>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>ไฟล์ที่อัพโหลดแล้ว</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <File className="h-5 w-5 text-purple-600" />
                        <div>
                          <div className="font-medium">{file.name}</div>
                          <div className="text-sm text-gray-500">{file.size}</div>
                        </div>
                      </div>
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <X className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default EvidenceUpload;
