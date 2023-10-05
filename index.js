console.log(`hello world`)
let message = document.querySelector("#message")

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector("input").value
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputField
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement("button")
    deleteBtn.addEventListener("click", deleteMovie)
    deleteBtn.textContent = "x"
    movie.appendChild(deleteBtn)
    document.querySelector("ul").appendChild(movie)
    document.querySelector("input").value = ""
    message.textContent = "Movie Added"
    revealMessage()
}

function deleteMovie(event){
    let tempTitle = event.target.parentNode.childNodes[0].textContent
    event.target.parentElement.remove()
    message.textContent = `${tempTitle} was deleted`
    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")){
        message.textContent = `${event.target.textContent} watched`
    }
    else{
        message.textContent = `${event.target.textContent} not watched`
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove("hide")
    setTimeout(function(){message.classList.add("hide")}, 1000)
}

document.querySelector("form").addEventListener("submit", addMovie)
