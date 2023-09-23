import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function Button ({ value, icon, action }) {
   let isLoading = 0
   return(
      <button disabled={ isLoading } className='bg-red-500 hover:bg-red-600 py-3 px-20 text-white rounded my-4 mx-auto font-bold w-fit' onClick={ action }>
         { isLoading? <>`Login` <Image alt = '' width={10} height={10}/></> :`${value}` }
      </button> 
   )
}