'use client'
import React, { useState } from 'react'
import Post from './getposts'
import Create from './create'
import Modal from './modal'

// async function like(post){
//    try{
//       const response = await fetch(
//          'http://localhost:3000/api/like',
//          {
//             method: "post",
//             headers: {
//                "Content-Type": "application/json"
//             },
//             body: JSON.stringify(post.id)
//          }
//          )
//       const data = response.json()
//    } catch(error) {
//       console.log(error)
//    } finally {
//       post.likes ++
//    }
// }

export default function Posts({ data }) {
   const [ modalType, setModalType ] = useState('info')

   function modSet(){
      console.log('select from post type')
      setModalType('book')
   }

   return(
      <div className="post-panel flex flex-col justify-start w-6/12 mx-6 mt-6 border-l border-gray-300 px-8">
         {
            data.map((post) => { return <Post key={post.key} postData={ post }/> })
         }
      <Create onClick = { modSet } />
      <Modal type = { modalType } />
      {/* <Modal type = 'select' /> */}
      </div>      
   )
}