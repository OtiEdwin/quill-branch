const user_prime = {
   name : 'Hillary Joash',
}

export default function handler (request, response){
   try {
      response.status(200).json(user_prime)
   } catch (error) {
      response.status(500).json(error)  
   }
}