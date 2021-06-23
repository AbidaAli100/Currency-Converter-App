

function convert() {
    let rupees = parseInt(document.querySelector('input').value);

    if (document.querySelector('#dollar').value == "D") {
        let dollars = Math.round(rupees / 156.53);
        console.log(dollars);
        document.querySelector('span').innerHTML = "The amount in Dollar is " + dollars;
    }
    else if (document.querySelector('#saudiRiyal').value == "R") {
        let riyals = Math.round(rupees / 41.83);
        console.log(riyals);
        document.querySelector('span').innerHTML = "The amount in Saudi-Riyal is " + riyals;
    }
    else if (document.querySelector('#pound').value == "P") {
        let pounds = Math.round(rupees / 216.63);
        console.log(pounds);
        document.querySelector('span').innerHTML = "The amount in Pounds is " + pounds;
    }

}

