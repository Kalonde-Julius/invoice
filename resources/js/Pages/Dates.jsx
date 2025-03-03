export default function Dates({
    invoiceNo,
    date,
    dueDate
}) {
    return (
        <>
         <article>
                <ul className="text-black bg-green-700 p-1 flex flex-col-3 items-start justify-start justify-between mt-2 mb-6">

                <li> <span className="font-bold"> Invoice No: </span> {invoiceNo} </li>
                <li> <span className="font-bold"> Invoice date: </span>{date} </li>
                <li> <span className="font-bold"> Due date: </span> {dueDate} </li>

                </ul>
            </article>
        </>

    )
}
