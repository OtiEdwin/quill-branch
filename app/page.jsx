import Image from 'next/image'
import Nav from './nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Nav />
      <section className = 'flex flex-row justify-between w-11/12 h-12/12 m-auto relative'>
        <div className="illustration flex flex-col justify-end relative bg-red-50 h-85 w-5/12 border-2 border-red-500 rounded">
          <div className = 'absolute -z-10 h-full w-full -bottom-2.5 -left-2.5 bg-red-500 rounded'></div>
          <Image className = 'mx-auto drop-shadow' alt = 'hero image' src = '/hero-img.png' width = {400} height = {400}/>

          <div className = "bg-white border-2 py-2 px-4 text-sm text-start border-red-400 absolute shadow-xl7 rounded-2xl w-66 top-28 -right-14">
            <div className='flex flex-row justify-between'>
              <div className=" flex w-9 h-9 rounded-full bg-red-500 me-2">
                <FontAwesomeIcon className='text-sm text-white mx-3 my-auto' icon={faFeather} />
              </div>
              <div className="m-auto">
                The great outdoors is where life happens.            
              </div>
            </div>

            <div className='flex flex-row w-full my-2'>
              <div className = "bg-red-400 w-1 h-1 rounded-full" ></div>  
              <div className = "bg-red-400 h-1 mx-1 w-11/12 rounded" ></div>
            </div>
          </div>

          <div className = "flex flex-row justify-between bg-white border-2 py-2 px-4 text-sm border-red-400 absolute shadow-xl rounded-2xl w-auto top-10 -left-10">
            <div className=" flex w-9 h-9 rounded-full bg-red-500 me-2">
              <FontAwesomeIcon className='text-sm text-white m-auto' icon={faFeather} />
            </div>
            <div className="m-auto">
              Trancenedence is true freedom.
            </div>
          </div>
        </div>

        <div className="ring-24 ring-red-300"></div>


        <div className="description flex flex-col justify-center ms-16 w-6/12">
          <FontAwesomeIcon className='text-4xl text-red-500' icon={faFeather} />
          <h1 className = "flex flex-row text-gray-700 text-5xl font-extrabold my-4">Feeling Inspired? <div className = "text-red-500"> Quill</div></h1>
          <p className='text-start'>A social media for Writers. Share your art with the world. Experience The world through your mind, Rewrite the universe with a Quill.</p>
          <button className='bg-red-500 hover:bg-red-600 py-2 px-16 text-white rounded my-4 font-bold w-fit'>Sign In</button>
        </div>        
      </section>
    </main>
  )
}
