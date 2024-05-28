import React from 'react'

const ChatWindow = () => {
    return (
        <>
            {/* chat section */}
            <div className="w-3/5 flex flex-col  overflow-y-auto scroll-smooth">
                {/* chat header image and name*/}
                <div className="flex fixed fixed-top  top-0  w-full bg-[#f0f2f5] py-1.5 ">

                    {/* profile-pic and name */}
                    <div className='flex space-x-2 ml-5 items-center text-center w-64'>
                        <div>
                            <img
                                className='rounded-full' width='40' height='40'
                                src="/images/profile/contact-icon.png" alt="dp" />
                        </div>
                        {/* name */}
                        <div>
                            <p className='text-black'>+972 487 645</p>
                        </div>
                    </div>
                </div>

                {/* Chat section (center part) */}
                <div className="flex  justify-between md:w-full pl-12 space-y-4 space-x-4 bg-white mt-32 ">

                    <div className="flex flex-col justify-start ml-2 px-2 py-1.5 bg-stone-200 rounded-lg  w-64 h-full ">
                        <p className="text-base font-light color-[#667781] ">message</p>
                    </div>

                    <div className="flex flex-col justify-end mr-22 px-2 py-1.5 bg-green-100 rounded-lg w-64 self-end w-full h-full my-12">
                        <p className="text-base  font-light color-[#667781] cursor-default">message</p>
                    </div>
                </div>

            </div>


            {/* bottom section */}

            <div className="flex fixed bottom-0 w-full  bg-gray-200 py-2 ml-5">
                <div style={{ width: '56em' }} className="flex items-center  w-3/5 bg-white rounded-sm shadow-md mr-8 px-2">
                    <img src="/images/smile.png" alt="smiley icon" />
                    <input
                        type="text"
                        className="w-full py-1 px-4 bg-transparent outline-none"
                        placeholder="Type your message"
                    />
                    <div className=''>
                        <button className="flex items-center justify-center w-5 h-4 rounded-full ">
                            <img src="/images/send-btn.png" alt="send-btn" />
                        </button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ChatWindow
