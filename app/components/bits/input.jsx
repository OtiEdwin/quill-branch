import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default function Input ({ type, placeholder, icon, id }) {
   if (type === 'price'){
      return(
         <div className = "relative input flex flex-col my-6">
            <FontAwesomeIcon className='text-md text-red-500 me-2 my-auto absolute top-2/4 right-2 -translate-y-2/4' icon={ icon } />
            <label className='text-red-500 text-start font-bold text-xs capitalize absolute -top-2 left-5 bg-white px-1' htmlFor = {`${ type }`} > { placeholder } </label>
            <input className='w-2/12 border border-gray-300 focus:outline-red-500 rounded-full px-6 py-3 text-xs' type = "number" name = {`${ type }`} id = {`${ id }`} placeholder = {`${ placeholder }`} />
            <input className='w-10/12 border border-gray-300 focus:outline-red-500 rounded-full px-6 py-3 text-xs' type = {`${ type }`} name = {`${ type }`} id = {`${ id }`} placeholder = {`${ placeholder }`} />
         </div>
      )
   }
   return(
      <div className = "relative input flex flex-col my-6">
         <FontAwesomeIcon className='text-md text-red-500 me-2 my-auto absolute top-2/4 right-2 -translate-y-2/4' icon={ icon } />
         <label className='text-red-500 text-start font-bold text-xs capitalize absolute -top-2 left-5 bg-white px-1' htmlFor = {`${ type }`} > { placeholder } </label>
         <input className='w-full border border-gray-300 focus:outline-red-500 rounded-full px-6 py-3 text-xs' type = {`${ type }`} name = {`${ type }`} id = {`${ id }`} placeholder = {`${ placeholder }`} />
      </div>
   )
}