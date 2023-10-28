import Bio from './user_bio'
import Posts from './user_posts'

async function get( api ){
  let url = `http://localhost:3000/api/${ api }`
  let response = await fetch( url )
  let data = await response.json()
  // console.log(data);
  return data
}

export default async function Home() {
  let postData = await get('getposts')
  let bioData = await get('biodata')  
  
  return (
    <section className = 'flex flex-col justify-center w-9/12 mx-auto mt-0 relative'>
      <Bio bioData = { bioData } />
      <Posts data = { postData } />
    </section>
  )
}