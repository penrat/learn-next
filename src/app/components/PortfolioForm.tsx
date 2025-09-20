"use client";
import { useForm } from "react-hook-form";
import { usePortfolioStore } from "../store/usePortfolioStore";
import { v4 as uuidv4 } from "uuid";

export default function PortfolioForm() {
  const addStudent = usePortfolioStore((s) => s.addStudent);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: any) => {
    const file = data.photo?.[0];
    const photoUrl = file ? URL.createObjectURL(file) : undefined;

    addStudent({
      id: uuidv4(),
      ...data,
      gpa: parseFloat(data.gpa),
      photo: photoUrl,
    });
    reset();
    alert("บันทึกข้อมูลเรียบร้อย");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 max-w-xl">
      <input {...register("firstName", { required: true })} placeholder="ชื่อ" className="border p-2"/>
      {errors.firstName && <p className="text-red-500">กรุณากรอกชื่อ</p>}

      <input {...register("lastName", { required: true })} placeholder="นามสกุล" className="border p-2"/>
      <input {...register("address", { required: true })} placeholder="ที่อยู่" className="border p-2"/>
      <input {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="เบอร์โทร" className="border p-2"/>
      <input {...register("school", { required: true })} placeholder="โรงเรียน" className="border p-2"/>
      <input type="number" step="0.01" {...register("gpa", { required: true, min: 0, max: 4 })} placeholder="GPA" className="border p-2"/>
      <input {...register("talent")} placeholder="ความสามารถพิเศษ" className="border p-2"/>
      <textarea {...register("reason")} placeholder="เหตุผลในการสมัคร" className="border p-2"/>
      <input {...register("major")} placeholder="สาขาที่เลือก" className="border p-2"/>
      <input {...register("university")} placeholder="มหาวิทยาลัย" className="border p-2"/>
      <input type="file" {...register("photo")} />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        บันทึก
      </button>
    </form>
  );
}
