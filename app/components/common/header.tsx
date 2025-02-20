import { PlusIcon, SearchIcon } from "lucide-react";
import { Link } from "react-router";

export function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="flex items-center justify-between px-6 py-3">
        <Link to="/" className="text-xl font-bold text-purple-600">
          ClaimHub
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/search" className="text-gray-600 flex items-center gap-2">
            <SearchIcon className="h-5 w-5 text-gray-500" />
            <span>ค้นหา</span>
          </Link>
          <Link to="/claim" className="text-gray-600 flex items-center gap-2">
            <PlusIcon className="h-5 w-5 text-gray-500" />
            <span>สร้างคดีใหม่</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
