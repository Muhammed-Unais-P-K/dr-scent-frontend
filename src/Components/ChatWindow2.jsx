import React, { useState } from 'react'

const ChatWindow2 = () => {

    const [showContactInfo, setShowContactInfo] = useState(false);

  const handleProfileClick = () => {
    setShowContactInfo(!showContactInfo);

  };
  return (
    <>
      <div className={`grid ${showContactInfo ? 'grid-cols-2' : 'grid-cols-1'} w-full gap-4`}>
        {/* Chat Section */}
        <div id="chatSection" className="col-span-2 bg-gray-100 p-4">
          <div className="flex items-center justify-between border-b pb-2 mb-4">
            <div className="flex items-center">
              <img id="profileImage" src="profile-image.png" alt="Profile"
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
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder="Type your message"
              className="flex-1 p-2 border rounded-l-lg"
            />
            <button className="p-2 bg-blue-500 text-white rounded-r-lg">Send</button>
          </div>
        </div>

        {/* Contact Info Section */}
        {showContactInfo && (
          <div id="contactInfoSection" className="bg-white p-4">
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
    </>

  );
      
  
}

export default ChatWindow2
