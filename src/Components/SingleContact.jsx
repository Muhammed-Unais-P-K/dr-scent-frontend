import React from 'react';
import { Contacts } from '../Contacts';
import { IoIosContact } from "react-icons/io";


const SingleContact = () => {
  

  
  return (
    <>
      {Contacts.map((contact) => (
        <React.Fragment key={contact.id}>
          <div className="flex border-b border-slate-400"></div>
          <div className='w-[319px] h-[68px] bg-blue-100'>
          <div className="flex justify-between w-[299px] bg-red-100 h-11">
            <div className="flex space-x-2 items-center">
              <IoIosContact className='w-10 h-10 bg-blue-300 ml-2 rounded-lg' />
              <div className=''>
              <div className="flex justify-start space-y-0 ml-4">
                <div className='flex flex-col'>
                <div className='w-[120px] h-[17px]'>
                  <p className="text-black-700 text-sm">{contact.name}</p>
                </div>
                <div className='w-[172px] h-[17px]'>
                  <p className="text-[#667781]  text-sm leading-3">{contact.message}</p>
                </div>
                </div>
              </div>
              </div>
            </div>
            <div className="pr-8 text-xs text-[#717171]">Monday</div>
          </div>
          <div className="flex border-b border-slate-200"></div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default SingleContact;
