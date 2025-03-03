export default function Notes({notes}) {
    return (
        <>

        <div className="footer pt-5 text-black">
        <section>
            <h4 className="text-black bg-green-600 font-semibold text-xl mt-5"> Additional Notes: </h4>
            <p className="lg:w-3/4 text-justify"> {notes} </p>
        </section>
        </div>

        </>

    )
}
