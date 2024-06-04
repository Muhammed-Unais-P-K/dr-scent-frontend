import React from 'react';
import { Contacts } from '../Contacts';
import { IoMdContact } from "react-icons/io";

const ContactCard = () => {

  


  return (
    <>
      {Contacts.map((contact, index) => (
        <div key={index} className="bg-[#E4E4E4]-100">
          {/* Contact Card */}
          {/* <div className='flex justify-center space-y-1'>
            <div className='md:w-[319px] md:h-[68px] space-y-2.5 px-2.5 py-3 border  rounded-lg'>
              <div className="flex flex-row md:w-[299px] h-11 space-x-2">
                <div>
                  <IoMdContact className='w-11 h-11 text-white bg-[#927DE7] rounded-lg' />
                </div>
                <div className="flex flex-row md:w-[247px] md:h-[38px] space-x-2">
                  <div className="flex flex-col md:w-[163px] md:h-[38px] py-1">
                    <div className="w-28 md:h-[17px]">
                      <h1 className='text-sm text-[#333333]'>{contact.name}</h1>
                    </div>
                    <div className="bg-yellow-100 w-48 md:h-[17px]">
                      <h2 className='text-xs text-[#717171]'>&#x2713;{contact.message}</h2>
                    </div>
                  </div>
                  <div className="flex md:w-[60px] md:h-[38px] py-1.5">
                    <div className="md:w-[60px] md:h-[17px] space-x-2 px-2 py-1">
                      <h1 className='md:w-[44px] leading-[9px] text-xs text-[#717171]'>Monday</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

<div className='flex justify-center space-y-1'>
      <div className='md:w-[319px] md:h-[68px] space-y-2.5 px-2.5 py-3  rounded-lg'>
        <div className="flex flex-row md:w-[299px] h-11 space-x-2">
          <div className='cursor-pointer'>
            <IoMdContact className='w-10 h-10 text-white bg-[#927DE7] rounded-lg' />
          </div>
          <div className="flex flex-row md:w-[247px] md:h-[38px] space-x-2">
            <div className="flex flex-col md:w-[163px] md:h-[38px] py-1">
              <div className="w-28 md:h-[17px]">
                <h1 className='text-sm text-[#333333]'>{contact.name}</h1>
              </div>
              <div className="w-44 w-3 overflow-hidden whitespace-nowrap overflow-ellipsis">
                <h2 className='text-xs text-[#717171]'>&#x2713;{contact.message}</h2>
              </div>
            </div>
            <div className="flex md:w-[60px] md:h-[38px] py-1.5">
              <div className="md:w-[60px] md:h-[17px] space-x-2 px-2 py-1">
                <h1 className='md:w-[44px] leading-[9px] text-xs text-[#717171]'>Monday</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

          {/* Bottom Divider */}
          <div className="flex justify-center">
            <div className="border-b border-[#E4E4E4] my-1 h-1 w-[319px]" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactCard;
