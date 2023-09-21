'use client'

import React, { UseState } from 'react'
import Book from './bits/book'
import Shortlet from './bits/shortlet'
import Select from './bits/select'
import Info from './bits/info'

export default function Modal({ type, content }){
   const [visible, setVisible] = UseState('visible')

   // const close = useCallback(() => {
   //    setVisible('invisible')
   // }, [setVisible]);

   if ( type === 'book' ) return <Book />
   else if ( type === 'shortlet' ) return <Shortlet />
   else if ( type === 'select' ) return <Select />
   else if ( type === 'info' ) return <Info />
   else return <></>
}