import React, { useState } from 'react';
import SingleContact from '../Components/SingleContact';

function MainScreen() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleProfileClick = () => {
    setShowContactInfo(!showContactInfo);
  };



  return (
    <div className="h-screen flex">

      {/* <div className={`grid grid-cols-[2fr,4fr,2fr] gap-4 w-full`}> */}

      <div className={`${showContactInfo ? 'grid  grid-cols-[2fr,3fr,2fr] bg-yellow-100' :' grid  grid-cols-[2fr,5fr]' } gap-4 w-full`}>

        {/* Contacts list Section */}
        {/* <div className={`${showContactInfo ? 'hidden md:block' : 'block'}  h-full overflow-y-auto`}> */}
        <div className= 'h-full overflow-y-auto scrollbar-hide  bg-red-100'>
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
          <SingleContact />
        </div>

        {/* Chat Section */}

        {/* <div id="chatSection" className={`${showContactInfo ? 'grid grid-cols-[6fr,3fr]' : 'grid grid-cols-1'} bg-gray-100 p-4 w-full h-full `}> */}
          

          <div className='h-full overflow-y-auto bg-yellow-100'>
            <div className="">
              <div className="flex items-center">
                <img
                  id="profileImage"
                  src="profile-image.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={handleProfileClick}
                />
                <div className="ml-3">
                  <div className="text-lg font-semibold">+971 432 342</div>
                  <div className="text-sm text-gray-600">Last seen at 04:43 PM</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-gray-300 p-2 rounded-lg">Thank you</div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-300 p-2 rounded-lg">Lorem ipsum dolor sit amet consectetur...</div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-300 p-2 rounded-lg">Okay, We'll discuss with the team</div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-300 p-2 rounded-lg">Etiam integer accumsan at feugiat porttitor facilisis...</div>
              </div>
            </div>

            {/* message typing bar */}
            <div className='flex  fixed fixed-bottom  bottom-0 py-2  bg-[#f0f2f5] '>
            <div className="flex fixed-bottom bottom-0 flex items-center">
              <input type="text"
                placeholder="Type your message"
                className="flex-1 p-2 border rounded-l-lg"
              />
              <button className="p-2 bg-blue-500 text-white rounded-r-lg">Send</button>
            </div>
            </div>


          </div>

            {/* Profile view on clicking image */}
          <div className='h-full overflow-y-auto'>
            {showContactInfo && (

              <div id="contactInfoSection" className="grid w-full h-full bg-white p-4">
                <div className="flex items-center justify-between border-b pb-2 mb-4">
                  <div className="flex items-center">
                    <img src="profile-image.png" alt="Profile" className="w-10 h-10 rounded-full" />
                    <div className="ml-3">
                      <div className="text-lg font-semibold">+971 432 342</div>
                      <div className="text-sm text-gray-600">Last seen at 04:43 PM</div>
                    </div>
                  </div>
                </div>
                <div className="text-lg font-semibold">Details</div>
                <div className="mt-2">
                  <div className="text-sm text-gray-600">Mobile:</div>
                  <div className="text-lg font-medium">+971 9882 8282</div>
                </div>
              </div>
            )}
          </div>



      </div>
    </div>
  );
}

export default MainScreen;
