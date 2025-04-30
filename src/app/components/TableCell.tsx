import React from 'react';  

type PropsType = {  
  char1: string;  
  char2: string;  
  char3: string;  
};  

const TableCell = ({ char1, char2, char3 }: PropsType) => {  
  return (  
    <div className='cell'>  
      <p>{char1}</p>  
      <p>{char2}</p>  
      <p>{char3}</p>  
    </div>  
  );  
};  

export default TableCell;  