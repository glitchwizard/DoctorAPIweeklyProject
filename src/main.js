import { Doctor } from './doctor';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function symptomSearch() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('symptomInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("symptomList");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function symptomSearch() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function symptomFilterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

$(document).ready(function () {

    $('#triggerAPI').click(function (event) {

        let request = new XMLHttpRequest();
        const url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${process.env.exports.apiKey}`;

        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                getElements(response);
            }
        }
        request.open("GET", url, true);
        request.send();

        const getElements = function (response) {
            console.log(response);
        }
        
    });
});
