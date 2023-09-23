'use client'

import React, { useState, useCallback } from 'react'
import Book from './bits/book'
import Shortlet from './bits/shortlet'
import Select from './bits/select'
import Info from './bits/info'
import Create from './bits/create'

export default function Modal({ type, content }){
   const initialState = [ 1, 1, 1, 0 ]
   const [visible, setVisible] = useState( initialState )

   const close = async (index) => {
      const tempArray = [ ...visible ]
      let changeIndex = !tempArray[index]
      tempArray[index] = changeIndex

      console.log('before', tempArray, visible)
      setVisible( tempArray );
      console.log('after', tempArray, visible)
   };

   if ( type === 'select' ) return <Select close = { close } visible = { visible[0] } />
   else if ( type === 'test' ) return <div className='text-5xl text-red-500 '>{ visible.toString() }</div>
   else if ( type === 'book' ) return <Book close = { close } visible = { visible[1] } />
   else if ( type === 'shortlet' ) return <Shortlet close = { close } visible = { visible[2] } />
   else if ( type === 'info' ) return <Info close = { close } visible = { visible[3] } />

   else if ( type === 'create' ) return <Create close = { close } />
   // else return <></>
}