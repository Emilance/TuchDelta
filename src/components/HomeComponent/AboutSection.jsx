import { Link } from "react-router-dom";


const AboutSection = () => {
    return ( 
        <div className="w-full h-full py-16  ">
            <div className="w-[80%] h-[85%] m-auto flex  flex-col md:flex-row">
                <div className="flex-1">

                <img src="/rbags.png " className=" w-full h-full" />
                </div>
                <div className="flex-1 flex flex-col justify-center pl-4">

                    <h2 className="hover:cursor-pointer mt-1 text-gray-900 font-bold text-[1.7rem] tracking-tight">We are a sustainable <br/> <span className="text-[#5A643C]"> clothing brand that collects old clothing,</span><br/> alters the clothing, and tie-dyes it</h2>
                    <p className="hover:cursor-pointer py-1 text-gray-600 text-[1rem] ">The mission of the brand is to make upcycled clothing fashionable to everyone, including those who are not consciously focused on sustainability. </p>
                    <Link
                         to='/about'
                         className="text-white  bg-[#98AA6A] hover:text-primary w-[40%] mt-2  py-3 px-6 text-center text-base font-bold "
                         >
                        
                         ABOUT US
                         </Link>
                </div>
            </div>
        </div>
     );
}
 
export default AboutSection;