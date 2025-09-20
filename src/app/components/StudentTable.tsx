"use client";
import Link from "next/link";
import { usePortfolioStore } from "../store/usePortfolioStore";
import { useState } from "react";

export default function StudentTable() {
  const students = usePortfolioStore((s) => s.students);
  const [sortBy, setSortBy] = useState<"name" | "gpa">("name");

  const sorted = [...students].sort((a, b) => {
    if (sortBy === "gpa") return b.gpa - a.gpa;
    return a.firstName.localeCompare(b.firstName);
  });

  return (
    <div>
      <div className="mb-3">
        <button onClick={() => setSortBy("name")} className="px-2 py-1 border mr-2">เรียงตามชื่อ</button>
        <button onClick={() => setSortBy("gpa")} className="px-2 py-1 border">เรียงตาม GPA</button>
      </div>
      <table className="border-collapse border w-full">
        <thead>
          <tr>
            <th className="border p-2">ชื่อ</th>
            <th className="border p-2">นามสกุล</th>
            <th className="border p-2">GPA</th>
            <th className="border p-2">รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((s) => (
            <tr key={s.id}>
              <td className="border p-2">{s.firstName}</td>
              <td className="border p-2">{s.lastName}</td>
              <td className="border p-2">{s.gpa}</td>
              <td className="border p-2">
                <Link href={`/teacher/${s.id}`} className="text-blue-600">ดูรายละเอียด</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
