import Image from 'next/image'
import Link from 'next/link'

export default function Nav(){
   return (
      <nav className = "flex flex-row justify-center w-full py-2 bg-white shadow-sm shadow-gray-300">
        <div className="flex flex-row justify-between w-11/12 ">
          <div className ="flex flex-row">
            <h1 className="font-bold text-2xl text-red-500 my-auto">Quill</h1>
            <Image src = 'quill.svg' alt = 'quill logo' width = {40} height={40}/>
          </div>
          <div className="flex flex-row justify-center h-full my-auto">
            <Link href="/home" className ="flex flex-col justify-center h-full my-auto px-3 mx-1 font-semibold text-sm text-gray-500 hover:text-red-600 hover:bg-red-50 rounded">Home</Link>
            <Link href="/login" className ="flex flex-col justify-center h-full my-auto px-3 mx-1 font-semibold text-sm text-gray-500 hover:text-red-600 hover:bg-red-50 rounded">Login</Link>
            <Link href="/signup" className ="flex flex-col justify-center h-full my-auto px-3 mx-1 font-semibold text-sm text-gray-500 hover:text-red-600 hover:bg-red-50 rounded">Sign-up</Link>
            <Link href="/communities" className ="flex flex-col justify-center h-full my-auto px-6 mx-1 font-semibold text-sm text-white bg-red-500 hover:bg-red-600 rounded">Communities</Link>
          </div>
        </div>
      </nav> 
   )
}