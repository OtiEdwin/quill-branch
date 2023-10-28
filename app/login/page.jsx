'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


export default function Home() {
   const [isLogged, setIsLogged] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError ] = useState(null)

   async function login(){
      let email = document.querySelector('#email').value
      let password = document.querySelector('#password').value

      let info = {
         email: email,
         password: password
      }
      console.log(info)

      try {
         setIsLoading(true)
         const data = await fetch(
            `http://localhost:3000/api/login`, 
            {
               method: "post",
               headers: {
                  "Content-Type": "application/json"
               },
               body: JSON.stringify(info)
            }
         )        
         console.log(`logged in as ${ data.name }, with folowers ${ data.folowers }`)
      } catch (error) {
         setError(error.message)
      } finally {
         setIsLoading(false)
      }

   }

   return (
      <section className = 'flex flex-row justify-between w-11/12 h-screen m-auto relative'>
         <div className="illustration flex flex-col justify-end relative my-auto bg-re-50 h-8.5/10 w-5/12 border-2 border-re-500 rounded-3xl">
            <div className = 'absolute -z-10 h-full w-full -bottom-2.5 -left-2.5 bg-re-500 rounded-3xl'></div>
            <Image className = 'mt-auto drop-shadow' alt = 'hero image' src = '/hero1.png' width = {500} height = {500}/>

            <div className = "bg-white border py-2 px-4 text-sm text-start border-gray-400 absolute shadow-xl rounded-2xl w-66 top-28 -right-14">
               <div className='flex flex-row justify-between'>
                  <div className=" flex w-9 h-9 rounded-full bg-red-500 me-2">
                     <FontAwesomeIcon className='text-sm text-white mx-3 my-auto' icon={faFeather} />
                  </div>
                  <div className="m-auto">
                     The great outdoors is where life happens.            
                  </div>
               </div>

               <div className='flex flex-row w-full my-2'>
                  <div className = "bg-red-400 w-1 h-1 rounded-full" ></div>  
                  <div className = "bg-red-400 h-1 mx-1 w-11/12 rounded" ></div>
               </div>
            </div>

            <div className = "flex flex-row justify-between bg-white border py-2 px-4 text-sm border-gray-400 absolute shadow-xl rounded-2xl w-auto top-10 -left-10">
               <div className=" flex w-9 h-9 rounded-full bg-red-500 me-2">
                  <FontAwesomeIcon className='text-sm text-white m-auto' icon={faFeather} />
               </div>
               <div className="m-auto">
                  Trancenedence is true freedom.
               </div>
            </div>
         </div>

         <div className="ring-24 ring-red-300"></div>


         <div className="description flex flex-col justify-center ms-16 w-6/12">
            <h1 className = "flex flex-row text-gray-700 text-5xl font-extrabold my-4">Feeling Inspired? <div className = "text-red-500"> Quill</div></h1>
            
            <div className=" shadow-lg shadow-gray-200 w-10/12 flex flex-col justify-center px-7 py-10">
               <h1 className="flex flex-row text-gray-700 text-3xl font-bold mb-12">
                  Login
               </h1>

               {error && <div className='text-black bg-red p-4 rounded-md border border-black'> { error } </div>}
               
               <div className = "form relative input flex flex-col mb-4">
                  <FontAwesomeIcon className='text-md text-red-500 me-2 my-auto absolute top-2/4 right-2 -translate-y-2/4' icon={faEnvelope} />
                  <label className ="text-red-500 text-start font-bold text-xs capitalize absolute -top-2 left-5 bg-white px-1" htmlFor="email">Email</label>
                  <input className='w-full border border-gray-300  focus:outline-red-500 rounded-full px-6 py-3 text-xs' type="email" name="email" id="email" placeholder='quilluser@email.com' />
               </div>
               
               <div className = "relative input flex flex-col my-4">
                  <FontAwesomeIcon className='text-md text-red-500 me-2 my-auto absolute top-2/4 right-2 -translate-y-2/4' icon={faEye} />
                  <label className='text-red-500 text-start font-bold text-xs capitalize absolute -top-2 left-5 bg-white px-1' htmlFor="password">Password</label>
                  <input className='w-full border border-gray-300 focus:outline-red-500 rounded-full px-6 py-3 text-xs' type = "password" name="password" id="password" placeholder='********' />
               </div>
               
               <button disabled={ isLoading } className='bg-red-500 hover:bg-red-600 py-3 px-20 text-white rounded-full my-4 mt-8 font-bold w-full'>
                  { isLoading? <>`Login` <Image alt = '' width={10} height={10}/></> :`Login` }
               </button>  
               
               <div className="forgot text-center">
                  <Link href={`/signup`} >Dont have account ? </Link>
               </div>                
            </div>
         </div>        
      </section>
   )
}
