import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export default function Hollow ({ isLoading, value }){
   return (
      <button disabled={ isLoading } className='hover:bg-red-600 border border-red-500 text-red-500 hover:text-white py-3 px-20 rounded my-4 mx-auto font-bold w-fit'>
         {value}
      </button> 
   )
}