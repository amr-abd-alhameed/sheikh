import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <div className="grid grid-cols-8 border-collapse">
          {/* Header Row */}
          <div className="p-4 text-right border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
            الحرف
          </div>
          <div className="p-4 text-right border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
            المخرج
          </div>
          <div className="p-4 text-right border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
            الخاصية 1
          </div>
          <div className="p-4 text-right border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
            الخاصية 2
          </div>
          <div className="p-4 text-right border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
            الخاصية 3
          </div>
          <div className="p-4 text-right border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
            الخاصية 4
          </div>
          <div className="p-4 text-right border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
            الخاصية 5
          </div>
          <div className="p-4 text-right border border-gray-200 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700">
            الخاصية 6
          </div>

          {/* Table Body */}
          <TableRow />
        </div>
      </div>
    </div>
  );
};

export default Table;
