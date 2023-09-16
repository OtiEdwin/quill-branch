import Book from './bits/book'
import Shortlet from './bits/shortlet'
import Select from './bits/select'
import Info from './bits/info'


export default function Modal({ type, content }){
   if ( type === 'book' ) {
      return <Book />
   } 
   // else if ( type === 'shortlet' ) return <Shortlet />
   // else if ( type === 'select' ) return <Select />
   // else if ( type === 'info' ) return <Info />
   // else return <></>
   else{
      return(
         <div className="text-5xl">
            this is the modal
         </div>
      )
   }

}