let user_prime = {
   name : 'Hillary Joash',
   followers : [
      {
         name: 'otonye edwin',
         bio: 'transcendence is true freedom'
      },
      {
         name: 'alabo edwin',
         bio: 'the great outdoors is where life happens'
      },
      {
         name: 'iduate edwin',
         bio: 'look left before you cross the road'
      }        
   ]

}

export default function handler (request, response){
   try {
      console.log(request.body)
      response.status(200).json(user_prime)
   } catch (error) {
      response.status(500).json(error)  
   }
}