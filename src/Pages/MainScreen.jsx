import { useState } from 'react';
import Message from '../Components/Message';
import { messages } from '../messages';
import {  IoMdClose, IoMdContact } from 'react-icons/io';
import { CiFaceSmile } from 'react-icons/ci';
import ContactCard from '../Components/ContactCard';



function MainScreen() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleProfileClick = () => {
    setShowContactInfo(!showContactInfo);
  };



  return (

    <div className={`${showContactInfo ? 'grid   grid-cols-[2fr,3fr,2fr] ' : ' grid  grid-cols-[2fr,5fr]'} h-screen gap-0 w-full`}>


      <div className='grid grid-rows-[2fr,8fr] w-full h-screen border border-[#E4E4E4] min-h-20'>

        {/* Heading (Conversation) and  logout logo*/}
        <div className='bg-[#f3f3f3] border border-[#E4E4E4]'>

          <div className="flex flex-col md:h-[84px] top-0 ">

            <div className='md:w-[342px] md:h-[40px] mt-2 px-5 py-2.5'>
              <div className='flex flex-row space-x-2.5'>
                <div>
                  <h1 className='text-[#333333] leading-3 text-base font-semibold w-[272px]'>Conversations</h1>
                </div>
                <div>
                  <img className='md:w-[19px] md:h-19[px] ' src="/images/logout.png" alt="logout" />
                </div>
              </div>
            </div>

            {/* for search bar */}

            <div className=" flex justify-center md:w-full md:h-[54px] space-y-2.5 px-5 py-3">
              <div className="flex md:w-[299px] md:h-[34px]  items-center bg-white rounded-md border border-gray-300">
                <div className="flex flex-row items-center space-x-3 ml-1.5">
                  <div>
                    <img src="/images/search-normal.png" className='w-3.5 h-3.5' alt="search" />
                  </div>
                  <div>
                    <input type="text" placeholder="Search"
                      className="md:leading-[9px] text-sm text-[#C0BFBF] bg-transparent outline-none text-gray-700 placeholder-gray-500  w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className='h-full overflow-y-auto scrollbar-hide bg-[#f3f3f3] '>
          <ContactCard />
        </div>

      </div>


      {/* Chat Section */}

      <div className='grid grid-rows-[2fr,auto,2fr] w-full h-screen'>

        {/* Top Bar */}
        <div className='bg-white px-9 py-1.5 border border-[#E4E4E4] border-l-0'>

          <div className="flex z-10 items-center w-full h-[72px] ">
            <div className=' space-x-3 flex flex-row items-center md:w-[490px] h-8'>
              <div className='cursor-pointer'>
                <IoMdContact className='w-10 h-10 text-white bg-[#927DE7] rounded-lg' onClick={handleProfileClick} />
              </div>
              <div className="items-center ml-3 md:w-[427px] h-6 space-y-1 ">
                <div className=" font-semibold text-lg text-[#333333] font-semibold md:w-[124px] md:h-[22px]">+971 432 342</div>
              </div>
            </div>
          </div>

        </div>

        {/* Chats / Message bubbles */}
        <div className="h-full bg-[#F9F9F9] p-4 space-y-4 overflow-y-auto scrollbar-hide">
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} time={msg.time} isSender={msg.isSender} />
          ))}
        </div>

        {/* Message typing bar */}
        <div className="w-full h-[87px]  bg-[#E0E0E0] border border-t-[#E4E4E4] flex items-center py-5  px-5">

          <div className=" flex items-center h-12 w-full  ">
            <div className='flex flex-row w-full '>

              <div className='flex items-center w-8 h-8 border border-gray-300 bg-white py-5 ml-1.5 rounded-tl-xl rounded-bl-xl
            focus:outline-none border-r-0 focus:ring-2'>
                <div className="absolute ">
                  <CiFaceSmile className='w-5 h-5  ml-3 cursor-pointer bg-white text-[#C0BFBF]  border-none rounded-lg border-0' />
                </div>
              </div>

              <div className='flex-1 '>

                <div>
                  <input
                    type="text" placeholder="Type your message"
                    className="w-full p-2.5 text-sm text-[##E1EDF1] text-opacity-10 border border-gray-300 rounded-tr-lg rounded-br-lg focus:outline-none border-l-0"
                  />
                </div>
              </div>
              <div className='ml-2'>
                <button className="p-2  bg-white rounded-lg focus:outline-none">
                  <img src="/images/send-btn.png" alt="Send" className="w-6 h-6" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>



      {/* Profile view on clicking image */}

      {/* <div className='h-full overflow-y-auto scrollbar-hide'> */}

      {showContactInfo && (
        // <div className="grid grid-rows-[2fr,4fr,6fr] w-full h-screen">
        <div className="grid grid-rows-[1fr,4fr,8fr] w-full h-screen">

          {/* Contact info header and close icon */}
          <div className="bg-[#ffffff] border border-[#E4E4E4] border-b-none ">
            <div className="md:space-y-[8px] ">

              <div className="flex justify-center text-center md:my-[22px] w-32 h-10 ml-2.5 space-x-2 space-y-3">

                <div className=" w-6 h-6 cursor-pointer" onClick={handleProfileClick}>
                  <IoMdClose className='mt-4' />
                </div>

                <div className=" h-5 ">
                  <h1 className='text-[#333333] font-semibold text-base'>Contact Info</h1>
                </div>
              </div>
            </div>
          </div>


          {/* Phone number and last seen */}
          <div className="flex justify-center bg-[#FFFFFF] md:w-full md:h-full  md:h-full border border-[#E4E4E4] border-t-0">

            <div className='py-5'>
              <div className="flex flex-col md:w-[220px] h-[187px]  justify-center items-center">
                <div className="flex justify-center md:h-[105px] md:w-[105px] cursor-pointer">
                  {/* <img src="/images/profile/contact-icon.png" alt="contact" className='w-full' /> */}
                  <IoMdContact className='w-24 h-24 text-white bg-[#927DE7] rounded-lg' />
                </div>
                <div className="flex flex-col justify-center items-center text-center w-full h-[62px] ">
                  <div className="md:w-[220px]  md:h-[39px] text-2xl text-[#333333] font-semibold ">+971 432 342</div>
                  <div className="md:w-[171px] md:h-[19px] text-[#717171]">Last seen at 04:43 PM</div>
                </div>
              </div>
            </div>

          </div>


          {/* Details , Mobile and other details */}
          <div className="flex flex-col bg-[#F3F3F3]  h-full overflow-y-auto scrollbar-hide border border-[#E4E4E4] border-t-0">
            <div className="flex flex-col md:w-[322px] md:h-[111px] space-y-5  ml-2.5">

              <div className="md:w-[60px] h-8  py-2.5">
                <h1 className='md:w-[50px] leading-3 text-[#333333] text-base font-semibold'>Details</h1>
              </div>

              <div className="md:w-[322px] md:h-[59px] mt-5 ">
                <div className="md:w-[322px] md:h-[59px] space-y-2">
                  <div className="md:w-[49px] "> <h1 className='leading-3 text-[#777777] text-sm'>Mobile:</h1>
                  </div>
                  <div className="bg-[#E7E7E7] md:w-[322px] md:h-[34px] px-2.5 py-3 rounded-lg">
                    <h1 className=' md:w-[101px] md:leading-[10px] text-[#333333]'>+97198828282</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      )}

    </div >

  );
}

export default MainScreen;
