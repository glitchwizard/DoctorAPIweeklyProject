import { Doctor } from './doctor';
import { API } from './api'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function openSymptomSearch() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("p");
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
    let promise = API.returnSymptomResponse()
      promise.then(function (response) {
      console.log('response data');
      console.log(JSON.parse(response).data);
    });



    //const getElements = function (response) {
    //  console.log(response)
    //}

    //const printThing = function(response) {
    //  let dataNum = response.data.length;
    //  for (var symptomIndex = 0; symptomIndex < 10; symptomIndex++) {
    //      console.log(response.data[symptomIndex].name);
    //    $('input#myInput').append(`<p>${response.data[symptomIndex].name}</p>`);
    //    $('#testList').append(`<li>${response.data[symptomIndex].name}</li>`);
    //  }
    //}

  });
});
