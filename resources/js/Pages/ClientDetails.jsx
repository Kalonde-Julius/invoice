export default function ClientDetails({
    clientName,
    clientAddress,
    driverName,
    driverId,
    vehicle,
    clearingAgent
}) {
    return (

    <>
        <div className="footer pt-5">
        <section>

            <h4 className="text-black bg-green-500 font-semibold text-xl mt-5">
                Client's Details
            </h4>

            <ul className="flex flex-wrap items-center justify-start mx-2">
                <li> <span className="font-bold"> Client's name: </span> {clientName} </li>
                <li> <span className="font-bold"> Client's address: </span> {clientAddress} </li>
                <li> <span className="font-bold"> Driver's name: </span> {driverName} </li>
                <li> <span className="font-bold"> Driver's ID No. - </span> {driverId}- </li>
                <li> <span className="font-bold"> Vehicle: </span> {vehicle} </li>
                <li> <span className="font-bold"> Clearing agent: </span> {clearingAgent} </li>
            </ul>
        </section>
        </div>

    </>

    )
}
