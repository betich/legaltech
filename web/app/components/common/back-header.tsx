import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function BackHeader() {
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="flex items-center px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-gray-600">
          <ArrowLeft className="h-5 w-5" />
          <span>กลับ</span>
        </Link>
      </div>
    </header>
  );
}
