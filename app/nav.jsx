'use client'
 
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

export default function Nav({ tab }){
  let tabs = [
    { tab : 'home', href : '/' }, 
    { tab : 'login', href : '/login' }, 
    { tab : 'signup', href : '/signup' }
  ]
  const pathname = usePathname()

  return (
    <nav className = "flex flex-row sticky left-0 top-0 justify-center w-full py-2 bg-white shadow-sm shadow-gray-300 z-10">
      <div className="flex flex-row justify-between w-11/12 ">
        <div className ="flex flex-row">
          <h1 className="font-bold text-2xl text-red-500 my-auto">Quill</h1>
          <Image src = 'quill.svg' alt = 'quill logo' width = {40} height={40}/>
        </div>
        <div className="flex flex-row justify-center h-full my-auto">
          {
            tabs.map((index)=>{
              const is_active = pathname === index.href
              return(
                <Link href={ index.href } key = { index.tab } className = { `flex flex-col justify-center h-full my-auto px-3 mx-1 font-semibold text-sm ${ is_active? "text-red-500 bg-red-50" : "text-gray-500" } hover:text-red-600 hover:bg-red-50 rounded`} >{ index.tab }</Link>
              ) 
            })
          }

          <Link href="/communities" className ="flex flex-row justify-center h-full my-auto px-6 mx-1 font-semibold text-sm text-white bg-red-500 hover:bg-red-600 rounded">
              <p className="my-auto">Communities</p> 
              <FontAwesomeIcon className='text-sm text-white ms-2 my-auto' icon={ faPeopleGroup } /> 
          </Link>
        </div>
      </div>
    </nav> 
  )
}