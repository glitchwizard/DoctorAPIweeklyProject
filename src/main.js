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
  console.log("filter working");
  var input, filter, a, i, div, txtValue;
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
  let jsonResponse;
  let jsonDocResponse;

  $('#triggerAPI').click(function (event) {
    let promise = API.returnSymptomResponse()
    promise.then(function (response) {
      jsonResponse = JSON.parse(response);
      let dataNum = jsonResponse.data.length;
      for (var symptomIndex = 0; symptomIndex < 10; symptomIndex++) {
        $('#searchList').append(`<p class='symptomSearchResult' id='${jsonResponse.data[symptomIndex].name}'>${jsonResponse.data[symptomIndex].name}</p>`);
      }
    });

  });

  //let promise = API.returnSymptomResponse()
  //promise.then(function (response) {
  //  jsonResponse = JSON.parse(response);
  //  let dataNum = jsonResponse.data.length;
  //  for (var symptomIndex = 0; symptomIndex < 10; symptomIndex++) {
  //    $('#searchList').append(`<p class='symptomSearchResult' id='${jsonResponse.data[symptomIndex].uid}'>${jsonResponse.data[symptomIndex].name}</p>`);
  //  }
  //});

  $('#myInput').keyup(function () {
    filterFunction();
  });

  $("#searchList").click(function () {
    console.log($('.symptomSearchResult').attr('id'));
  });

  $('#symptomSearchButton').click(function () {
    openSymptomSearch();
  });

  $('#doctorSearchButton').click(function () {
    let queryInput = $('#mySymptomInput').val();
    let promise = API.returnDoctorResponse(queryInput);
    promise.then(function (response) {
      jsonDocResponse = JSON.parse(response);
      $('#doctorResult').text('');
      console.log('click caught');
      for (var doctorIndex = 0; doctorIndex < 10; doctorIndex++) {
        $('#doctorResult').append(`<p class='doctorSearchResult' id='${jsonDocResponse.data[doctorIndex].uid}'>${jsonDocResponse.data[doctorIndex].profile.first_name} ${jsonDocResponse.data[doctorIndex].profile.last_name} </p>`);
      }
    });
  })
});


