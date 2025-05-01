import React from 'react';  

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
    <div className='cell'>  
      <p>{char1}</p>  
      <p>{char2}</p>  
      <p>{char3}</p> 
      {char4 && char5 && char6 && (
        <>
          <p>{char4}</p>
          <p>{char5}</p>
          <p>{char6}</p>
        </>
      )}
    </div>  
  );  
};  

export default TableCell;  