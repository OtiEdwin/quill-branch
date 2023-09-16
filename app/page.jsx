'use client'

import React, { useState } from 'react'
import Bio from './components/bio'
import Posts from './components/getposts'
import Create from './components/create'
import Modal from './components/modal'

export default function Home() {
  const [postType, setPostType] = useState('book')
  const [select, setSelect] = useState('none')
  const [info, setInfo] = useState('none')

  function setSelectType(type){
    setSelect(type)
  }

  return (
    <section className = 'flex flex-row justify-center w-11/12 m-auto mt-0 relative'>
      <Bio />
      <Posts />
      <Create onClick = { () => setSelectType('info') } />

    {/* Modals in home Page */}

      <Modal type = { postType } />
      {/* <Modal type = { select } />
      <Modal type = { info } /> */}
    </section>
  )
}



