"use client";

import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useParams, useRouter } from "next/navigation";

export default function StudentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const student = usePortfolioStore((s) =>
    s.students.find((st) => st.id === id)
  );

  if (!student) {
    return (
      <div className="p-6">
        <p className="text-red-500">ไม่พบนักเรียน</p>
        <button
          onClick={() => router.push("/teacher")}
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
        >
          กลับไปหน้ารายชื่อ
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl">
      <button
        onClick={() => router.push("/teacher")}
        className="mb-4 px-4 py-2 bg-gray-300 rounded"
      >
        ← กลับไปหน้ารายชื่อ
      </button>

      <h1 className="text-2xl font-bold mb-4">
        {student.firstName} {student.lastName}
      </h1>

      {student.photo && (
        <img
          src={student.photo}
          alt="student photo"
          className="mb-4 w-48 h-48 object-cover rounded shadow"
        />
      )}

      <div className="space-y-2">
        <p><span className="font-semibold">ที่อยู่:</span> {student.address}</p>
        <p><span className="font-semibold">เบอร์โทร:</span> {student.phone}</p>
        <p><span className="font-semibold">โรงเรียน:</span> {student.school}</p>
        <p><span className="font-semibold">GPA:</span> {student.gpa}</p>
        <p><span className="font-semibold">สาขาที่เลือก:</span> {student.major}</p>
        <p><span className="font-semibold">มหาวิทยาลัย:</span> {student.university}</p>
        <p><span className="font-semibold">ความสามารถพิเศษ:</span> {student.talent}</p>
        <p><span className="font-semibold">เหตุผลในการสมัคร:</span> {student.reason}</p>
      </div>
    </div>
  );
}
