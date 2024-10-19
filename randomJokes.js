let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");

function fetchJoke() {
    let url = "https://apis.ccbp.in/jokes/random";
    let option = {
        method: "GET"
    }
    fetch(url, option)
        .then(
            function(response) {
                return (response.json());
            }
        )
        .then(
            function(jsonData) {
                console.log(jsonData);
                jokeText.textContent = jsonData.value;
            }
        )
}

jokeBtn.addEventListener("click", fetchJoke);
