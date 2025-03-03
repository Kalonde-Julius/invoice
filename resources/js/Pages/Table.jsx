import React, { useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

import './TableForm';

import './index.css';

export default function Table({
    totalAmount,
    setTotalAmount,
    list

}) {

    const amount = (quantity * unitPrice);

    return (

        <div className="footer pt-2 flex flex-col">

               <table width="100%" className='table table-bordered flex flex-col items-center justify-start text-align-center'>

               <thead>
                    <tr className="text-black bg-green-500 p-1">
                        <th className="font-bold"> Item No. </th>
                        <th className="font-bold"> Description </th>
                        <th className="font-bold"> Quantity </th>
                        <th className="font-bold"> Unit Price </th>
                        <th className="font-bold"> Amount </th>
                    </tr>
                 </thead>

            {list.map(({ itemNo, description, quantity, unitPrice, amount}) => (

              <React.Fragment key={itemNo}>

                 <tbody>

                    <tr className="items-center justify-center text-black p-1">
                        <td id="itemNo" name="itemNo"> {itemNo} </td>
                        <td id="description" name="description"> {description} </td>
                        <td id="quantity" name="quantity"> {quantity} </td>
                        <td id="unitPrice" name="unitPrice"> {unitPrice} </td>
                        <td id="amount" name="amount"> {amount} </td>

                    </tr>

                 </tbody>

              </React.Fragment>
            ))}

               </table>

            <div className="footer text-black pt-5 px-3 flex flex-col items-end">
                <span className='font-semibold text-xl items-end'>
                  Total Amount UGX:{totalAmount.toLocaleString()}/=
                </span>
            </div>

        </div>

    )

}
