'use client'
import Post from '../components/getposts'

export default function Posts({ data }) {

   return(
      <div className="post-panel flex flex-col justify-start w-9/12 mx-start mt-6 border-l border-gray-300 px-8">
         {
            data.map((post) => { return <Post key={post.key} postData={ post }/> })
         }
      </div>      
   )
}