import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <div className="son">
          <div className="p-[8px]  border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
            الحرف
          </div>
          <div className="p-[8px]  border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
            المخرج
          </div>
          <div className="p-[8px]  border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
            صفاته
          </div>

          <div className="p-[8px]  border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
            متوى قوة الحرف
          </div>
        </div>
        <div className="parent border-collapse">
          <TableRow />
        </div>
      </div>
    </div>
  );
};

export default Table;
