const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQuotebtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")


let apiQuotes = [];

// show loading 
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
    //hide loading 
function complete () {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//show New Quote 
function newQuote (){
loading();    
// pick a random Quote
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
// check if Author field is blank and replace it with "Unwown"
if(!quote.author) {
    authorText.textContent = "Unknown"
}else {
    authorText.textContent = quote.author
}
// check quote lenght to determine the styling 
if (quote.text.length > 50 ) {
    quoteText.classList.add("long-quote");
} else {
    quoteText.classList.remove("long-quote");
}
quoteText.textContent = quote.text;
complete()
}



// Get Quotes from API 
async function getQuotes (){
    loading();
   const apiUrl = "https://type.fit/api/quotes";
   try {
   const respons = await fetch(apiUrl);
   apiQuotes = await respons.json()
   newQuote();
   } catch (error) {
       // Catch Errors Here 

   }
}

// Tweet Quote 
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank")
}

//Event Listeners 
newQuotebtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// on Load 
getQuotes();
