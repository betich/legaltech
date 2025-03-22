import { useState, useRef, ReactNode, JSX } from "react";
import {
  Send,
  Upload,
  Image as ImageIcon,
  FileText,
  Film,
  Link as LinkIcon,
  X,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type FileType = "image" | "video" | "document";

interface UploadedFile {
  name: string;
  type: FileType;
  size: number;
  url: string;
}

interface Message {
  type: "user" | "bot";
  content: ReactNode;
  files?: UploadedFile[];
  timestamp: Date;
}

export const ChatBot: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content:
        "สวัสดีครับ ยินดีต้อนรับสู่ระบบให้คำปรึกษาทางกฎหมาย กรุณาแจ้งรายละเอียดเกี่ยวกับคดีของท่าน",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const togglePopup = (): void => {
    setShowPopup((prev) => !prev);
  };

  const handleSend = (): void => {
    if (input.trim() === "" && files.length === 0) return;

    const newMessages: Message[] = [
      ...messages,
      {
        type: "user",
        content: input,
        files: [...files],
        timestamp: new Date(),
      },
    ];

    setMessages(newMessages);
    setInput("");
    setFiles([]);

    setTimeout(() => {
      let botResponse: ReactNode;

      switch (step) {
        case 0:
          botResponse =
            "ขอบคุณสำหรับข้อมูล กรุณาแนบหลักฐานที่เกี่ยวข้องกับคดี เช่น ภาพถ่าย เอกสาร หรือวิดีโอ";
          setStep(1);
          break;
        case 1:
          botResponse =
            "ขอบคุณสำหรับหลักฐาน ท่านมีหลักฐานเพิ่มเติมอื่น ๆ อีกหรือไม่ เช่น ข้อความ สัญญา หรือเอกสารอื่นๆ ที่เกี่ยวข้อง";
          setStep(2);
          break;
        case 2:
          const matchScore = 50 + Math.floor(Math.random() * 50);
          botResponse = (
            <div>
              <p>
                จากการตรวจสอบข้อมูลและหลักฐานเบื้องต้น
                คดีของท่านมีโอกาสเกี่ยวข้องกับ
                คดีอาหารเป็นพิษจากอาหารที่โรงอาหารจุฬาฯ (คดีหมายเลข 2024101)
              </p>
              <p className="text-orange-600">
                ค่าความเหมือนของคดีท่านอยู่ที่ {matchScore}%
              </p>
              <p className="mt-2">
                คำแนะนำ: ท่านควรปรึกษากับทนายความที่เชี่ยวชาญด้านสัญญา
              </p>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg flex items-center">
                <LinkIcon className="text-orange-500 mr-2" size={18} />
                <a href="/case/2024101" className="text-orange-600 font-medium">
                  ดูรายละเอียดคดีหมายเลข 2024101
                </a>
              </div>
            </div>
          );
          setStep(0);
          break;
        default:
          botResponse = "มีอะไรให้ช่วยเหลือเพิ่มเติมไหมครับ";
      }

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: botResponse,
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files || e.target.files.length === 0) return;

    const uploadedFiles = Array.from(e.target.files);

    const newFiles: UploadedFile[] = uploadedFiles.map((file) => ({
      name: file.name,
      type: determineFileType(file.type),
      size: file.size,
      url: URL.createObjectURL(file),
    }));

    setFiles((prev) => [...prev, ...newFiles]);

    if (e.target) {
      e.target.value = "";
    }
  };

  const determineFileType = (mimeType: string): FileType => {
    if (mimeType.startsWith("image/")) return "image";
    if (mimeType.startsWith("video/")) return "video";
    return "document";
  };

  const removeFile = (index: number): void => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (type: FileType): JSX.Element => {
    switch (type) {
      case "image":
        return <ImageIcon size={16} />;
      case "video":
        return <Film size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("th-TH", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <button
        className="fixed right-4 bottom-4 bg-orange-500 text-white rounded-full shadow-lg flex flex-col items-center justify-center w-28 h-28 hover:shadow-sm transition-all duration-500"
        onClick={togglePopup}
        aria-label="Toggle ChatBot"
      >
        <MessageCircle size={24} />
        <span className="text-lg font-bold">ปรึกษา</span>
      </button>

      {showPopup && (
        <div className="flex flex-col h-[600px] border rounded-lg overflow-hidden fixed right-4 bottom-20 w-96 bg-white">
          <div className="bg-orange-500 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">ระบบให้คำปรึกษาทางกฎหมาย</h3>
            <button
              className="text-white hover:text-gray-200"
              onClick={togglePopup}
              aria-label="Close ChatBot"
            >
              <X size={20} />
            </button>
          </div>

          <ScrollArea className="flex-grow p-4 h-96">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === "user"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <div>{message.content}</div>

                    {message.files && message.files.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {message.files.map((file, fileIndex) => (
                          <div
                            key={fileIndex}
                            className="flex items-center bg-white bg-opacity-20 rounded p-2"
                          >
                            {getFileIcon(file.type)}
                            <span className="ml-2 text-sm truncate">
                              {file.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div
                      className={`text-xs mt-1 ${
                        message.type === "user"
                          ? "text-white text-opacity-70"
                          : "text-gray-500"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {files.length > 0 && (
            <div className="border-t p-2 bg-gray-50">
              <div className="flex flex-wrap gap-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white border rounded px-2 py-1"
                  >
                    {getFileIcon(file.type)}
                    <span className="ml-1 text-xs max-w-[100px] truncate">
                      {file.name}
                    </span>
                    <button
                      className="ml-1 text-gray-500 hover:text-red-500"
                      onClick={() => removeFile(index)}
                      type="button"
                      aria-label={`Remove ${file.name}`}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="border-t p-3 bg-white">
            <div className="flex items-center">
              <button
                className="p-2 text-gray-500 hover:text-orange-500"
                onClick={() => fileInputRef.current?.click()}
                type="button"
                aria-label="Upload files"
              >
                <Upload size={20} />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileUpload}
                multiple
                accept="image/*,video/*,.pdf,.doc,.docx,.txt"
              />

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="พิมพ์ข้อความ..."
                className="flex-grow mx-2 p-2 outline-none"
                onKeyPress={handleKeyPress}
              />

              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={handleSend}
                type="button"
                aria-label="Send message"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
