'use client'

import React, { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faClose, faNewspaper } from '@fortawesome/free-solid-svg-icons'

export default function Select ({ visible, switchState }) {
   function switchTo(params){
      switchState('select')
      switchState(params)
   }
   return(
      <div className={ `${ visible? 'visible': 'invisible' } bg-white border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 shadow-2xl` } >
         <div className="close flex justify-center w-12 h-12 hover:bg-red-50 rounded-full" onClick={ () => switchState('select') }>
            <FontAwesomeIcon className='text-red-500 my-auto text-2xl' icon = { faClose }/>
         </div> 

         <p className='text-center text-3xl font-light my-4 text-gray-400'>What would you like to post <span className='text-red-500'>?</span></p>
         <div className="flex">
            <div className="book border-2 hover:border-red-500 flex flex-col p-6 mx-2 rounded-md shadow-md">
               <p className='text-center text-red-500 text-lg font-semibold'>Publish a Book</p>
               <FontAwesomeIcon className='text-red-200 text-4xl my-2' icon = { faBook } />
               <p className='text-center'>Share your story with the world, Publish a book and Monetize your art.</p>
               <div className='bg-red-500 hover:bg-red-600 py-3 px-20 text-white rounded my-4 mx-auto font-bold w-fit' onClick = { () => switchTo('book') }>
                  Publish
               </div>
            </div>

            <div className="shortlet border-2 hover:border-red-500 flex flex-col p-6 mx-2 rounded-md shadow-md">
               <p className='text-center text-red-500 text-lg font-semibold'>Post a shortlet</p>
               <FontAwesomeIcon className='text-red-200 text-4xl my-2' icon = { faNewspaper } />
               <p className='text-center'>Share your thoughts with the community, short of words but not of thoughts.</p>
               <div className='hover:bg-red-600 border border-red-500 text-red-500 hover:text-white py-3 px-20 rounded my-4 mx-auto font-bold w-fit' onClick = { () => switchTo('shortlet') }>
                  Post
               </div>
            </div>
         </div>
      </div>      
   )
}