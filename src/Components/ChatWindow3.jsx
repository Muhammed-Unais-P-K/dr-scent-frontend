import React, { useState } from 'react';
import ChatWindow2 from './ChatWindow2';

const ChatWindow3 = () => {
    const [showProfile, setShowProfile] = useState(false);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            {/* Chat list */}
            <div className="flex flex-col bg-white overflow-y-auto custom-scrollbar">
                {/* Chat list content */}
            </div>

            {/* Profile section */}
            <div className={`flex flex-col bg-white overflow-y-auto custom-scrollbar ${showProfile ? 'w-[40vw]' : 'hidden'}`}>
                {/* Profile content */}
            </div>

            {/* Button to toggle profile */}
            <button onClick={toggleProfile}>Toggle Profile</button>
        </div>
    );
};

export default ChatWindow3;
