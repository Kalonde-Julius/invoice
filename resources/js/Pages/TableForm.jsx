import React, { useEffect, useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

import './Table'

export default function TableForm({

        itemNo,
        setItemNo,
        description,
        setDescription,
        quantity,
        setQuantity,
        unitPrice,
        setUnitPrice,
        setAmount,
        list,
        setList,
        totalAmount,
        setTotalAmount


     }) {

      const handleSubmit = (e) => {
        e.preventDefault()

        const newItems = {
          itemNo,
          description,
          quantity,
          unitPrice,
          amount
        }
        setDescription("")
        setQuantity("")
        setUnitPrice("")
        setList([...list, newItems])
        setIsEditing(false)
      }

      const [isEditing, setIsEditing] = useState(false);

      const numberFormat = (quantity, unitPrice, amount) => {
      new Intl.NumberFormat('en-US', {  }).format(quantity, unitPrice, amount);
      }

      const amount = (quantity * unitPrice);

      // Calculate total amount of items in the table
      useEffect(() => {
      let rows = document.querySelectorAll(".amount")
      let sum = 0

      for(let i = 0; i < rows.length; i++){
        if (rows[i].className === "amount"){
          sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
          setTotalAmount(sum)
        }
      }
    })

      // Edit function
      const editRow = (itemNo) => {
        const editingRow = list.find((row) => row.itemNo === itemNo)
        setList(list.filter((row) => row.itemNo !== itemNo))
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setUnitPrice(editingRow.unitPrice)
      }

      // Delete function
      const deleteRow =(itemNo) => {
        setList(list.filter((row) => row.itemNo !== itemNo))
      }

    return (

        <>
        <form>
        <article className='mt-4 m-2 flex flex-wrap items-center justify-start text-align-center text-black px-5'>

            <div className='flex flex-col p-1'>
            <label className="p-1" htmlFor='itemNo'> <span> ItemNo </span> </label>
            <input className="p-1 mx-2" type='integer' name='itemNo' id='itemNo'
            placeholder='Enter Item No' autoComplete='off'
            value={itemNo}
            onChange={(e) => setItemNo(e.target.value)}
            />
            </div>

            <div className='flex flex-col p-1'>
            <label className="p-1" htmlFor='description'> <span> Description </span> </label>
            <input className="p-1 mx-2" type='text' name='description' id='description'
            placeholder='Enter Product Description' autoComplete='off'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            </div>

            <div className='flex flex-col p-1'>
            <label className="p-1" htmlFor='quantity'> <span> Quantity </span> </label>
            <input className="p-1 mx-2" type='integer' name='quantity' id='quantity'
            placeholder='Enter Quantity' autoComplete='off'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            />
            </div>

            <div className='flex flex-col p-1'>
            <label className="p-1" htmlFor='unitPrice'> <span> Unit Price </span> </label>
            <input className="p-1 mx-2" type='currency' name='unitPrice' id='unitPrice'
            placeholder='Enter unit price' autoComplete='off'
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            />
            </div>

            <div className='flex flex-col p-1'>

            <label className="p-1" htmlFor='amount'> <span> Amount (UGX) </span> </label>

            <p className="p-1 mx-2 justify-end" type='currency' name='amount' id='amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}>
            {amount}

            </p>

            </div>

          <button type='submit' onClick={handleSubmit} className='mt-2 mx-10 bg-blue-500 text-white font-bold py-2 px-8
            rounded shadow border-2 border-blue-500 hover:bg-transparent
            hover:text-blue-500 transition-all duration-300 flex flex-col p-1'>
              {isEditing ? "Editing Row Item" : "Add Table Item"}
          </button>


            </article>

            </form>


          {/* Table items */}

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

                        <button onClick={() => editRow(itemNo)} > <CiEdit className='text-green-500 font-bold text-xl' /> </button>
                        <button onClick={() => deleteRow(itemNo)} > <MdDelete className='text-red-500 font-bold text-xl' /> </button>

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

    </>

    )

}
