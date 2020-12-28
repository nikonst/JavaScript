function buildHtmlTable(data) {
    console.log(data)
    let htmlStr = "<table>"
    for (let i = 0; i < data.length; i++) {
        htmlStr += "<tr><td>" + data[i].id + "</td>" +
            "<td>" + data[i].name + "</td>" +
            "<td>" + data[i].sirname + "</td>" +
            "<td>" + data[i].email + "</td></tr>"
    }
    htmlStr = htmlStr + "</table>"
    return htmlStr
}

let data = ""
fetch('data/data.json')
    .then(response => response.json())
    .then(jsonData => data = jsonData)
    .then(data => document.getElementById("dataTable").innerHTML = buildHtmlTable(data))
    .catch(err => console.log(err))