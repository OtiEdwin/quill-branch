'use client'

import React, { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faClose, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import Button from './button'
import Hollow from './hollow'

export default function Select ({ close, visible }) {
   const post = useCallback( (type) => {
      close(0)
   
      if (type === 'book') close(1) 
      else close(2)

   }, [close] )

   return(
      <div className={ `${ visible? 'visible': 'invisible' } bg-white border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 shadow-2xl` } >
         <div className="close flex justify-center w-12 h-12 hover:bg-red-50 rounded-full" onClick={ () => close(0) }>
            <FontAwesomeIcon className='text-red-500 my-auto text-2xl' icon = { faClose }/>
         </div> 

         <p className='text-center text-3xl font-light my-4 text-gray-400'>What would you like to post <span className='text-red-500'>?</span></p>
         <div className="flex">
            <div className="book flex flex-col p-6 pb-2 mx-2 border rounded-md shadow-md">
               <p className='text-center text-red-500 text-lg font-semibold'>Publish a Book</p>
               <FontAwesomeIcon className='text-red-200 text-4xl my-2' icon = { faBook } />
               <p className='text-center'>Share your story with the world, Publish a book and Monetize your art.</p>
               <Button value = 'Book' action = { post } />
            </div>
            <div className="shortlet flex flex-col p-6 pb-2 mx-2 border rounded-md shadow-md">
               <p className='text-center text-red-500 text-lg font-semibold'>Post a shortlet</p>
               <FontAwesomeIcon className='text-red-200 text-4xl my-2' icon = { faNewspaper } />
               <p className='text-center'>Share your thoughts with the community, shourt of words but not of thoughts.</p>
               <Hollow value = 'Shortlet' action = { post } />
            </div>
         </div>
      </div>      
   )

}