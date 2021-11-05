//
const quoteTag = document.querySelector("h1")
const authorTag = document.querySelector("p")
const randomTag = document.querySelector("footer img")

let data = []

// Load in the real data
fetch("quotes.json").then(function(response){
        return response.json()
    }).then(function (jsonData) {
        data = jsonData
        getQuote()
    })

        
const getQuote = function() {
    if(data.length > 0){

        // get a random number
        const randomNumber = Math.floor(Math.random() * data.length)

        // get a random quote 
        const randomQuote = data[randomNumber]

        //get a random quote and put it in the site
        quoteTag.innerHTML = randomQuote.quote
        authorTag.innerHTML = randomQuote.author
        }
    }

//run getquote on page load
getQuote()


// run getQuote funtcion on click of random image
randomTag.addEventListener("click", function(){
    getQuote()
})