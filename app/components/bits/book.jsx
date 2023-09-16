import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Button from './button'
import Input from './input'

export default function Book () {
   return(
      <div className='bg-white border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 p-8 shadow-2xl' >
         <div className="close flex justify-end">
            <FontAwesomeIcon className='text-red-500 text-xl' icon = { faClose } onClick = {'close'} />
         </div>
         <Input type ="text" placeholder = 'Title' icon = { null } id = 'title *' />
         <Input type ="text" placeholder = 'Snippet' icon = { null } id = 'snippet *' />
         <Input type ="checkbox" placeholder = 'I agree to the terms of use of this service' icon = { null } id = 'snippet' />
         <Input type ="image" placeholder = 'Thumbnail(optional)' icon = { null } id = 'snippet' />
         <Input type ="file" placeholder = 'Upload document' icon = { null } id = 'snippet' />
         <Input type ="number" placeholder = 'How much is this book' icon = { null } id = 'snippet' />
         <Button value = 'Publish' action = { newPost() } />
      </div>
   )
}