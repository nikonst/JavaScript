require('./../css/style.css')
const people = require('./../data/people.js')
const $ = require('jquery')

$.each(people, (key, value) => {
    $('body').append('<p>' + value.name + '</p>')
})

import React from 'react'
import { render } from 'react-dom'
//import icon from './../imgs/icom.png'

const Greeting = () => {
    return (
        <div>
            <h2>Hello from React</h2>
            <img src={require('./../imgs/webpack4.jpg')} alt="Webpack" />
        </div>
    )
}

render(
    <Greeting />,
    document.getElementById('react-target')
)