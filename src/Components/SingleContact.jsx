import React from 'react'

const SingleContact = () => {
  return (
    <>
    
    <div className=" flex border-b border-slate-200 mt-2 "></div>
           <div className="flex  justify-between py-1  space-x-2" >
             <div className="flex space-x-2 items-center">
               <img width="40" height="40"
                 className="rounded-full" src="/images/profile/contact-icon.png" alt="Profile"
               />
               <div className="flex flex-col items text-center space-y-0 ml-4">
                    <div>
                        <p className="text-black-700">+972 487 645</p>
                    </div>
                    <div>
                        <p className="text-[#667781] text-sm">✔ good morning ..</p>
                    </div>
               </div>
             </div>
             <div className="mr-4">Monday</div>
           </div>
           <div className="flex border-b border-slate-200 "></div>

    </>
  )
}

export default SingleContact
