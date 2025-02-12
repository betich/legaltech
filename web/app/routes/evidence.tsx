import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Evidence() {
  return (
    <main className="flex flex-col items-start justify-center pt-16 pb-4 px-4">
      <h1>hi</h1>
    </main>
  );
}
