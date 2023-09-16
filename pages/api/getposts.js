let posts = [
   {
      author: "Olwagbade David",
      key:1,
      type:"shortlet",
      content: "transcendence is true freedom",
      likes: 1000,
      shares: 10,
      comments: 5,
   },
   {
      author: "Edwin Hillary",
      key:2,
      type:"snippet",
      content: "and I am forced to embrace my new found self, hail and hearty but with an empty void in my soul",
      snippet: "an empty glass of wine",
      likes: 2500,
      shares: 10,
      comments: 5,
   },
   {
      author: "Royce Iduate",
      key:3,
      type:"shortlet",
      content: "transcendence is true freedom",
      likes: 10000,
      shares: 10,
      comments: 5,
   },
   {
      author: "Edwin Hillary",
      key:4,
      type:"shortlet",
      content: "and I am forced to embrace my new found self, hail and hearty but with an empty void in my soul",
      likes: 21000,
      shares: 10,
      comments: 5,
   },
   {
      author: "Frederick Edwin",
      key:5,
      type:"snippet",
      content: "and I am forced to embrace my new found self, hail and hearty but with an empty void in my soul",
      snippet: "an empty glass of wine",
      likes: 1500,
      shares: 10,
      comments: 5,
   },
]

export default function handler (request, response){
   try {
      console.log(request.body)
      console.log( posts )
      // TODO - get data using the Algorithm and feed into the response in place of "posts"

      response.status(200).json( posts )
   } catch (error) {
      response.status(500).json(error)  
   }
}