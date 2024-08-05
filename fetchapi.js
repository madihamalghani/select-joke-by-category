const jokeButton = document.getElementById('button');
const jokeText = document.getElementById('text');
jokeButton.addEventListener('click',()=>{
    let url='https://official-joke-api.appspot.com/';
    const selectedType = document.querySelector('input[name="jokeType"]:checked').value;
    if(selectedType==='general'){
        url+='jokes/general/random'
    }
    else if(selectedType==='programming'){
        url+='jokes/programming/random'
    }
    else if(selectedType==='knock-knock'){
        url+='jokes/knock-knock/random'
    }
    else {
        url+='jokes/random'
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        const joke = Array.isArray(data) ? data[0] : data;
        jokeText.innerText = `${joke.setup} - ${joke.punchline}`;
    })
    .catch(error => {
        jokeText.innerText = 'Oops! Something went wrong. Please try again.';
        console.error('Error fetching joke:', error);
  
    })
})

// jokeButton.addEventListener('click', () => {
//     fetch('https://official-joke-api.appspot.com/random_joke')
//         .then(response => response.json())
//         .then(data => {
//             jokeText.innerText = `${data.setup} - ${data.punchline}`;
//         })
//         .catch(error => {
//             jokeText.innerText = 'Oops! Something went wrong. Please try again.';
//             console.error('Error fetching joke:', error);
//         });
// });