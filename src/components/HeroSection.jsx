

const HeroSection = () => {
    return ( 
           <>
             <div  className="relative bg-white pt-[120px] pb-[110px] lg:pt-[150px]">
             <div  className="container mx-auto">
             <div  className="-mx-4 flex flex-wrap">
                 <div  className="w-full px-4 lg:w-5/12">
                 <div  className="hero-content">
                     <h1
                     className="text-dark mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]"
                     >
                     Transforming <br />
                     waste into<br />
                      wearable art
                     </h1>
                     <p  className="text-body-color mb-8 max-w-[480px] text-base">
                     Where fashion meets sustainability. Discover unique, upcycled styles made just for you, we are transforming discarded 
                     clothing into one-of-a-kind fashion statements for a more sustainable future.
                     </p>
                     <ul  className="flex flex-wrap items-center">
                     <li>
                         <a
                         href="javascript:void(0)"
                         className="bg-primary inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                         >
                         Get Started
                         </a>
                     </li>
                     <li>
                         <a
                         href="javascript:void(0)"
                         className="text-white  bg-[#98AA6A] hover:text-primary inline-flex items-center justify-center py-4 px-6 text-center text-base font-bold sm:px-10 lg:px-8 xl:px-10"
                         >
                        
                         LET'S GO SHOPPING
                         </a>
                     </li>
                     </ul>
                     <div  className="clients pt-16">
                     <h6
                         className="text-body-color mb-2 flex items-center text-xs font-normal"
                     >
                         Some Of Our Clients
                         <span  className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                     </h6>
                     {/* <div  className="flex items-center">
                         <div  className="mr-4 w-full py-3">
                         <img
                             src=""
                             alt=""
                         />
                         </div>
                         <div  className="mr-4 w-full py-3">
                         <img
                             src=""
                             alt=""
                         />
                         </div>
                         <div  className="mr-4 w-full py-3">
                         <img
                             src=""
                             alt=""
                         />
                         </div>
                     </div> */}
                     </div>
                 </div>
                 </div>
                 <div  className="hidden px-4 lg:block lg:w-1/12"></div>
                 <div  className="w-full px-4 lg:w-6/12">
                 <div  className="lg:ml-auto lg:text-right">
                     <div  className="relative z-10 inline-block  pt-11 lg:pt-0">
                     <img
                         src="/hero1.jpg"
                         alt="hero"
                         className="max-w-full rounded-lg rounded-tl-[10rem] lg:ml-auto"
                     />
                     <span  className="absolute -left-8 -bottom-8 z-[-1]">
                         <svg
                         width="93"
                         height="93"
                         viewBox="0 0 93 93"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         >
                         <circle cx="2.5" cy="2.5" r="2.5" fill="#98AA6A" />
                         <circle cx="2.5" cy="24.5" r="2.5" fill="#98AA6A" />
                         <circle cx="2.5" cy="46.5" r="2.5" fill="#98AA6A" />
                         <circle cx="2.5" cy="68.5" r="2.5" fill="#98AA6A" />
                         <circle cx="2.5" cy="90.5" r="2.5" fill="#98AA6A" />
                         <circle cx="24.5" cy="2.5" r="2.5" fill="#98AA6A" />
                         <circle cx="24.5" cy="24.5" r="2.5" fill="#98AA6A" />
                         <circle cx="24.5" cy="46.5" r="2.5" fill="#98AA6A" />
                         <circle cx="24.5" cy="68.5" r="2.5" fill="#98AA6A" />
                         <circle cx="24.5" cy="90.5" r="2.5" fill="#98AA6A" />
                         <circle cx="46.5" cy="2.5" r="2.5" fill="#98AA6A" />
                         <circle cx="46.5" cy="24.5" r="2.5" fill="#98AA6A" />
                         <circle cx="46.5" cy="46.5" r="2.5" fill="#98AA6A" />
                         <circle cx="46.5" cy="68.5" r="2.5" fill="#98AA6A" />
                         <circle cx="46.5" cy="90.5" r="2.5" fill="#98AA6A" />
                         <circle cx="68.5" cy="2.5" r="2.5" fill="#98AA6A" />
                         <circle cx="68.5" cy="24.5" r="2.5" fill="#98AA6A" />
                         <circle cx="68.5" cy="46.5" r="2.5" fill="#98AA6A" />
                         <circle cx="68.5" cy="68.5" r="2.5" fill="#98AA6A" />
                         <circle cx="68.5" cy="90.5" r="2.5" fill="#98AA6A" />
                         <circle cx="90.5" cy="2.5" r="2.5" fill="#98AA6A" />
                         <circle cx="90.5" cy="24.5" r="2.5" fill="#98AA6A" />
                         <circle cx="90.5" cy="46.5" r="2.5" fill="#98AA6A" />
                         <circle cx="90.5" cy="68.5" r="2.5" fill="#98AA6A" />
                         <circle cx="90.5" cy="90.5" r="2.5" fill="#98AA6A" />
                         </svg>
                     </span>
                     </div>
                 </div>
                 </div>
             </div>
             </div>
         </div>
           </>
     );
}
 
export default HeroSection;