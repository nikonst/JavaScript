require('./../css/style.css')
const people = require('./../data/people.js')
const $ = require('jquery')

$.each(people, (key, value) => {
    $('body').append('<h1>'+value.name+'</h1>')
})