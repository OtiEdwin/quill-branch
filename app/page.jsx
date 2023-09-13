import Image from 'next/image'
import Post from './components/post'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFeather, faPaperPlane, faShare, faThumbsUp, faPlus } from '@fortawesome/free-solid-svg-icons'

async function getPosts() {
  const { signal } = new AbortController()
  const response = await fetch('http://localhost:3000/api/getposts', { signal });
  const data = await response.json();
  console.log(data)
  return data
}

export default async function Home() {
  let posts = await getPosts()

  return (
    <section className = 'flex flex-row justify-center w-11/12 m-auto mt-0 relative'>
      <div className="bio flex flex-col sticky w-3/12 rounded-3xl mt-6 h-85">
        <div className="bg-white w-11/12 min-h-40 rounded-2xl flex flex-col justify-content mx-auto border border-gray-300 mb-3 overflow-hidden">
          <div className="cover-nd-profile relative h-3/6 w-full">
            <div className="cover-nd-profile h-4/6 w-full bg-red-50"></div>
            <div className="image w-12 h-12 rounded-full bg-red-500 flex justify-center overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/6">
              <FontAwesomeIcon className='text-sm text-white mx-3 my-auto' icon={faFeather} />
              {/* <Image alt='profile picture'/> */}
            </div>
          </div>

          <div className='h-4/6 flex flex-col justify-center'>
            <p className='text-red font-semibold text-center text-red-500'>Otonye Hillary Edwin</p>
            <p className='text-red text-xs font-semibold text-center text-black-700'>@otieddie</p>
            <p className='text-center text-xs'>Transcendence is true Freedom</p>
          </div>
        </div>

        <div className="relative bg-white w-11/12 h-full rounded-2xl flex flex-col justify-content mx-auto border border-gray-300 mb-3 overflow-hidden">
          <div className="cover flex h-8 w-full bg-red-50">
            <p className = "text-red-500 font-semibold ms-4 my-auto">Following</p>
          </div>

          <div className='h-4/6 flex flex-col justify-center'>
          </div>
        </div>
      </div>

      <div className="post-panel flex flex-col justify-start w-6/12 mx-6 mt-6 border-l border-gray-300 px-8">
        <div className="fixed bg-white hover:bg-red-500 text-red-500 hover:text-white flex justify-center rounded-full h-20 w-20 ml-auto bottom-8 right-8 shadow-gray-200 shadow-lg">
          <FontAwesomeIcon className='text-4xl mx-3 my-auto' icon={ faPlus } />
        </div>
        {
          posts.map((post) => { return <Post key={post.key} postData={ post }/> })
        }
      </div>

    </section>
  )
}



