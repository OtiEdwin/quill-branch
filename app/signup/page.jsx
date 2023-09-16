

import Image from 'next/image'
import Nav from '../components/nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFeather, faPerson, faEye } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
   return (
      <section className='flex flex-row justify-between w-11/12  h-85 m-auto relative'>
         <div className="illustration flex flex-col justify-end relative bg-red-50 w-5/12 h-12/12 border-2 border-gray-500 rounded-3xl">
            <div className = 'absolute -z-10 h-full w-full -bottom-2.5 -left-2.5 bg-red-500 rounded-3xl'></div>


         </div>

         <div className="login flex flex-col justify-center ms-16 w-6/12">
            <div className=" shadow-lg shadow-gray-200 w-10/12 flex flex-col justify-center px-7 py-10">
               <h1 className="flex flex-row text-gray-700 text-3xl font-extrabold my-4">
                  <FontAwesomeIcon className='text-2xl text-red-500 me-2 my-auto' icon={faFeather} />
                  Sign Up
               </h1>
               <form action="" method="post">
                  <div className = "relative input flex flex-col my-4">
                     <FontAwesomeIcon className='text-md text-red-500 me-2 my-auto absolute top-2/4 right-2 -translate-y-2/4' icon={faPerson} />
                     <label className ="text-red-500 text-start font-bold text-xs capitalize absolute -top-2 left-5 bg-white px-1" htmlFor="fullname">Full Name</label>
                     <input className='w-full border border-gray-300 text-xs active:border-gray-500 focus:outline-red-500 rounded-full px-6 py-3' type="text" name="fullname" id="fn" placeholder='john doe' />
                  </div>
                  <div className = "relative input flex flex-col my-4">
                     <FontAwesomeIcon className='text-md text-red-500 me-2 my-auto absolute top-2/4 right-2 -translate-y-2/4' icon={faEnvelope} />
                     <label className ="text-red-500 text-start font-bold text-xs capitalize absolute -top-2 left-5 bg-white px-1" htmlFor="email">Email</label>
                     <input className='w-full border border-gray-300 text-xs active:border-gray-500 focus:outline-red-500 rounded-full px-6 py-3' type="email" name="email" id="email" placeholder='quilluser@email.com' />
                  </div>
                  <div className = "relative input flex flex-col my-4">
                     <FontAwesomeIcon className='text-md text-red-500 me-2 my-auto absolute top-2/4 right-2 -translate-y-2/4' icon={faEye} />
                     <label className='text-red-500 text-start font-bold text-xs capitalize absolute -top-2 left-5 bg-white px-1' htmlFor="password">Password</label>
                     <input className='w-full border border-gray-300 text-xs active:border-gray-500 active:outline-red-500 focus:outline-red-500 rounded-full px-6 py-3' type="password" name="password" id="password" placeholder='********' />
                  </div>
                  <div className = "relative input flex flex-col my-4">
                     <FontAwesomeIcon className='text-md text-red-500 me-2 my-auto absolute top-2/4 right-2 -translate-y-2/4' icon={faEye} />
                     <label className='text-red-500 text-start font-bold text-xs capitalize absolute -top-2 left-5 bg-white px-1' htmlFor="confirm-password">Confirm Password</label>
                     <input className='w-full border border-gray-300 text-xs active:border-gray-500 active:outline-red-500 focus:outline-red-500 rounded-full px-6 py-3' type="password" name="confirm-password" id="password" placeholder='********' />
                  </div>
                  <button className='bg-red-500 hover:bg-red-600 py-2 px-16 text-white rounded my-4 font-bold w-fit'  onClick={ () => signup() }>Sign up</button>                  
               </form>               
            </div>

         </div>
      </section>
   )
}
