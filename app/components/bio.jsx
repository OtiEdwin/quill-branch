

import React, { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather } from '@fortawesome/free-solid-svg-icons'

export default function Bio(){
   return(
      <div className="bio flex flex-col sticky w-3/12 rounded-3xl mt-6 h-85">
         <div className="bg-white w-11/12 min-h-40 rounded-2xl flex flex-col justify-content mx-auto border border-gray-300 mb-3 overflow-hidden">
         <div className="cover-nd-profile relative h-3/6 w-full">
            <div className="cover-nd-profile h-4/6 w-full bg-red-50"></div>
            <div className="image w-12 h-12 rounded-full bg-red-500 flex justify-center overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/6">
               <FontAwesomeIcon className='text-sm text-white mx-3 my-auto' icon={faFeather} />
               {/* <Image alt='profile picture'/> */}
            </div>
         </div>

         <div className='h-4/6 flex flex-col justify-center'>
            <p className='text-red font-semibold text-center text-red-500'>Otonye Hillary Edwin</p>
            <p className='text-red text-xs font-semibold text-center text-black-700'>@otieddie</p>
            <p className='text-center text-xs'>Transcendence is true Freedom</p>
         </div>
         </div>

         <div className="relative bg-white w-11/12 h-full rounded-2xl flex flex-col justify-content mx-auto border border-gray-300 mb-3 overflow-hidden">
         <div className="cover flex h-8 w-full bg-red-50">
            <p className = "text-red-500 font-semibold ms-4 my-auto">Following</p>
         </div>

         <div className='h-4/6 flex flex-col justify-center'>
         </div>
         </div>
      </div>
   )
}