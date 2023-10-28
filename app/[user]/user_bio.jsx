'use client'
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons'
import Cropper from "react-cropper";

export default function Bio ({ bioData }){
   const [image, setImage] = useState(""); 
   const [cropperVisible, setCropperVisible] = useState(false)
   const inputRef = useRef();

   const handleOnChange = (event) => {
     if (event.target.files && event.target.files.length > 0) {
         const reader = new FileReader();
         reader.readAsDataURL(event.target.files[0]);
         reader.onload = function (e) {
            onImageSelected(reader.result);
         };
     }
   }

   function shortHandNum (num) {
      return num > 999 ? num/1000 + "k" : num
   }

   // Invoked when new image file is selected
  const onImageSelected = (selectedImg) => {
      setImage(selectedImg);
      setCropperVisible(!cropperVisible);
   }


   // Handle Cancel Button Click
   const onCropCancel = () => {
      setCurrentPage("choose-img");
      setImage("");
   }

   function cropImage() {
      const croppedImage = inputRef.current.getCroppedCanvas().toDataURL();
      console.log(croppedImage);
   }
 
   return(
      <div className="bio flex flex-col sticky w-full rounded-3xl mt-6 me-auto">
         <div className="bg-white w-full rounded-2xl flex flex-col justify-content mx-auto border border-gray-300 mb-3 overflow-hidden">
            <div className="cover-nd-profile relative h-48 w-full">
               <div className="cover-nd-profile h-4/6 w-full bg-red-50 relative">
                  <input name="image" type="file" accept="image/*"  onChange={ handleOnChange } style={{ display: "none" }}/>

                  <label htmlFor="image" className='bg-white text-gray-400 hover:text-red-500 w-12 h-12 rounded-full flex justify-center ms-auto mt-auto absolute right-2 bottom-2'>
                     <FontAwesomeIcon className='my-auto text-lg' icon = { faPen }/>
                  </label>
               </div>
               <div className="absolute bottom-2 left-4 ">
                  <div className="image border-8 border-white w-36 h-36 text-white font-bold rounded-full bg-red-500 flex justify-center overflow-hidden relative">
                     <p className='flex m-auto'>
                        {
                           bioData[0].name.split(" ")[0][0] + bioData[0].name.split(" ")[1][0]
                        }                
                     </p>
                     <div className='bg-white text-gray-400 hover:text-red-500 w-8 h-8 rounded-full flex justify-center ms-auto mt-auto absolute right-2 bottom-2 z-20'>
                        <FontAwesomeIcon className='my-auto text-sm' icon = { faPlus }/>
                     </div>
                  </div>                  
               </div>

            </div>

            <div className='flex flex-col justify-start pb-4 ms-4'>
               <p className='text-red font-semibold text-left text-red-500 my-1 text-2xl'>{ bioData[0].name }</p>
               <p className='text-red text-xs font-semibold text-left text-black-700'>{ bioData[0].handle }</p>
               <p className='text-left text-xs'>{bioData[0].content}</p>
            </div>

            <hr className='h-1 w-10/12 mx-auto' />

            <div className="flex flex-row justify-evenly my-2">
               <div className='flex justify-center'>
                  <p className = "text-black text-center text-xs font-bold my-auto">{ shortHandNum( bioData[0].followers ) }</p>
                  <p className = "text-gray-300 text-center font-semibold my-auto mx-2">Followers</p>
               </div>
               <div className='flex justify-center'>
                  <p className = "text-black text-center text-xs font-bold my-auto">{ shortHandNum( bioData[0].following ) }</p>
                  <p className = "text-gray-300 text-center font-semibold my-auto mx-2">Following </p>
               </div>
            </div>

         </div>

         <div className={`container ${ cropperVisible? 'visible': 'invisible' } w-1/2 bg-white rounded-md border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl`}>
            <Cropper 
               src = { image }
               ref = { inputRef }
               initialAspectRatio = { 3 / 1 }
               crop = { cropImage }
               minCropBoxHeight = { 10 }
               minCropBoxWidth = { 10 }
               cropBoxResizable = { false }
            />
            <div>Done</div>
            <div>Change</div>
         </div>
      </div>
   )
}