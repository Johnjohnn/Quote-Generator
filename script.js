let apiQuotes = [];

//show New Quote 
function newQuote (){

}



// Get Quotes from API 
async function getQuotes (){
   const apiUrl = "https://type.fit/api/quotes";
   try {
   const respons = await fetch(apiUrl);
   apiQuotes = await respons.json()
   console.log(apiQuotes)
   } catch (error) {
       // Catch Errors Here 

   }
}



// on Load 
getQuotes();