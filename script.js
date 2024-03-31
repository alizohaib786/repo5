

// First Alert Button
document.getElementById('simpleAlert').onclick = function () {
    alert("Welcome to the website")
}

// Print My Name Button
function printMyName() {
    let myName = document.getElementById('inputText').value;
    if (myName === "") {
        alert("Please enter you name")
        return;
    }
    document.getElementById('output').innerHTML = myName;
}

// Global Variable
let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Samundri', 'Kashmir', 'Sheikupura']

// Print All Cities
document.getElementById('allCities').onclick = function () {
    document.getElementById('output').innerHTML = '';
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById('output').innerHTML += num + ') ' + cities[i] + '<br>';
    }
}


// Add cities into the list
function addYourCity() {

    let city = document.getElementById('inputText').value;
    if (!city) {
        alert("Please enter your city");
        return;
    }

    cities.push(city);
    document.getElementById("output").innerHTML = '<span style="color: green; font-size: 20px;">"' + city + "'</span> has been successfully added into the list."

}
// Generate a table 
function tableGenerator() {
    let number = document.getElementById('inputText').value;
    if (!number) {
        alert('Please enter a number')
    }
    let limit = +prompt('Give a number')
    document.getElementById('output').innerHTML = "";
    for (let index = 1; index <= limit; index++) {
        document.getElementById('output').innerHTML += number + " * " + index + " = " + number * index + "<br>";
    }
}

// Clear Button
document.getElementById('clearBtn').onclick = function () {
    document.getElementById('output').innerHTML = "";
}