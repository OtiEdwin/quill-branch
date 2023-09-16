import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faClose } from '@fortawesome/free-solid-svg-icons'
import Button from './button'
import Hollow from './hollow'

export default function Info ({message, error}) {
   <div className='bg-white border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 p-8 shadow-2xl' >
      <div className="close flex justify-end">
         <FontAwesomeIcon className='text-red-500 text-xl' icon = { faClose } onClick = {'close'} />
      </div>
      <div className="info flex justify-center">
         <FontAwesomeIcon className='text-red-500 text-5xl' icon = { faCheckCircle } onClick = {'close'} />
      </div>
      <p>{ message }</p>
      <div className="flex ">
         <Button value = 'Done' action = { newPost() } />
      </div>
   </div>
}