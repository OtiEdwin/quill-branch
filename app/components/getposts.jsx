"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Button from "./bits/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faFeather, faHeart, faPaperPlane, faPlus, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

function shortHandNum (num) {
  return num > 999 ? num/1000 + "k" : num
}

export default function Post({ postData }) {
  async function follow(){
    let id = postData.id
  }

  if ( postData.type === "snippet"){
    return (
      <div className = "post-snippet bg-white border p-4 text-sm text-start border-gray-300 rounded-2xl w-full mb-4">
          <div className='flex flex-row justify-start'>
            <div className=" flex justify-center text-center font-bold text-white w-10 h-10 rounded-full bg-red-500 me-2">
              <p className='flex m-auto'>
                {
                  postData.author.split(" ")[0][0] + postData.author.split(" ")[1][0]
                }                
              </p>
            </div>
            <div className="my-auto mx-1 text-black font-bold text-start">
                { postData.author }            
            </div>
            <div className=" flex justify-center w-10 h-10 ms-auto rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white me-2">
                <FontAwesomeIcon className='text-sm font-bold mx-3 my-auto' icon={faPlus} />
            </div>
          </div>

          <div className='snippet flex flex-row border-s-8 border-red-600 bg-gray-50 text-red-600 p-3 my-2 rounded-md font-semibold'>
            <div className="thumb bg-red-400 rounded-md mx-4 my-auto w-9 h-full">
              {/* <Image src="/" alt="thumbnail" width={30} height={ 100 } /> */}
            </div>
            <div className="data flex flex-col">
              <p>{ postData.snippet }</p>
              <p className='text-gray-600 font-light content my-2'>
                { postData.content }
              </p>              
            </div>
          </div>

          <div className="actions flex justify-between">
            <div className="flex flex-row">
              <button className='bg-red-50 hover:bg-red-100 text-red-500 font-light rounded-full px-6 h-fit py-2 mx-2 my-auto'>Buy</button>
              <h1 className='text-2xl flex my-auto'><span className='text-red-500 me-1 text-sm'>$</span>2.99</h1>
            </div>

            <div className='flex flex-row justify-end'>
              <div className='likes flex flex-col justify-center me-1 p-2 h-16 w-16 rounded-full hover:bg-red-50'>
                  <FontAwesomeIcon className={`text-lg text-${ postData.shared ? 'red' : 'gray' }-300 mx-3 my-auto`} icon={faHeart} />
                  <div className='text-center text-xs font-bold text-black'>{ shortHandNum(postData.likes) }</div>
              </div>
              <div className='share flex flex-col justify-center me-1 p-2 h-16 w-16 rounded-full hover:bg-red-50'>
                  <FontAwesomeIcon className={`text-lg text-${ postData.shared ? 'red' : 'gray' }-300 mx-3 my-auto`} icon={faShare} />
                  <div className='text-center text-xs font-bold text-black'>{ shortHandNum(postData.shares) }</div>
              </div>
            </div>            
          </div>
      </div>
    )    
  } else if (postData.type === 'shortlet'){
    return(
      <div className = "posts-plain bg-white border p-4 text-sm text-start border-gray-300 rounded-2xl w-full mb-4">
        <div className='flex flex-row justify-start'>
          <div className=" flex justify-center text-center font-bold text-white w-10 h-10 rounded-full bg-red-500 me-2">
            <p className='flex m-auto'>
              {
                postData.author.split(" ")[0][0] + postData.author.split(" ")[1][0]
              }                
            </p>
          </div>
          <div className="my-auto mx-1 text-black font-bold text-start">
            { postData.author }            
          </div>
            <div className=" flex justify-center w-10 h-10 ms-auto rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white me-2">
                <FontAwesomeIcon className='text-sm font-bold mx-3 my-auto' icon={faPlus} />
            </div>
        </div>

        <p className='content my-2'>
        { postData.content }
        </p>

        <div className='actons flex flex-row justify-end'>
          <div className='likes flex flex-col justify-center p-2 me-1 h-16 w-16 rounded-full hover:bg-red-50'>
              <FontAwesomeIcon className={`text-lg text-${ postData.liked ? 'red' : 'gray' }-300 mx-3 my-auto`} icon={faHeart} />
              <div className='text-center text-xs font-bold text-black'>{ shortHandNum(postData.likes) }</div>
          </div>
          <div className='share flex flex-col justify-center p-2 me-1 h-16 w-16 rounded-full hover:bg-red-50'>
              <FontAwesomeIcon className={`text-lg text-${ postData.shared ? 'red' : 'gray' }-300 mx-3 my-auto`} icon={faShare} />
              <div className='text-center text-xs font-bold text-black'>{ shortHandNum(postData.shares) }</div>
          </div>
        </div>
      </div>      
    )
  }
}
 
 
 
 