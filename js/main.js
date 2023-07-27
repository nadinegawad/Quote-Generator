var quoteList = [
    { quote: "“Be yourself; everyone else is already taken.”", author: "― Oscar Wilde" },
    {
        quote: `“Two things are infinite: the universe and human 
    stupidity; and I'm not sure about the universe.”`, author: "― Albert Einstein"
    },
    { quote: `“So many books, so little time.”`, author: "― Frank Zappa" },
    {
        quote: `“You know you're in love when you can't fall asleep because
     reality is finally better than your dreams.”`, author: "― Dr. Seuss"
    },
    { quote: `“You only live once, but if you do it right, once is enough.”`, author: "― Mae West" },
    {
        quote: `“If you want to know what a man's like, take a good look
     at how he treats his inferiors, not his equals.”`, author: "― J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    { quote: `If you tell the truth, you don't have to remember anything.”`, author: "― Mark Twain" },
    {
        quote: `“Live as if you were to die tomorrow. 
    Learn as if you were to live forever.”`, author: "― Mahatma Gandhi"
    },
    {
        quote: `“I've learned that people will forget what you said, people will forget what you did, but people
     will never forget how you made them feel.”`, author: "― Maya Angelou"
    }
];


var lastNum = 0;

function getQuote() {
    var randomNum = Math.floor(Math.random() * quoteList.length);
    if (randomNum != lastNum) {
        document.getElementById("quote").innerHTML = quoteList[randomNum].quote;
        document.getElementById("author").innerHTML = quoteList[randomNum].author;
        lastNum = randomNum;
    } else {
        getQuote();
    }

}







