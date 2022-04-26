var token = config.MY_API_TOKEN;
var key = config.SECRET_API_KEY; 

document.querySelector('button').addEventListener('click', getPic)



function getPic(){

    let yourDate = document.querySelector('input').value
    yourDate = 'date=' + yourDate

fetch(`https://api.nasa.gov/planetary/apod?${yourDate}&api_key=${key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.url
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('h2').innerText = data.title
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

