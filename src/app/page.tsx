"use client";
import Table from "./components/Table";
import { AppDispatch } from "@/redux/store";
import { bodyData } from "../../public/data";
import { useDispatch } from "react-redux";
import { updateData } from "@/redux/features/charSlice";

export default function Home() {
  const dispatcher: AppDispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    const filteredData = bodyData.filter(
      (item) => item.character.toLowerCase() === searchTerm.toLowerCase()
    );
    console.log(filteredData);
    dispatcher(updateData(filteredData));
  };
  return (
    <main>
      <h1 className="p-[6px] rounded-[11px] text-2xl  border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
        الجدول الفرات فيما للحرف من مخرج وقوة وصفات
      </h1>
      <div className=" text-right ">
        <input
          type="text"
          placeholder="ابحث عن حرفٍ ما"
          name="char"
          className="border-none outline-none p-2"
          onChange={handleChange}
        />
      </div>
      <Table />
    </main>
  );
}
