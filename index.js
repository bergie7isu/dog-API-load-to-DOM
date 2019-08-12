function logResults(jsonResponse) {
    $('.dog-pictures').empty();
    for (i = 0; i < jsonResponse.message.length; i++) {
        console.log(jsonResponse.message[i]);
        $('.dog-pictures').append(`<img src="${jsonResponse.message[i]}" class="dog-picture">`);
    }
    $('.dog-pictures').removeClass('hidden');
}

function getDogPictures(numberOfDogs) {
    let fetchUrl = "https://dog.ceo/api/breeds/image/random/" + numberOfDogs;
    fetch(fetchUrl)
        .then(response => response.json())
        .then(jsonResponse => logResults(jsonResponse));
}

function howManyPictures() {
    let numberOfDogs = $('#number-of-dogs').val();
    getDogPictures(numberOfDogs);
}
function watchForSubmit() {
    $('form').submit(function(event) {
        event.preventDefault();
        howManyPictures();
    })
}

$(watchForSubmit)