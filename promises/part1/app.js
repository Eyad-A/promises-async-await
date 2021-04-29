let favNumber = 8;
let baseURL = "http://numbersapi.com";

// Make a request to the Numbers API (http://numbersapi.com/) 
// to get a fact about your favorite number. (Make sure you get 
// back JSON by including the json query key, specific to 
// this API. Details.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data);
})

// Figure out how to get data on multiple numbers 
// in a single request. Make that request and when you 
// get the data back, put all of the number facts on the page.
let favNumbers = [3, 4, 12];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
    console.log(data);
});

// Use the API to get 4 facts on your favorite number. 
// Once you have them all, put them on the page. 
// It’s okay if some of the facts are repeats.
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});