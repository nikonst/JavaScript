import joke from "./joke"
import './styles/main.scss'
import laugh from './imgs/laugh.png'
import generateJoke from './generateJoke'

const laughIcon = document.getElementById('laughImg')
laughIcon.src = laugh

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

console.log("hello")
console.log(joke())
console.log("hello 3")