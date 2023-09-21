import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faClose } from '@fortawesome/free-solid-svg-icons'
import Button from './button'

export default function Info ({message, error}) {
   return(
      <div className='bg-white border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 p-8 shadow-2xl' >
               <div className="close flex justify-end p-4 hover:bg-red-50 rounded-full">
         <FontAwesomeIcon className='text-red-500 text-2xl' icon = { faClose } />
      </div> 

         <div className="info flex justify-center">
            <FontAwesomeIcon className='text-green-500 text-5xl' icon = { faCheckCircle } />
         </div>
         <p className='text-center my-4'>Post created Successfully!</p>
         <div className="flex ">
            <Button value = 'Done' />
         </div>
      </div>      
   )

}