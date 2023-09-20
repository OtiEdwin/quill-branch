"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faFeather, faPaperPlane, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export default function Post({ postData }) {
  if ( postData.type === "snippet"){
    return (
      <div className = "post-snippet bg-white border p-4 text-sm text-start border-gray-300 rounded-2xl w-full mb-4">
          <div className='flex flex-row justify-start'>
            <div className=" flex w-10 h-10 rounded-full bg-red-500 me-2">
                <FontAwesomeIcon className='text-sm text-white mx-3 my-auto' icon={faFeather} />
            </div>
            <div className="my-auto mx-1 text-red-500 font-bold text-start">
                { postData.author }            
            </div>
          </div>

          <div className='snippet border-s-8 border-red-600 bg-red-50 text-red-600 p-3 my-2 rounded-md font-semibold'>
            <p>Snippet : { postData.snippet }</p>
          </div>

          <p className='content my-2'>
            { postData.content }
          </p>

          <div className='actons flex flex-row justify-end'>
            <div className='likes flex flex-col justify-center me-3 h-8 w-8 rounded-full hover:bg-red-50'>
                <FontAwesomeIcon className='text-7xl text-red-500 mx-3 my-auto' icon={faThumbsUp} />
                <div className='text-center text-xs font-bold text-gray-400'>{ postData.likes }</div>
            </div>
            <div className='share flex flex-col justify-center me-3 h-8 w-8 rounded-full hover:bg-red-50'>
                <FontAwesomeIcon className='text-7xl text-red-500 mx-3 my-auto' icon={faShare} />
                <div className='text-center text-xs font-bold text-gray-400'>{ postData.shares }</div>
            </div>
          </div>

          <div className='flex flex-row w-full my-2'>
            <div className = "bg-red-400 w-1 h-1 rounded-full" ></div>  
            <div className = "bg-red-400 h-1 mx-1 w-11/12 rounded" ></div>
          </div>
      </div>
    )    
  } else if (postData.type === 'shortlet'){
    return(
      <div className = "posts-plain bg-white border p-4 text-sm text-start border-gray-300 rounded-2xl w-full mb-4">
        <div className='flex flex-row justify-start'>
          <div className=" flex w-10 h-10 rounded-full bg-red-500 me-2">
            <FontAwesomeIcon className='text-sm text-white mx-3 my-auto' icon={faFeather} />
          </div>
          <div className="my-auto mx-1 text-red-500 font-bold text-start">
            { postData.author }            
          </div>
        </div>

        <p className='content my-2'>
        { postData.content }
        </p>

        <div className='actons flex flex-row justify-end'>
          <div className='likes flex flex-col justify-center me-3 h-8 w-8 rounded-full hover:bg-red-50'>
              <FontAwesomeIcon className='text-xl text-red-500 mx-3 my-auto' icon={faThumbsUp} />
              <div className='text-center text-xs font-bold text-gray-400'>{ postData.likes }</div>
          </div>
          <div className='share flex flex-col justify-center me-3 h-8 w-8 rounded-full hover:bg-red-50'>
              <FontAwesomeIcon className='text-xl text-red-500 mx-3 my-auto' icon={faShare} />
              <div className='text-center text-xs font-bold text-gray-400'>{ postData.shares }</div>
          </div>
        </div>

        <div className='flex flex-row w-full my-2'>
          <div className = "bg-red-400 w-1 h-1 rounded-full" ></div>  
          <div className = "bg-red-400 h-1 mx-1 w-11/12 rounded" ></div>
        </div>
      </div>      
    )
  }
}
 
 
 
 