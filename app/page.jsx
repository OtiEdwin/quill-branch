import Bio from './components/bio'
import Posts from './components/post'

async function get(api){
  let url = `http://localhost:3000/api/${api}`
  let response = await fetch(url)
  let data = await response.json()
  console.log(data);

  return data
}


export default async function Home() {
  let postData = await get('getposts')
  let bioData = await get('biodata')

  return (
    <section className = 'flex flex-row justify-center w-11/12 m-auto mt-0'>
      <Bio data = { bioData } />
      <Posts data = { postData } />
    </section>
  )
}



