import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Create({ switchState }){
   return(
      <div onClick={() => switchState('select')}  className="fixed bg-white hover:bg-red-500 active:bg-red-700 text-red-500 hover:text-white flex justify-center rounded-full h-20 w-20 ml-auto bottom-8 right-8 shadow-gray-200 shadow-lg" >
         <FontAwesomeIcon className='text-4xl mx-3 my-auto' icon={ faPlus } />
      </div>
   )

}