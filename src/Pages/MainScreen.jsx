import { useState } from 'react';
import SingleContact from '../Components/SingleContact';
import Message from '../Components/Message';
import { messages } from '../messages';
import { IoIosContact, IoMdClose, IoMdContact } from 'react-icons/io';
import { CiFaceSmile } from 'react-icons/ci';



function MainScreen() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleProfileClick = () => {
    setShowContactInfo(!showContactInfo);
  };



  return (

    <div className={`${showContactInfo ? 'grid   grid-cols-[2fr,3fr,2fr] ' : ' grid  grid-cols-[2fr,5fr]'} h-screen gap-0 w-full`}>


      <div className='grid grid-rows-[2fr,8fr] w-full h-screen'>

        {/* Heading (Conversation) and  logout logo*/}
        <div className='bg-[#f3f3f3]'>

          <div className="flex flex-col  md:h-[84px] top-0 ">

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
            <div className="md:w-[342px] md:h-[54px]  px-5 py-2.5">
              <div className="flex md:w-[299px] md:h-[34px]  items-center bg-white rounded-md border border-gray-300">
                {/* <svg className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="22" height="22" viewBox="0 0 24 24"
              >
                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
              </svg> */}
                <img src="/images/search-normal.png" className='w-3.5 h-3.5' alt="" />
                <input type="text" placeholder="Search"
                  className="leading-3 bg-transparent outline-none text-gray-700 placeholder-gray-500 h-[9px] w-full"
                />
              </div>
            </div>

             <div className="flex items-center w-full max-w-md mx-auto bg-gray-100 rounded-lg">
      <svg
        className="w-6 h-6 text-gray-400 ml-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
        ></path>
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="w-full py-3 pl-3 pr-4 bg-transparent border-none focus:outline-none rounded-lg"
      />
    </div>

          </div>





          {/* Search bar */}
          {/* <div className=" md:w-[342px] md:h-[54px] px-3 bg-[#E0E0E0]">
            <div className="flex md:w-[299px] md:h-[34px] items-center bg-white rounded-sm">
              <svg className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="22" height="22" viewBox="0 0 24 24"
              >
                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
              </svg>
              <input type="text" placeholder="Search"
                className="ml-4 bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
              />
            </div>
          </div> */}


        </div>

        <div className='h-full overflow-y-auto scrollbar-hide bg-[#f3f3f3] '>
          <SingleContact />
        </div>

      </div>


      {/* Chat Section */}

      <div className='grid grid-rows-[auto,1fr,auto] w-full h-screen'>

        {/* Top Bar */}
        <div className='bg-white'>

          <div className="flex z-10 items-center w-full h-[73px] ">
            <div className='bg-yellow-100 flex flex-row md:w-[490px] h-12'>
              <div>
                <IoMdContact className='w-10 h-10 text-white bg-[#927DE7] rounded-lg' onClick={handleProfileClick} />
              </div>
              <div className="ml-3 ">
                <div className="text-lg font-semibold">+971 432 342</div>
              </div>
            </div>
          </div>

          <div className="flex border-b border-slate-200 "></div>
        </div>



        {/* Chats / Message bubbles */}
        <div className="h-full bg-[#F9F9F9] p-4 space-y-4 overflow-y-auto scrollbar-hide">
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} time={msg.time} isSender={msg.isSender} />
          ))}
        </div>


        {/* Message typing bar */}
        <div className="w-full h-[87px] bg-[#EAEAEA] p-4 border-t flex items-center">
          <div className='flex flex-row w-full'>
            <div className="">

              <CiFaceSmile className='w-8 h-8 bg-white text-opacity-5   border border-gray-300 rounded-lg border-r-0' />
            </div>
            <div className='flex-1 '>

              <div>
                {/* <CiFaceSmile className='w-8 h-8'/> */}

                <input
                  type="text" placeholder="Type your message"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none border-l-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className='ml-2'>
              <button className="p-2 bg-white rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img src="/images/send-btn.png" alt="Send" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

      </div>



      {/* Profile view on clicking image */}

      {/* <div className='h-full overflow-y-auto scrollbar-hide'> */}

      {showContactInfo && (
        <div className="grid grid-rows-[1fr,4fr,6fr] w-full h-screen">
          <div className="bg-[#ffffff]">

            <div className="md:space-y-[10px]">
              <div className="flex justify-center text-center w-32 md:h-[73px] ml-2.5 space-x-2 space-y-3">

                <div className=" w-6 h-6 cursor-pointer" onClick={handleProfileClick}>
                  <IoMdClose className='mt-4' />
                </div>

                <div className=" h-6 ">
                  <h1 className='text-[#333333] font-semibold text-base'>Contact Info</h1>
                </div>
              </div>
            </div>

            <div className="flex border-b border-slate-200 "></div>

          </div>




          <div className="flex justify-center bg-[#FFFFFF] md:w-full md:h-full  md:h-full ">
            <div className="flex flex-col md:w-[220px] h-[187px]  justify-center items-center">

              <div className="flex justify-center md:h-[105px] md:w-[105px] ">
                {/* <img src="/images/profile/contact-icon.png" alt="contact" className='w-full' /> */}
                <IoMdContact className='w-24 h-24 text-white bg-[#927DE7] rounded-lg' />

              </div>

              <div className="flex flex-col justify-center items-center text-center w-full h-[62px] ">
                <div className="md:w-[220px]  md:h-[39px] text-2xl text-[#333333] font-semibold ">+971 432 342</div>
                <div className="md:w-[171px] md:h-[19px] text-[#717171]">Last seen at 04:43 PM</div>
              </div>

            </div>
          </div>


          <div className="flex flex-col bg-[#F3F3F3]  h-full overflow-y-auto scrollbar-hide">

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
