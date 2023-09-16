
export default function handler (request, response){
   try {
      // TODO - increment the likes colomn of the author

      // TODO - add the post.id to the liked colomn
      
      response.status(200).json( { result: "liked post" } )
   } catch (error) {
      response.status(500).json(error)  
   }
}