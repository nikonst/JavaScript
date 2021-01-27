require('./../css/style.css')
const people = require('./../data/people.js')
const $ = require('jquery')

$.each(people, (key, value) => {
    $('body').append('<h1>' + value.name + '</h1>')
})

import React from 'react'
import { render } from 'react-dom'

const Greeting = () => <h2>Hello from React</h2>

render(
    <Greeting/>,
    document.getElementById('react-target')   
)