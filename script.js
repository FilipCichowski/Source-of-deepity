const quote = document.querySelector('#quote-field');
const author = document.querySelector('#author-field');
const generate = document.querySelector('#generate-button');
const share = document.querySelector('#share-button')

async function generateQuote(){
    try {
        quote.textContent = "Loading...";
        author.textContent = "";
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json()
        if (!response.ok) {
            throw Error(response.statusText);
        }
        quote.textContent = data.content;
        author.textContent = data.author;
        setTwitterButton(data.content, data.author);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch a new quote');
    }
}

function setTwitterButton(quote, author) {
    share.setAttribute("href", `https://twitter.com/share?text=${quote} - ${author}`);
}

generate.addEventListener("click", generateQuote);
generateQuote();

