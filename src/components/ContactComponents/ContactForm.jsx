
const ContactForm = () => {
    return ( 
        <div  className="px-6  py-12  mt-24 lg:py-24 md:px-12 text-center lg:text-left">
        <div  className="container mx-auto xl:px-32 text-gray-800">
          <div  className="grid lg:grid-cols-2 gap-12 flex items-center">
            <div  className="mt-12 lg:mt-0" style={{zIndex: "10"}}>
              <h1  className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style={{ color:"#98AA6A"}}>Join <br /><span style={{ color:" #242c0b"}}>Our WaitList</span></h1>
              <p  className="opacity-70" style={{color:"#34362d"}}>
              Our target market includes individuals who are looking for stylish and sustainable clothing 
              options. Our customers range in age from 18-35 and are primarily urban dwellers who value ethical and environmentally-friendly products. They are conscious consumers who are interested in reducing 
              their carbon footprint and are willing to pay a premium for sustainable products.
              </p>
            </div>
            <div  className="mb-12 lg:mb-0 relative">
              <div id="radius-shape-1"  className="absolute rounded-full shadow-lg"></div>
              <div id="radius-shape-2"  className="absolute shadow-lg"></div>
              <div  className="block rounded-lg shadow-lg bg-glass px-6 py-12 md:px-12">
                <form>
                  <div  className="grid md:grid-cols-2 md:gap-6">
                    <div  className="mb-6">
                      <input type="text"  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="First name"/>
                    </div>
                    <div  className="mb-6">
                      <input type="text"  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Last name"/>
                    </div>
                  </div>
                  <input type="email"  className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address"/>
                  <textarea   className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="drop amesssage for us"></textarea>
                  <div  className="form-check flex justify-center mb-6">
                    <input  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#242c0b] checked:border-[#242c0b] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
                    <label  className="form-check-label inline-block text-gray-800"   htmlFor="flexCheckChecked">
                      Subscribe to our newsletter
                    </label>
                  </div>
                  <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"  className="inline-block px-6 py-2.5 mb-6 w-full bg-[#242c0b] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#556623] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#242c0b] active:shadow-lg transition duration-150 ease-in-out">JOIN LIST</button>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default ContactForm;