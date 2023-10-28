import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClose} from '@fortawesome/free-solid-svg-icons'
import Button from './button'
import Input from './input'



export default function Book ({ switchState, visible, load }) {

   async function publishBook () {
      let body_info = {
         title : document.querySelector('#title').value,
         snippet : document.querySelector('#snippet').value,
         price : document.querySelector('#price').value,
         thumbnail : document.querySelector('#thumbnail').value,
         file : document.querySelector('#file').value,
      }

      try {
         let response = await fetch ( `http://localhost:3000/api/publish_book`, { body : JSON.stringify( body_info ) } ).json()      
      } catch (error) {
         console.log(error)
      } finally {
         load()
      }

   }
   function switchTo(params){
      switchState('book')
      switchState(params)
   }

   return(
      <div className=  { `${ visible? 'visible': 'invisible' } bg-white border fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 p-8 shadow-2xl z-20` } >
         <div className="nav flex justify-between">
            <div className=" flex justify-center w-10 h-10 rounded-full  text-red-500 hover:bg-red-50 me-2" onClick={ () => switchTo('select') } >
               <FontAwesomeIcon className='text-2xl font-bold mx-3 my-auto' icon={faArrowLeft} />
            </div>
            <div className=" flex justify-center w-10 h-10 rounded-full  text-red-500 hover:bg-red-50 me-2" onClick={ () => switchState('book') } >
               <FontAwesomeIcon className='text-2xl font-bold mx-3 my-auto' icon={faClose} />
            </div>
         </div>


         <h1 className='text-start text-lg font-light my-1 text-black' >Descriptions & Pricing</h1>
         <hr className='w-8/12 me-auto' />
         <Input type ="text" placeholder = 'Title' id = 'title *' />
         <Input type ="text" placeholder = 'Snippet' id = 'snippet *' />
         <Input type ="price" placeholder = 'How much is this book' id = 'price' />

         <h1 className='text-start text-lg font-light my-1 text-black' >Documents</h1>
         <hr className='w-8 /12 me-auto' />
         <Input type ="image" placeholder = 'Thumbnail (optional)' id = 'thumbnail' />
         <Input type ="file" placeholder = 'Upload document' id = 'file' />

         <Input type ="liscense" placeholder = 'I agree to the terms of use of this service' id = 'liscense' />

         <Button value = 'Publish' onClick = { () => publishBook() } />
      </div>
   )
}