import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Button from './button'
import Input from './input'

export default function Shortlet ({ switchState, visible, load }) {
   async function publishShort () {
      let body_info = {
         title : document.querySelector('#title').value,
         content : document.querySelector('#content').value,
         thumbnail : document.querySelector('#thumbnail').value,
      }

      try {
         let response = await fetch ( `http://localhost:3000/api/publish_short`, { body : JSON.stringify( body_info ) } ).json()      
      } catch (error) {
         console.log(error)
      } finally {
         load()
      }

   }
   function switchTo(params){
      switchState('shortlet')
      switchState(params)
   }
   
   return(
      <div className={ `${ visible? 'visible': 'invisible' } bg-white border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 p-8 shadow-2xl`} >
         <div className="nav flex justify-between">
            <div className=" flex justify-center w-10 h-10 rounded-full  text-red-500 hover:bg-red-50 me-2" onClick={ () => switchTo('select') } >
               <FontAwesomeIcon className='text-2xl font-bold mx-3 my-auto' icon={faArrowLeft} />
            </div>
            <div className=" flex justify-center w-10 h-10 rounded-full  text-red-500 hover:bg-red-50 me-2" onClick={ () => switchState('shortlet') } >
               <FontAwesomeIcon className='text-2xl font-bold mx-3 my-auto' icon={faClose} />
            </div>
         </div>

         <h1 className='text-start text-lg font-light my-1 text-black' >Descriptions</h1>
         <hr className='w-8/12 me-auto' />
         <Input type ="text" placeholder = 'Title*'  id = 'Title' />
         <Input type ="text" placeholder = 'Tell your story*'  id = 'Content' />

         <p className='text-red-500 font-bold mb-1'>Add descriptive photo</p>
         <Input type ="image" placeholder = 'Add photo'  id = 'thumbnail' />
         <Button value = 'Post' onClick = { () => publishShort() } />
      </div>
   )
}