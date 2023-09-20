import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faClose, faHandPaper, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import Button from './button'
import Hollow from './hollow'

export default function Select () {
   return(
      <div className='bg-white border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 shadow-2xl' >
         <div className="close flex justify-end">
            <FontAwesomeIcon className='text-red-500 text-xl' icon = { faClose } />
         </div>
         <p className='text-center text-xl font-bold my-4 text-gray-400'>What would you like to post <span className='text-red-500'>?</span></p>
         <div className="flex">
            <div className="book flex flex-col p-6 pb-2 mx-2 border rounded-md shadow-md">
               <p className='text-center text-red-500 text-lg font-semibold'>Publish a Book</p>
               <FontAwesomeIcon className='text-red-200 text-4xl my-2' icon = { faBook } />
               <p className='text-center'>Share your story with the world, Publish a book and Monetize your art.</p>
               <Button value = 'Book' />
            </div>
            <div className="shortlet flex flex-col p-6 pb-2 mx-2 border rounded-md shadow-md">
               <p className='text-center text-red-500 text-lg font-semibold'>Post a shortlet</p>
               <FontAwesomeIcon className='text-red-200 text-4xl my-2' icon = { faNewspaper } />
               <p className='text-center'>Share your thoughts with the community, shourt of words but not of thoughts.</p>
               <Hollow value = 'Shortlet' />
            </div>
         </div>
      </div>      
   )

}