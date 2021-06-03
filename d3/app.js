//console.log(d3)
const someData = [
    { id: 1, value: 10, country: "USA" },
    { id: 2, value: 20, country: "Italy" },
    { id: 3, value: 30, country: "Spain" },
]
console.log(someData)
d3.select('div')
    .style('border', '1px solid red')
    .selectAll('p')
    .data(someData)
    .enter()
    .append('p')
    .text(dta => dta.country)

const container = d3.select('.container')
    //.classed('container', true)
    .style('border', '1px solid navy')

container.selectAll('.bar')
    .data(someData)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', data => data.value * 15 + 'px')