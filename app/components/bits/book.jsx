import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose} from '@fortawesome/free-solid-svg-icons'
import Button from './button'
import Input from './input'

export default function Book ({ close, visible }) {
   return(
      <div className=  { `${ visible? 'visible': 'invisible' } bg-white border fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 p-8 shadow-2xl z-20` } >
         <div className=" flex justify-center w-10 h-10 ms-auto rounded-full  text-red-500 hover:bg-red-50 me-2" onClick={ () => close(1) } >
            <FontAwesomeIcon className='text-2xl font-bold mx-3 my-auto' icon={faClose} />
         </div>

         <h1 className='text-start text-lg font-light my-1 text-black' >Descriptions & Pricing</h1>
         <hr className='w-8/12 me-auto' />
         <Input type ="text" placeholder = 'Title' icon = { null } id = 'title *' />
         <Input type ="text" placeholder = 'Snippet' icon = { null } id = 'snippet *' />
         <Input type ="price" placeholder = 'How much is this book' id = 'snippet' />

         <h1 className='text-start text-lg font-light my-1 text-black' >Documents</h1>
         <hr className='w-8 /12 me-auto' />
         <Input type ="image" placeholder = 'Thumbnail (optional)' id = 'snippet' />
         <Input type ="file" placeholder = 'Upload document' icon = { null } id = 'snippet' />

         <Input type ="liscense" placeholder = 'I agree to the terms of use of this service' icon = { null } id = 'snippet' />

         <Button value = 'Publish' />
      </div>
   )
}