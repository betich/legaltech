import type { Route } from "../+types/home";
import MassLitigationMatcher from "~/components/mass-litigation-matcher";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Matcher" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Evidence() {
  return (
    <div>
      <MassLitigationMatcher />
    </div>
  );
}
