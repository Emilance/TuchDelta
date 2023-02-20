import React from "react";
import { MdArrowBackIos } from "react-icons/md"

const ProductData = [
   {
       title :" Scelerisque eleifend donec pretium vulputate sapien.",
       details : "Egestas diam in arcu cursus eui   quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis."
   },
   {
      title :" Scelerisque eleifend donec pretium vulputate sapien.",
      details : "Egestas diam in arcu cursus eui   quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis."
  },
  {
   title :" Scelerisque eleifend donec pretium vulputate sapien.",
   details : "Egestas diam in arcu cursus eui   quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis."
},
 {
       title :" Scelerisque eleifend donec pretium vulputate sapien.",
       details : "Egestas diam in arcu cursus eui   quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis."
   },
   {
      title :" Scelerisque eleifend donec pretium vulputate sapien.",
      details : "Egestas diam in arcu cursus eui   quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis."
  },
  {
   title :" Scelerisque eleifend donec pretium vulputate sapien.",
   details : "Egestas diam in arcu cursus eui   quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis."
},
]

const SingleCard = () => {

   const handleArrowClick =() =>{
    
   }
    return ( 
        <>
          <div  className="h-[30rem] w-full bg-gray-50 py-3 relative  ">
            <h1 className="text-center  font-bold text-4xl  my-4 text-[#5A643C]"> Product Categories</h1>

            {/* <div className="absolute text-red-600 "    onClick={ handleArrowClick()}>
                <MdArrowBackIos size="20" />
            </div>
            <div className="absolute text-red-600"    onClick={ handleArrowClick()}>
                <MdArrowForwardIos size="20" />
            </div> */}
         <div  className="w-[90%] h-[90%] md:overflow-hidden overflow-x-auto  m-auto my-4 flex justify-start items-center" >

              
            {/* <!-- second --> */}
         
         {ProductData.map((data, i)=> {
            return (

               <div key={i}
                   className="min-w-[13rem] mx-8 h-[21.5rem]  bg-white rounded-xl shadow-lg   bg-[#98aa6a11]">
                  <img  className="rounded-t-lg " src="/image.jpg" alt="" />
                  <div  className="py-4 px-4">
                     <h1  className="hover:cursor-pointer mt-1 text-gray-900 font-bold text-[0.8rem] tracking-tight">
                        {data.title}
                     </h1>
                     <p  className="hover:cursor-pointer py-1 text-gray-600 text-[0.8rem] ">{data.details}</p>
                  </div>
                  
               </div>
              

              
            )
         })}
            
               

              
           
         </div>
      </div>
   
        </>
     );
}
 
export default SingleCard;