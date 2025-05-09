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
    <div className="space-y-1">
      <p className="  text-gray-900 dark:text-gray-100">{char1}</p>
      <p className=" text-gray-600 dark:text-gray-300">{char2}</p>
      <p className=" text-gray-600 dark:text-gray-300">{char3}</p>
      {char4 && char5 && char6 && (
        <>
          <p className=" text-gray-600 dark:text-gray-300">{char4}</p>
          <p className=" text-gray-600 dark:text-gray-300">{char5}</p>
          <p className=" text-gray-600 dark:text-gray-300">{char6}</p>
        </>
      )}
    </div>
  );
};

export default TableCell;
