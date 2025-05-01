import React from 'react'
import {bodyData} from "../../../public/data"
import TableCell from './TableCell'

const TableRow = () => {
  return (
    <>
    {bodyData.map(ele => (<>
        <div >{ele.character}</div>
        <div>{ele.outPut}</div>
        <TableCell char1={ele.prop1.char1} char2={ele.prop1.char2} char3={ele.prop1.char3} />
        <TableCell char1={ele.prop2.char1} char2={ele.prop2.char2} char3={ele.prop2.char3} />
     
       <TableCell char1={ele.prop3.char1} char2={ele.prop3.char2} char3={ele.prop3.char3} />
       <TableCell char1={ele.prop4.char1} char2={ele.prop4.char2} char3={ele.prop4.char3} />
       <TableCell char1={ele.prop5.char1} char2={ele.prop5.char2} char3={ele.prop5.char3} char4={ele.prop5.char4} char5={ele.prop5.char5} char6={ele.prop5.char6}/>
       <TableCell char1={ele.prop6.char1} char2={ele.prop6.char2} char3={ele.prop6.char3} />
    
     </>
   ))}</>
  )
}

export default TableRow