import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather, faEnvelope, faEye, faEyeSlash, faCamera, faFile } from '@fortawesome/free-solid-svg-icons'

export default function Input ({ type, placeholder, icon, id }) {
   if (type === 'image'){
      return(
         <div className = "relative input flex flex-col my-2">
            <label className='border-2 border-gray-300 hover:border-red-600 hover:bg-slate-50 active:bg-slate-100 active:border-red-400 w-full rounded-lg px-6 py-3 flex justify-center text-black font-bold text-xs capitalize bg-white' htmlFor = {`${ type }`} > 
               { placeholder }
               <FontAwesomeIcon className='text-xl text-center text-red-500 mx-4 my-auto' icon={ faCamera } />
            </label>
            <input className='hidden' type = {`file`} accept='image/jpeg, image/png, image/gif, image/jpg' name = {`${ type }`} id = {`${ id }`} placeholder = {`${ placeholder }`} />
         </div>
      )
   } else  if (type === 'file'){
      return(
         <div className = "relative input flex flex-col my-2">
            <label className='border-2 border-gray-300 hover:border-red-600 hover:bg-slate-50 active:bg-slate-50 w-full active:border-red-400 rounded-lg px-6 py-3 flex justify-center text-black font-bold text-xs capitalize bg-white' htmlFor = {`${ type }`} > 
               { placeholder }
               <FontAwesomeIcon className='text-xl text-center text-red-500 mx-4 my-auto' icon={ faFile } />
            </label>
            <input className='hidden' type = {`file`} name = {`${ type }`} id = {`${ id }`} placeholder = {`${ placeholder }`} required/>
         </div>
      )
   } else if ( type === 'price' ){
      return(
         <div className = "relative input flex flex-col my-2">
            <label className='text-red-500 text-start font-bold text-xs capitalize mb-1' htmlFor = 'currency'> Select currency</label>
            <div className="flex flex-row justify-between">
               <select className='w-3/12 border border-gray-300 focus:outline-red-500 rounded-tl-lg rounded-bl-lg px-6 py-3 text-xs text-black font-bold' name="currency" id="currency" required>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="NGN">NGN</option>
               </select>
               <input className='w-9/12 border border-gray-300 focus:outline-red-500 rounded-tr-full rounded-br-full px-1 py-3 text-xs' type = 'number' name = {`${ type }`} id = {`${ id }`} placeholder = {`${ placeholder }`} required/>
            </div>
         </div>
      )

   } else if ( type === 'liscense' ){
      return(
         <div className='flex flex-row'>
            <div className='text-black text-start font-bold text-xs bg-white px-1 me-3' htmlFor = 'agree' > { placeholder } </div>
            <input type = 'checkbox' name='agree-check' id='agree' required/>
         </div>
      )
   }
   return(
      <div className = "relative input flex flex-col my-2">
         <FontAwesomeIcon className='text-md text-red-500 me-2 my-auto absolute top-2/4 right-2 -translate-y-2/4' />
         <label className='text-red-500 text-start font-bold text-xs capitalize px-1 mb-1' htmlFor = {`${ type }`} > { placeholder } </label>
         <input className='w-full border border-gray-300 focus:outline-red-500 rounded-full px-6 py-3 text-xs' type = {`${ type }`} name = {`${ type }`} id = {`${ id }`} required/>
      </div>
   )
}