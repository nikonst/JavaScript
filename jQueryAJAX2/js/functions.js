function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(() => {
    $('#btnClear').click(clear)
})

function clear() {
    $('#numberOfCountries').html("")
    $("#content").html("")
}

function getData(countryCode) {
    $.ajax({
        type: 'GET',
        url: "https://restcountries.eu/rest/v2/lang/" + countryCode,

        success: function (data) {
            console.log('success', data);
            let htmlStr = ""
            data.forEach((el) => {
                console.log("Element", el.name)
                htmlStr += '<p><b>' + el.name + '</b> / '
                    + el.capital + ' / '
                    + numberWithCommas(el.population) + ' / '
                    + el.region + ' </p> '
                    + '<img src="' + el.flag + '"></img>' +
                    '<hr>'
            })

            let numberOfCountries = data.length
            console.log()

            $("#content").html(htmlStr)

            $('#numberOfCountries').html(numberOfCountries + " Countries")
        },
        error: function () {
            alert('Error!');
        }
    });
}