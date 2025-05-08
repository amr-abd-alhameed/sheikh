import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="grid grid-cols-8 gap-4 p-4">
          <TableRow />
        </div>
      </div>
    </div>
  );
};

export default Table;
