import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Button from './button'
import Hollow from './hollow'

export default function Select () {
   <div className='bg-white border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 p-8 shadow-2xl' >
      <div className="close flex justify-end">
         <FontAwesomeIcon className='text-red-500 text-xl' icon = { faClose } onClick = {'close'} />
      </div>
      <p>What would you like to post ?</p>
      <div className="flex ">
         <Button value = 'Publish a Book' action = { newPost() } />
         <Hollow value = 'Post a shortlet' action = { newPost() } />
      </div>
   </div>
}