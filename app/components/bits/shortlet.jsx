import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faClose, faHandPaper, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import Button from './button'
import Input from './input'

export default function Shortlet () {
   return(
      <div className='bg-white border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 p-8 shadow-2xl' >
               <div className="close flex justify-end p-4 hover:bg-red-50 rounded-full">
         <FontAwesomeIcon className='text-red-500 text-2xl' icon = { faClose } />
      </div> 

         <h1 className='text-start text-lg font-light my-1 text-black' >Descriptions</h1>
         <hr className='w-8/12 me-auto' />
         <Input type ="text" placeholder = 'Title*'  id = 'Title' />
         <Input type ="text" placeholder = 'Tell your story*'  id = 'Content' />
         <p className='text-red-500 font-bold mb-1'>Add descriptive photo</p>
         <Input type ="image" placeholder = 'Add photo'  id = 'snippet' />
         <Button value = 'Post'/>
      </div>
   )
}