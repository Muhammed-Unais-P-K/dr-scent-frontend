import React from 'react';

const Message = ({ text, time, isSender }) => {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`relative max-w-lg w-auto p-3 ${isSender ? 'rounded-t-xl rounded-bl-xl' : 'rounded-t-xl rounded-br-xl'}  bg-[#EFEFEF] text-[#000000] text-opacity-89`}>
        <p className="text-sm pb-3">{text}</p>
        <span className={"text-xs text-[#000000] text-opacity-60 absolute bottom-1 right-3"}>{time}</span>
      </div>
    </div>
  );
};

export default Message;
