import Post from './getposts'
import Modal from './modal'

export default function Posts({ data }) {
   return(
      <div className="post-panel flex flex-col justify-start w-6/12 mx-6 mt-6 border-l border-gray-300 px-8">
         {
            data.map((post) => { return <Post key={post.key} postData={ post }/> })
         }
         <Modal type = 'create' />

         <Modal type = 'book' />
         <Modal type = 'shortlet' />
         <Modal type = 'select' />
         <Modal type = 'info' />
         <Modal type = 'test' />
      </div>      
   )
}