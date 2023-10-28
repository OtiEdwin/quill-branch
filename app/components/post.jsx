'use client'

import React, { useState } from 'react'
import Post from './getposts'
import Modal from './modal'
import { faListSquares } from '@fortawesome/free-solid-svg-icons'

// const Layoutmod = ({ children, visible, setVisible }) => (
//    <>
//       { children.map((child, index) =>( <child.type key = { index } visible={ visible } switchState = { setVisible } /> )) }
//    </>
// )

export default function Posts({ data }) {
   let initialState = {
      select : false,
      book : false,
      shortlet : false,
      info : false,
   }

   let [ visible, setVisible ] = useState( initialState )

   const switchVisible = (index) => {
      console.log( 'modal before', visible )
      setVisible(( prev ) => ({
         ...prev,
         [index] : ! prev[ index ]
      }))   
      console.log( 'modal after', visible )
   };



   return(
      <div className="post-panel flex flex-col justify-start w-6/12 mx-6 mt-6 border-l border-gray-300 px-8">
         {
            data.map( post => <Post key={post.key} postData={ post }/> )
         }

         <Modal switchVisible = { switchVisible } type = 'create' />
         <Modal visible={ visible['select'] } switchVisible = { switchVisible } type = 'select' />
         <Modal visible={ visible['book'] } switchVisible = { switchVisible } type = 'book' />
         <Modal visible={ visible['shortlet'] } switchVisible = { switchVisible } type = 'shortlet' />
         <Modal visible={ visible['info'] } switchVisible = { switchVisible } type = 'info' />

      </div>      
   )
}