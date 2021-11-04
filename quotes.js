//
const quoteTag = document.querySelector("h1")
const randomTag = document.querySelector("footer img")

const data = [
            { 
                quote:  "Good deisgn is honest",
                author : "Socrate"
            },
                
            {
                quote: "is easier  to ask forgiveness than it is to get permission ",
                author : "Undeifined" 
            },
            {
                quote: "blablabla",
                auhtor : "unknown"
            },
        ]

        
const getQuote = function() {
    // get a random number
    const randomNumber = Math.floor(Math.random() * data.length)

    // get a random quote 
    const randomQuote = data[randomNumber]

    //get a random quote and put it in the site
    quoteTag.innerHTML = randomQuote
    }


//run getquote on page load
getQuote()


// run getQuote funtcion on click of random image
randomTag.addEventListener("click", function(){
    getQuote()
})