import Book from './bits/book'
import Shortlet from './bits/shortlet'
import Select from './bits/select'
import Info from './bits/info'
import Create from './bits/create'


export default function Modal({ type, visible, switchVisible }){
   
   if ( type === 'select' ) return <Select visible={ visible } switchState = { switchVisible }/>
   else if ( type === 'book' ) return <Book visible={ visible } switchState = { switchVisible }/>
   else if ( type === 'shortlet' ) return <Shortlet visible={ visible } switchState = { switchVisible }/>
   else if ( type === 'info' ) return <Info visible={ visible } switchState = { switchVisible }/>
   else if ( type === 'create' ) return <Create switchState = { switchVisible }/>
   else return <></>
}