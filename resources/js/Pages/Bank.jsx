export default function Bank({
        sellerBankName,
        sellerBankAccountHolder,
        sellerBankAccount,
        sellerPhone

}) {

    return (


        <div className="footer pt-5">
        <section>
            <h4 className="text-black bg-green-500 font-semibold text-xl mt-3"> Seller's Bank Details </h4>

            <ul className="flex flex-wrap items-center justify-start">

            <li> <span className="font-bold"> Seller Bank name: </span> {sellerBankName} </li>
            <li> <span className="font-bold"> Seller Bank Account. </span> -{sellerBankAccount}- </li>
            <li> <span className="font-bold"> Bank Account Holder: </span> {sellerBankAccountHolder} </li>


            <li> <span className="font-bold"> Seller's phone No.</span> -{sellerPhone}- </li>
            </ul>
            </section>
            </div>


    )
}
