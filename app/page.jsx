import Image from 'next/image'
import Nav from './nav'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Nav />
      <section className = 'flex flex-row justify-between w-11/12 h-12/12 m-auto'>
        <div className="illustration flex flex-col justify-end relative bg-red-50 rounded-lg h-85 w-5/12">
          <Image className = '' alt = 'hero image' src = '/hero.png' width = {300} height = {300} />
          <div className = "bg-white border-2 py-2 px-4 text-sm text-start border-red-400 absolute shadow-xl rounded-2xl w-64 top-28 -right-14">
            The great outdoors is where life happens?
            <div className='flex flex-row w-full my-2'>
              <div className = "bg-red-400 w-1 h-1 rounded-full" ></div>  
              <div className = "bg-red-400 h-1 mx-1 w-11/12 rounded" ></div>
            </div>

          </div>
          <div className = "bg-white border-2 py-2 px-4 text-sm border-red-400 absolute shadow-xl rounded-2xl w-auto top-10 -left-10">
            Trancenedence is true freedom.
          </div>
        </div>
        <div className="description flex flex-col justify-center ms-16 w-6/12">
          <h1 className = "flex flex-row text-gray-700 text-5xl font-extrabold my-4">Feeling Inspired? <div className = "text-red-500"> Quill</div></h1>
          <p className='text-start'>A social media for Writers. Share your art with the world. Experience The world through your mind, Rewrite the universe with a Quill.</p>
          <button className='bg-red-500 hover:bg-red-600 py-2 px-16 text-white rounded my-4 font-bold w-fit'>Sign In</button>
        </div>        
      </section>
    </main>
  )
}
