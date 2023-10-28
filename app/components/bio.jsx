'use client'

import React, { useState } from 'react'
import Image from 'next/image'

function shortHandNum (num) {
   return num > 999 ? num/1000 + "k" : num
}

export default function Bio({ data }){
   return(
      <div className="bio flex flex-col sticky w-3/12 rounded-3xl mt-6 ">
         <div className="bg-white w-11/12 rounded-2xl flex flex-col justify-content mx-auto border border-gray-300 mb-3 overflow-hidden">
            <div className="cover-nd-profile relative h-40 w-full">
               <div className="cover-nd-profile h-16 w-full bg-red-50 overflow-y-hidden">
                  <div className='h-1/2 w-full'>
                     <img src = { '/asset_dev/2.jpg' } alt = 'cover' className=''/>
                  </div>
               </div>
               <div className="image w-12 h-12 text-white font-bold rounded-full bg-red-500 flex justify-center overflow-hidden absolute bottom-2 left-1/2 -translate-x-1/2">
                  {/* <p className='flex m-auto'>
                     {
                        // data.name[0]
                        data[0].name.split(" ")[0][0] + data[0].name.split(" ")[1][0]
                     }                
                  </p> */}
                  <img src = { '/asset_dev/1.jpg' } alt = 'profile' className='w-full bg-contain'/>
               </div>
            </div>

            <div className='flex flex-col justify-start pt-2 pb-4'>
               <p className='text-red font-semibold text-center text-red-500 my-1'>{ data[0].name }</p>
               <p className='text-red text-xs font-semibold text-center text-black-700'>{ data[0].handle }</p>
               <p className='text-center text-xs'>{data[0].content}</p>
            </div>

            <hr className='h-1 w-10/12 mx-auto' />

            <div className="flex flex-row justify-evenly my-2">
               <div className='flex flex-col justify-center'>
                  <p className = "text-black text-center text-xs font-bold my-auto">{ shortHandNum( data[0].followers ) }</p>
                  <p className = "text-gray-300 text-center font-semibold my-auto">Followers</p>
               </div>
               <div className='flex flex-col justify-center'>
                  <p className = "text-black text-center text-xs font-bold my-auto">{ shortHandNum( data[0].following ) }</p>
                  <p className = "text-gray-300 text-center font-semibold my-auto">Following </p>
               </div>
            </div>

         </div>

         <div className="relative bg-white w-11/12 h-full rounded-2xl flex flex-col justify-content mx-auto border border-gray-300 mb-3 overflow-hidden">
            <div className="cover flex h-8 w-full bg-red-50">
               <p className = "text-red-500 font-semibold ms-4 my-auto">Following - </p>
            </div>

            <div className='h-4/6 flex flex-col justify-center'>
            </div>
         </div>
      </div>
   )
}