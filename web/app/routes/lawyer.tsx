import React, { useEffect, useState } from "react";

interface Case {
  id: number;
  title: string;
  description: string;
  status: string;
}

export default function Lawyer() {
  const [cases, setCases] = useState<Case[]>([
    {
      id: 1,
      title: "Case 1",
      description: "Description of case 1",
      status: "Open",
    },
  ]);

  return (
    <div className="cases-overview">
      <h1>Cases Overview</h1>
      <ul>
        {cases.map((caseItem) => (
          <li key={caseItem.id}>
            <h2>{caseItem.title}</h2>
            <p>{caseItem.description}</p>
            <p>Status: {caseItem.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
