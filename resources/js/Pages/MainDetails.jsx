export default function MainDetails(
    {
        sellerName, 
        sellerPhone, 
        sellerAddress, 
        sellerEmail, 
        sellerWebsite
    }) {
    return (
        <>
             <section className="text-black flex flex-col items-end justify-end font-bold">

                <h2 className="text-3xl uppercase"> 
                    {sellerName} 
                </h2>
                
                <p className="text-black font-bold"> {sellerPhone} </p>
                <p className="text-black font-bold"> {sellerAddress} </p>
                <p className="text-black font-bold"> {sellerEmail} </p>
                <p className="text-black font-bold"> {sellerWebsite} </p>
               </section>
        </>
        
    )
}