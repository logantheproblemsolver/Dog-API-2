'use strict';


function getImage(number) {
        fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
            .then(response => response.json()) 
            .then(responseJson => 
                displayResults(responseJson))
            .catch(error => alert('Please check your internet or the server might be down.'));
    }




function displayResults(responseJson) {
    let number = $('.inputs').val();
    if (number > 50) {
        $('.results').append(`<p> The max number allowed is 50, please choose a lower number</p>`)
    } else if (number < 1) {
        $('.results').append(`<p> The lowest you can go is 1, please choose a number higher</p>`)
    } 
    else {
    $('.results').append(`<h2>Look at this dog!</h2>`)
    responseJson.message.forEach( dogs => {
    $('.results').append(`
    <img src="${dogs}" alt="Random Doggo!" class="img-results">`) 
    });
    $('.results').removeClass('hidden');

}}

function pressSubmit() {
    $('.submit').on('click', function(s) {
        let number = $('.inputs').val();
        s.preventDefault(); 
        getImage(number);
        $('.results').empty();
    });
}



$(function() {
    console.log('App loaded! Waiting for you to hit submit!');
    pressSubmit();
});
