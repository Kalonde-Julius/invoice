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

    const numberFormat = (quantity, unitPrice, amount) =>
        new Intl.NumberFormat('en-US', {}).format(quantity, unitPrice, amount);

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
                        <th> Action </th>
                    </tr>
                 </thead>

            {list.map(({ itemNo, description, quantity, unitPrice, amount}) => (

              <React.Fragment key={itemNo}>

                 <tbody>

                    <tr className="items-center justify-center text-black p-1">
                        <td className="font-bold" id="itemNo" name="itemNo"> {itemNo} </td>
                        <td className="font-bold" id="description" name="description"> {description} </td>
                        <td className="font-bold" id="quantity" name="quantity"> {quantity} </td>
                        <td className="font-bold" id="unitPrice" name="unitPrice"> {unitPrice} </td>
                        <td className="amount" id="amount" name="amount"> {amount} </td>

                        <td>
                        <div>
                        <button className="readBtn Btn p-1"> View </button>
                        <button className="editBtn Btn p-1"> Edit </button>
                        <button className="deleteBtn Btn p-1"> Delete </button>
                        </div>
                        </td>

                    </tr>

                 </tbody>

              </React.Fragment>
            ))}

               </table>

            <div className="footer pt-10 px-3 flex flex-col items-end">

                    <span className='font-semibold text-xl items-end'>
                     Total Amount UGX:{totalAmount.toLocaleString()}/=
                    </span>
            </div>

        </div>

    )

}
