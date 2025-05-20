"use client";
import React from "react";
// import { bodyData } from "../../../public/data";
import TableCell from "./TableCell";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const TableRow = () => {
  const data = useSelector((state: RootState) => state.char)
  return (
    <>
      {data.map((ele, index) => (
        <React.Fragment key={index}>
          <div className="p-4 text-2xl  rounded-[11px] flex items-center justify-center   border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            {ele.character}
          </div>
          <div className="p-4 text-xl  rounded-[11px] flex items-center justify-center  border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            {ele.outPut}
          </div>
          <div className="p-4 flex items-center  border rounded-[11px] border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <TableCell
              char1={ele.prop1.char1}
              char2={ele.prop1.char2}
              char3={ele.prop1.char3}
            />
          </div>
          <div className="p-4  border  items-center flex rounded-[11px] border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <TableCell
              char1={ele.prop2.char1}
              char2={ele.prop2.char2}
              char3={ele.prop2.char3}
            />
          </div>
          <div className="p-4  border  items-center flex rounded-[11px] border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <TableCell
              char1={ele.prop3.char1}
              char2={ele.prop3.char2}
              char3={ele.prop3.char3}
            />
          </div>
          <div className="p-4  border  items-center flex rounded-[11px] border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <TableCell
              char1={ele.prop4.char1}
              char2={ele.prop4.char2}
              char3={ele.prop4.char3}
            />
          </div>
          <div className="p-4  border  items-center flex rounded-[11px] border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <TableCell
              char1={ele.prop5.char1}
              char2={ele.prop5.char2}
              char3={ele.prop5.char3}
              char4={ele.prop5.char4}
              char5={ele.prop5.char5}
              char6={ele.prop5.char6}
            />
          </div>
          <div className="p-4  border  items-center flex rounded-[11px] border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <TableCell
              // char1={ele.prop6.char1}
              char2={ele.prop6.char2}
              char3={ele.prop6.char3}
            />
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default TableRow;
