

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faFeather, faPaperPlane, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  
  return (
    <section className = 'flex flex-col justify-center w-11/12 m-auto mt-0 relative'>
      <div className="bio flex flex-col sticky rounded-3xl mt-6">
        <div className="relative bg-white w-10/12 min-h-40 rounded-2xl flex flex-col justify-content mx-auto border border-gray-300 mb-3 overflow-hidden">
          <div className="cover h-2/6 w-full bg-red-50">

          </div>
          <div className="image w-12 h-12 rounded-full bg-red-500 flex justify-center overflow-hidden absolute top-8 left-1/2 -translate-x-1/2">
            <FontAwesomeIcon className='text-sm text-white mx-3 my-auto' icon={faFeather} />
            {/* <Image alt='profile picture'/> */}
          </div>
          <div className='h-4/6 flex flex-col justify-center'>
            <p className='text-red font-semibold text-center text-red-500'>Otonye Hillary Edwin</p>
            <p className='text-red text-xs font-semibold text-center text-black-700'>@otieddie</p>
            <p className='text-center text-xs'>Transcendence is true Freedom</p>
          </div>
        </div>

        <div className="relative bg-white w-10/12 h-full rounded-2xl flex flex-col justify-content mx-auto border border-gray-300 mb-3 overflow-hidden">
          <div className="cover flex h-8 w-full bg-red-50">
            <p className = "text-red-500 font-semibold ms-4 my-auto">Following</p>
          </div>

          <div className='h-4/6 flex flex-col justify-center'>
          </div>
        </div>
      </div>

      <div className="post-panel flex flex-col justify-center w-10/12 mx-auto mt-6 px-8">
        <div className = "posts-plain bg-white border p-4 text-sm text-start border-gray-300 rounded-2xl w-full mb-4">
          <div className='flex flex-row justify-start'>
            <div className=" flex w-10 h-10 rounded-full bg-red-500 me-2">
              <FontAwesomeIcon className='text-sm text-white mx-3 my-auto' icon={faFeather} />
            </div>
            <div className="my-auto mx-1 text-red-500 font-bold text-start">
              John Doe            
            </div>
          </div>

          <p className='content my-2'>
            This is the content of this post it is meant to be short and give a fee for how a quill post is to supposed be.
          </p>

          <div className='actons flex flex-row justify-end'>
            <div className='likes flex flex-col justify-center me-3'>
              <FontAwesomeIcon className='text-lg text-red-500 mx-3 my-auto' icon={faThumbsUp} />
              <div className='text-center text-xs font-bold text-gray-400'>{ 109 }</div>
            </div>
            <div className='views flex flex-col justify-center me-3'>
              <FontAwesomeIcon className='text-lg text-red-500 mx-3 my-auto' icon={faEye} />
              <div className='text-center text-xs font-bold text-gray-400'>{ 102 }k+</div>
            </div>
            <div className='share flex flex-col justify-center me-3'>
              <FontAwesomeIcon className='text-lg text-red-500 mx-3 my-auto' icon={faShare} />
              <div className='text-center text-xs font-bold text-gray-400'>{ 10 }</div>
            </div>

          </div>

          <div className='flex flex-row w-full my-2'>
            <div className = "bg-red-400 w-1 h-1 rounded-full" ></div>  
            <div className = "bg-red-400 h-1 mx-1 w-11/12 rounded" ></div>
          </div>
        </div>

        <div className = "post-snippet bg-white border p-4 text-sm text-start border-gray-300 rounded-2xl w-full mb-4">
          <div className='flex flex-row justify-start'>
            <div className=" flex w-10 h-10 rounded-full bg-red-500 me-2">
              <FontAwesomeIcon className='text-sm text-white mx-3 my-auto' icon={faFeather} />
            </div>
            <div className="my-auto mx-1 text-red-500 font-bold text-start">
              John Doe            
            </div>
          </div>

          <div className='snippet border-s-8 border-red-600 bg-red-50 text-red-600 p-3 my-2 rounded-md font-semibold'>
            <p>Snippet : {`"An empty glass of wine"`}</p>
          </div>

          <p className='content my-2'>
            I am forced to embrace my new found self, hail and hearty but with an empty void in my soul.
          </p>

          <div className='actons flex flex-row justify-end'>
            <div className='likes flex flex-col justify-center me-3'>
              <FontAwesomeIcon className='text-lg text-red-500 mx-3 my-auto' icon={faThumbsUp} />
              <div className='text-center text-xs font-bold text-gray-400'>{ 109 }</div>
            </div>
            <div className='views flex flex-col justify-center me-3'>
              <FontAwesomeIcon className='text-lg text-red-500 mx-3 my-auto' icon={faEye} />
              <div className='text-center text-xs font-bold text-gray-400'>{ 102 }k+</div>
            </div>
            <div className='share flex flex-col justify-center me-3'>
              <FontAwesomeIcon className='text-lg text-red-500 mx-3 my-auto' icon={faShare} />
              <div className='text-center text-xs font-bold text-gray-400'>{ 10 }</div>
            </div>

          </div>

          <div className='flex flex-row w-full my-2'>
            <div className = "bg-red-400 w-1 h-1 rounded-full" ></div>  
            <div className = "bg-red-400 h-1 mx-1 w-11/12 rounded" ></div>
          </div>
        </div>

        <div className = "posts-plain bg-white border p-4 text-sm text-start border-gray-300 rounded-2xl w-full mb-4">
          <div className='flex flex-row justify-start'>
            <div className=" flex w-10 h-10 rounded-full bg-red-500 me-2">
              <FontAwesomeIcon className='text-sm text-white mx-3 my-auto' icon={faFeather} />
            </div>
            <div className="my-auto mx-1 text-red-500 font-bold text-start">
              John Doe            
            </div>
          </div>

          <p className='content my-2'>
            This is the content of this post it is meant to be short and give a fee for how a quill post is to supposed be.
          </p>

          <div className='actons flex flex-row justify-end'>
            <div className='likes flex flex-col justify-center me-3'>
              <FontAwesomeIcon className='text-lg text-red-500 mx-3 my-auto' icon={faThumbsUp} />
              <div className='text-center text-xs font-bold text-gray-400'>{ 109 }</div>
            </div>
            <div className='views flex flex-col justify-center me-3'>
              <FontAwesomeIcon className='text-lg text-red-500 mx-3 my-auto' icon={faEye} />
              <div className='text-center text-xs font-bold text-gray-400'>{ 102 }k+</div>
            </div>
            <div className='share flex flex-col justify-center me-3'>
              <FontAwesomeIcon className='text-lg text-red-500 mx-3 my-auto' icon={faShare} />
              <div className='text-center text-xs font-bold text-gray-400'>{ 10 }</div>
            </div>

          </div>

          <div className='flex flex-row w-full my-2'>
            <div className = "bg-red-400 w-1 h-1 rounded-full" ></div>  
            <div className = "bg-red-400 h-1 mx-1 w-11/12 rounded" ></div>
          </div>
        </div>

        <div className = "posts-plain bg-white border p-4 text-sm text-start border-gray-300 rounded-2xl w-full mb-4">
          <div className='flex flex-row justify-start'>
            <div className=" flex w-10 h-10 rounded-full bg-red-500 me-2">
              <FontAwesomeIcon className='text-sm text-white mx-3 my-auto' icon={faFeather} />
            </div>
            <div className="my-auto mx-1 text-red-500 font-bold text-start">
              John Doe            
            </div>
          </div>

          <p className='content my-2'>
            This is the content of this post it is meant to be short and give a fee for how a quill post is to supposed be.
          </p>

          <div className='actons flex flex-row justify-end'>
            <div className='likes flex flex-col justify-center me-3'>
              <FontAwesomeIcon className='text-lg text-red-500 mx-3 my-auto' icon={faThumbsUp} />
              <div className='text-center text-xs font-bold text-gray-400'>{ 109 }</div>
            </div>
            <div className='views flex flex-col justify-center me-3'>
              <FontAwesomeIcon className='text-lg text-red-500 mx-3 my-auto' icon={faEye} />
              <div className='text-center text-xs font-bold text-gray-400'>{ 102 }k+</div>
            </div>
            <div className='share flex flex-col justify-center me-3'>
              <FontAwesomeIcon className='text-lg text-red-500 mx-3 my-auto' icon={faShare} />
              <div className='text-center text-xs font-bold text-gray-400'>{ 10 }</div>
            </div>

          </div>

          <div className='flex flex-row w-full my-2'>
            <div className = "bg-red-400 w-1 h-1 rounded-full" ></div>  
            <div className = "bg-red-400 h-1 mx-1 w-11/12 rounded" ></div>
          </div>
        </div>
      </div>
    </section>
  )
}