import { useParams } from "react-router-dom";

export default function CaseIdPage() {
  const { id } = useParams(); // Get the dynamic parameter

  return <h1>Dynamic Page for ID: {id}</h1>;
}
