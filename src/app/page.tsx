"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Users,
  GavelIcon,
  ShieldCheck,
  ArrowLeft,
  Fingerprint,
  Mail,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

const LoginPage = ({
  userType,
  onBack,
}: {
  userType: string;
  onBack: () => void;
}) => {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState("passkey");

  const handlePasskeyLogin = async () => {
    // This is where you would implement the actual WebAuthn/passkey logic
    try {
      // Example structure - actual implementation would use WebAuthn API
      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: new Uint8Array(32),
          rpId: window.location.hostname,
          allowCredentials: [],
          userVerification: "preferred",
        },
      });
      // Handle the credential

      //  redirect
      switch (userType) {
        case "ลูกความ":
          router.push("/client");
          break;
        case "ทนายความ":
          router.push("/lawyer");
          break;
        case "ผู้ดูแลระบบ":
          router.push("/admin");
          break;
      }
    } catch (error) {
      console.error("Passkey authentication failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center mb-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับ
            </Button>
          </div>
          <CardTitle className="text-xl text-center text-indigo-600">
            เข้าสู่ระบบสำหรับ{userType}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="passkey" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger
                value="passkey"
                onClick={() => setLoginMethod("passkey")}
              >
                <Fingerprint className="w-4 h-4 mr-2" />
                Passkey
              </TabsTrigger>
              <TabsTrigger
                value="traditional"
                onClick={() => setLoginMethod("traditional")}
              >
                <Mail className="w-4 h-4 mr-2" />
                อีเมล
              </TabsTrigger>
            </TabsList>

            <TabsContent value="passkey">
              <div className="space-y-4 text-center">
                <div className="p-6">
                  <Fingerprint className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
                  <p className="text-gray-600 mb-4">
                    เข้าสู่ระบบด้วย Passkey เพื่อความปลอดภัยที่มากขึ้น
                  </p>
                </div>
                <Button
                  className="w-full text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={handlePasskeyLogin}
                >
                  <Fingerprint className="w-4 h-4 mr-2" />
                  เข้าสู่ระบบด้วย Passkey
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  ยังไม่ได้ตั้งค่า Passkey?
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-700 ml-1"
                  >
                    ตั้งค่าตอนนี้
                  </a>
                </p>
              </div>
            </TabsContent>

            <TabsContent value="traditional">
              <form
                noValidate
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <Label htmlFor="email">อีเมล</Label>
                  <Input id="email" type="email" placeholder="อีเมลของคุณ" />
                </div>
                <div>
                  <Label htmlFor="password">รหัสผ่าน</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="รหัสผ่านของคุณ"
                  />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <span>จดจำฉัน</span>
                  </label>
                  <a href="#" className="text-indigo-600 hover:text-indigo-700">
                    ลืมรหัสผ่าน?
                  </a>
                </div>
                <Button
                  onClick={() => {
                    switch (userType) {
                      case "ลูกความ":
                        router.push("/client");
                        break;
                      case "ทนายความ":
                        router.push("/lawyer");
                        break;
                      case "ผู้ดูแลระบบ":
                        router.push("/admin");
                        break;
                    }
                  }}
                  className="w-full text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  เข้าสู่ระบบด้วยอีเมล
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const Portal = () => {
  const [selectedUserType, setSelectedUserType] = useState<string | null>("");

  const userTypes = [
    {
      type: "ลูกความ",
      icon: Users,
      description: "สำหรับผู้ที่ต้องการติดตามคดีของตนเอง",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      type: "ทนายความ",
      icon: GavelIcon,
      description: "สำหรับทนายความที่ดูแลคดีความ",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      type: "ผู้ดูแลระบบ",
      icon: ShieldCheck,
      description: "สำหรับผู้ดูแลระบบและเจ้าหน้าที่",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  if (selectedUserType) {
    return (
      <LoginPage
        userType={selectedUserType}
        onBack={() => setSelectedUserType(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600 mb-2">ClaimHub</h1>
          <p className="text-gray-600">เลือกประเภทผู้ใช้งานเพื่อเข้าสู่ระบบ</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {userTypes.map((user) => (
            <Card
              key={user.type}
              className="hover:border-indigo-200 transition-all cursor-pointer"
              onClick={() => setSelectedUserType(user.type)}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`${user.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <user.icon className={`w-8 h-8 ${user.iconColor}`} />
                </div>
                <h2 className="text-lg font-medium mb-2">{user.type}</h2>
                <p className="text-sm text-gray-500">{user.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>
            ยังไม่มีบัญชีผู้ใช้?{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-700">
              ลงทะเบียนใช้งาน
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portal;
