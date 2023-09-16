import Post from './post'

async function getPosts() {
  const { signal } = new AbortController()
  const response = await fetch('http://localhost:3000/api/getposts', { signal });
  const data = await response.json();
  console.log(data)
  return data
}

export default async function Posts() {
  let posts = await getPosts()

  return (
    <div className="post-panel flex flex-col justify-start w-6/12 mx-6 mt-6 border-l border-gray-300 px-8">
      {
        posts.map((post) => { return <Post key={post.key} postData={ post }/> })
      }
    </div>
  )
}
 
 
 
 