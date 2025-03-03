import { useState } from 'react';
import { FaPrint } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import './index.css';
import Footer from './Footer';
import Dates from './Dates';
import Notes from './Notes';
import Table from './Table';
import ClientDetails from './ClientDetails';
import MainDetails from './MainDetails';
import Bank from './Bank';
import TableForm from './TableForm';
import './TableForm';

export default function Dashboard() {
    const [showInvoice, setShowInvoice] = useState(false)

    const [invoiceNo, setInvoiceNo] = useState("1")
    const [date, setDate] = useState("28-12-2024")
    const [dueDate, setDueDate] = useState("12-01-2025")
    const [sellerName, setSellerName] = useState("Vigilant")
    const [sellerPhone, setSellerPhone] = useState("07643218")
    const [sellerAddress, setSellerAddress] = useState("Kampala")
    const [sellerEmail, setSellerEmail] = useState("Vigillant@gmail.com")
    const [sellerWebsite, setSellerWebsite] = useState("vigilant.com")
    const [clientName, setClientName] = useState("Rono")
    const [clientAddress, setClientAddress] = useState("Eldoret")
    const [driverName, setDriverName] = useState("Obed")
    const [driverId, setDriverId] = useState("20345778")
    const [vehicle, setVehicle] = useState("KCD 1234")
    const [clearingAgent, setClearingAgent] = useState("Papai")
    const [sellerBankName, setSellerBankName] = useState("Equity")
    const [sellerBankAccountHolder, setSellerBankAccountHolder] = useState("Julius")
    const [sellerBankAccount, setSellerBankAccount] = useState("123456789")
    const [notes, setNotes] = useState("These are the additional notes lhsghuigflzhgzlif bhnlshvuhugeht hsehtvuitvniu")

    const [itemNo, setItemNo] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    const [unitPrice, setUnitPrice] = useState("")
    const [amount, setAmount] = useState("")
    const [totalAmount, setTotalAmount] = useState("")
    const [list, setList] = useState([])

    const handlePrint = () => {
        window.print();
    }


    return (

        <AuthenticatedLayout

            header={

                <div className="julius flex justify-center mb-1 leading-tight text-xl font-semibold text-white xl:flex-row xl:justify-between justify-between flex-wrap">

                   <div>
                        <label className="font-bold uppercase text-white tracking-wide text-3xl mb-1"> Invoicing App </label>
                   </div>

                   <ul>
                    <button className='btn react-print-icon m-2' onClick={handlePrint} > <FaPrint /> </button>
                    <button className='btn react-print-icon mx-2' onClick={handlePrint} > <FaFileDownload /> </button>
                   </ul>

                </div>

            } >

            <Head title="Dashboard" />


         <main className="m-3 p-3 md:max-w-xl md:mx-auto lg:max-w-3xl xl:max-w-5xl rounded shadow">


        { showInvoice ? (

      <div className='julius'>
           <Dates
           invoiceNo={invoiceNo}
           date={date}
           dueDate={dueDate}
           />

            <MainDetails
            sellerName={sellerName}
            sellerPhone={sellerPhone}
            sellerAddress={sellerAddress}
            sellerEmail={sellerEmail}
            sellerWebsite ={sellerWebsite}
            />

            <ClientDetails
            clientName={clientName}
            clientAddress={clientAddress}
            driverName={driverName}
            driverId={driverId}
            vehicle={vehicle}
            clearingAgent={clearingAgent}
            />

            <Table
            itemNo={itemNo}
            description={description}
            quantity={quantity}
            unitPrice={unitPrice}
            amount={quantity * unitPrice}
            list={list}
            setList={setList}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            />

            <Bank
            sellerBankName={sellerBankName}
            sellerBankAccountHolder={sellerBankAccountHolder}
            sellerBankAccount={sellerBankAccount}
            sellerPhone={sellerPhone}
            />

            <Notes
            notes={notes}
            />

            <Footer />

            <button onClick={() => setShowInvoice (false)}
            className="mt-4 bg-blue-500 text-white font-bold py-2 px-8
            rounded shadow border-2 border-blue-500 hover:bg-transparent
            hover:text-blue-500 transition-all duration-300">
                Edit Invoice
            </button>

        </div>

        ) : (

    /*  invoiceNo,
        date,
        dueDate,

        sellerName,
        sellerPhone,
        sellerAddress,
        sellerEmail,
        sellerWebsite,

        clientName,
        clientAddress,
        driverName,
        driverId,
        vehicle,
        clearingAgent,

        itemNo,
        quantity,
        unitPrice,
        amount,
        totalAmount,

        sellerBankName,
        sellerBankAccountHolder,
        sellerBankAccount,
        sellerPhone,

        notes

        */

            <div className="julius flex flex-col justify-center">

            <article className='grid grid-cols-3 gap-10 mt-3'>

            <div className='flex flex-col'>
            <label htmlFor='invoiceNo' className="p-1"> Invoice No</label>
            <input className="p-1" type='integer' name='invoiceNo' id='invoiceNo'
            placeholder='Enter invoice number' autoComplete='off'
            value={invoiceNo}
            onChange={(e) => setInvoiceNo(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <label htmlFor='date' className="p-1"> Invoice Date</label>
            <input className="p-1" type='date' name='date' id='date'
            placeholder='Enter invoice date' autoComplete='off'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='dueDate'> Due Date</label>
            <input className="p-1" type='date' name='dueDate' id='dueDate'
            placeholder='Enter due date' autoComplete='off'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            />
            </div>

            </article>

            <article className='md:grid grid-cols-3 gap-10 mt-4'>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='sellerName'> Seller's name</label>
            <input className="p-1" type='text' name='sellerName' id='sellerName'
            placeholder='Enter seller name' autoComplete='off'
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='sellerPhone'> Seller's phone No</label>
            <input className="p-1" type='text' name='sellerPhone' id='sellerPhone'
            placeholder='Enter seller phone number' autoComplete='off'
            value={sellerPhone}
            onChange={(e) => setSellerPhone(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='sellerAddress'> Seller's Address </label>
            <input className="p-1" type='text' name='sellerAddress' id='sellerAddress'
            placeholder='Enter seller Address' autoComplete='off'
            value={sellerAddress}
            onChange={(e) => setSellerAddress(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='sellerEmail'> Seller's Email </label>
            <input className="p-1" type='email' name='sellerEmail' id='sellerEmail'
            placeholder='Enter seller email' autoComplete='off'
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='sellerWebsite'> Seller's website </label>
            <input className="p-1" type='url' name='sellerWebsite' id='sellerWebsite'
            placeholder='Enter seller website' autoComplete='off'
            value={sellerWebsite}
            onChange={(e) => setSellerWebsite(e.target.value)}
            />
            </div>

            </article>

            <article className='md:grid grid-cols-3 gap-10 pt-4'>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='clientName'> <span> Client's name </span> </label>
            <input className="p-1" type='text' name='clientName' id='clientName'
            placeholder='Enter client name' autoComplete='off'
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='clientAddress'> <span> Client's Address </span> </label>
            <input className="p-1" type='text' name='clientAddress' id='clientAddress'
            placeholder='Enter client Address' autoComplete='off'
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='driverName'> <span> Driver's name </span> </label>
            <input className="p-1" type='text' name='driverName' id='driverName'
            placeholder='Enter driver name' autoComplete='off'
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='driverId'> <span> Driver's ID </span> </label>
            <input className="p-1" type='text' name='driverId' id='driverId'
            placeholder='Enter driver ID No.' autoComplete='off'
            value={driverId}
            onChange={(e) => setDriverId(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='vehicle'> <span> Vehicle Reg No - </span> </label>
            <input className="p-1" type='text' name='vehicle' id='vehicle'
            placeholder='Enter vehicle/ truck Reg No' autoComplete='off'
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
           <label className="p-1" htmlFor='clearingAgent'> <span> Clearing agent </span> </label>
            <input className="p-1" type='text' name='clearingAgent' id='clearingAgent'
            placeholder='Enter clearing agent' autoComplete='off'
            value={clearingAgent}
            onChange={(e) => setClearingAgent(e.target.value)}
            />
            </div>

            </article>

            <article className="footer pt-2 mb-2">
                <TableForm className="p-1 text-align-center"
                     itemNo ={itemNo}
                     setItemNo={setItemNo}
                     description={description}
                     setDescription={setDescription}
                     quantity={quantity}
                     setQuantity={setQuantity}
                     unitPrice={unitPrice}
                     setUnitPrice={setUnitPrice}
                     amount={amount}
                     list={list}
                     setList={setList}
                     totalAmount={totalAmount}
                     setTotalAmount={setTotalAmount}
                />
           </article>

            <article className='md:grid grid-cols-3 gap-10 pt-3'>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='sellerBankName'> Seller's Bank Name </label>
            <input className="p-1" type='text' name='sellerBankName' id='sellerBankName'
            placeholder='Enter seller bank name' autoComplete='off'
            value={sellerBankName}
            onChange={(e) => setSellerBankName(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='sellerBankAccountHolder'> Bank Account Holder </label>
            <input className="p-1" type='text' name='sellerBankAccountHolder' id='sellerBankAccountHolder'
            placeholder='seller bank account holder' autoComplete='off'
            value={sellerBankAccountHolder}
            onChange={(e) => setSellerBankAccountHolder(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <label className="p-1" htmlFor='sesllerBank Account'> Bank account </label>
            <input className="p-1" type='text' name='sellerBankAccount' id='sellerBankAccount'
            placeholder='seller bank account' autoComplete='off'
            value={sellerBankAccount}
            onChange={(e) => setSellerBankAccount(e.target.value)}
            />
            </div>

            </article>

            <div className='flex flex-col mt-2'>
            <label className="p-1" htmlFor='notes'> <span> Additional notes... </span> </label>
            <input className="p-1" type='text' name='notes' id='notes'
            placeholder='Enter additioanl notes' autoComplete='off'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            />
            </div>

            <button onClick={() => setShowInvoice (true)} className="mt-4 bg-blue-500 text-white font-bold py-2 px-8
            rounded shadow border-2 border-blue-500 hover:bg-transparent
            hover:text-blue-500 transition-all duration-300">
                Preview Invoice
            </button>

            </div>
        )}

        </main>



        </AuthenticatedLayout>
    );
}
