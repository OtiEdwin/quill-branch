let bioData = [
   {
      name: "Olwagbade David",
      handle:"@Boludavids17",
      content: "transcendence is true freedom",
      followers: 1000,
      following: 10,
      comments: 5,
   }
]

export default function handler (request, response){
   try {
      console.log(request.body)
      // TODO - get Biodata using te login session of user or something LOL!

      response.status(200).json( bioData )
   } catch (error) {
      response.status(500).json(error)  
   }
}