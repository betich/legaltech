import Link from "next/link";

export function LawyerHeader({
  newNotificationsCount,
}: {
  newNotificationsCount?: number;
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-2 items-center">
        <h1 className="text-xl font-semibold text-indigo-600">ClaimHub</h1>
        <p className="text-sm font-semibold text-gray-500">for lawyers</p>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href="/lawyer"
          className="text-gray-500 text-sm hover:text-indigo-600"
        >
          หน้าหลัก
        </Link>
        <span className="text-gray-300">|</span>
        <Link
          href="/lawyer/notification"
          className="text-indigo-600 text-sm font-medium"
        >
          การแจ้งเตือน
          {newNotificationsCount && newNotificationsCount > 0 && (
            <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {newNotificationsCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
