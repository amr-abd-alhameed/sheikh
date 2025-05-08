import React from "react";

type PropsType = {
  char1: string;
  char2: string;
  char3: string;
  char4?: string;
  char5?: string;
  char6?: string;
};

const TableCell = ({ char1, char2, char3, char4, char5, char6 }: PropsType) => {
  return (
    <div className="p-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
        {char1}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">{char2}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300">{char3}</p>
      {char4 && char5 && char6 && (
        <>
          <p className="text-sm text-gray-600 dark:text-gray-300">{char4}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{char5}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{char6}</p>
        </>
      )}
    </div>
  );
};

export default TableCell;
