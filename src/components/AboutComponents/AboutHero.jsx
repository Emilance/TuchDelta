
const AboutHero = () => {
    return ( 
        <>
        <div>

        <section className="mb-40">

       

        <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundPosition: "50%", backgroundImage: "url('/dragjean.jpg')", height: "500px"}}></div>

        <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="text-center text-gray-800">
            <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" style={{marginTop: "-170px", background:" hsla(0, 0%, 100%, 0.7)", backdropFilter: "blur(30px)"}}>
                <h1 className="text-3xl md:text-3xl xl:text-5xl font-bold tracking-tight mb-12">We offer  fashionable and <br /><span className="text-[#5A643C]">environmentally-friendly pieces</span></h1>
                <a className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-[#5A643C] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#5A643C] hover:shadow-lg focus:bg-[#5A643C] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#5A643C] active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                <a className="inline-block px-7 py-3 text-white font-medium text-sm leading-snug bg-transparent text-[#5A643C] font-medium text-xs leading-tight uppercase rounded hover:text-[#5A643C] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
            </div>
            </div>
        </div>
        </section>
        

        </div>
        </>
     );
}
 
export default AboutHero;