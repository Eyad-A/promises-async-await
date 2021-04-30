let favNumber = 8;
let baseURL = "http://numbersapi.com";

// Make a request to the Numbers API (http://numbersapi.com/) 
// to get a fact about your favorite number. (Make sure 
// you get back JSON by including the json query key, 
// specific to this API. Details.

async function getNumFact() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
}
getNumFact();


// Figure out how to get data on multiple numbers in a 
// single request. Make that request and when you get the 
// data back, put all of the number facts on the page.

let favNumbers = [3, 4, 12];
async function getMulti() {
    let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
    console.log(data);
}
getMulti();


// Use the API to get 4 facts on your favorite number. 
// Once you have them all, put them on the page. It’s 
// okay if some of the facts are repeats.

async function getFourFacts() {
    let facts = await Promise.all(
        Array.from({length: 4}, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
getFourFacts();