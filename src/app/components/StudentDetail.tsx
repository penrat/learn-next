"use client";
import { usePortfolioStore } from "../store/usePortfolioStore";

export default function StudentDetail({ id }: { id: string }) {
  const student = usePortfolioStore((s) => s.students.find((st) => st.id === id));

  if (!student) return <p>ไม่พบนักเรียน</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">{student.firstName} {student.lastName}</h2>
      <p>โรงเรียน: {student.school}</p>
      <p>GPA: {student.gpa}</p>
      <p>สาขาที่เลือก: {student.major}</p>
      <p>มหาวิทยาลัย: {student.university}</p>
      <p>ความสามารถพิเศษ: {student.talent}</p>
      <p>เหตุผล: {student.reason}</p>
      {student.photo && <img src={student.photo} alt="student photo" className="mt-3 w-40 h-40 object-cover rounded" />}
    </div>
  );
}
