import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Create(){
   return (
      <div className="fixed bg-white hover:bg-red-500 text-red-500 hover:text-white flex justify-center rounded-full h-20 w-20 ml-auto bottom-8 right-8 shadow-gray-200 shadow-lg">
         <FontAwesomeIcon className='text-4xl mx-3 my-auto' icon={ faPlus } />
      </div>
   )
}