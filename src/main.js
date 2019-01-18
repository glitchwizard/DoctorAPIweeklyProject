import { Doctor } from './doctor';
import { API } from './api'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function openSymptomSearch() {

  document.getElementById("myDropdown").classList.toggle("show");

  getSymptomAPIresult();
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

function returnDoctorFromQuery(query) {
  let jsonDocResponse;
  let promise = API.returnDoctorResponse(query);
  promise.then(function (response) {
    jsonDocResponse = JSON.parse(response);
    $('#doctorResult').text('');
    for (var doctorIndex = 0; doctorIndex <= jsonDocResponse.data.length-1; doctorIndex++) {
      $('#doctorResult').append(`<div class=docSearchResult">
          <p class='doctorSearchResult' id='${jsonDocResponse.data[doctorIndex].uid}'>
          <img src=${jsonDocResponse.data[doctorIndex].profile.image_url}>
          ${jsonDocResponse.data[doctorIndex].profile.first_name} ${jsonDocResponse.data[doctorIndex].profile.last_name} Practice: ${jsonDocResponse.data[doctorIndex].practices[0].name}</p>`);
      if (jsonDocResponse.data[doctorIndex].practices[0].website != undefined) {
        $('#doctorResult').append(`<p> Website: <a href="${jsonDocResponse.data[doctorIndex].practices[0].website}">${jsonDocResponse.data[doctorIndex].practices[0].website}</a></p>`)
      }
      $('#doctorResult').append(`</div>`)
    }
  });
}

function getSymptomAPIresult() {
  let jsonResponse;
  let promise = API.returnSymptomResponse()
  promise.then(function (response) {
    jsonResponse = JSON.parse(response);
    $('#searchList').text('');
    let dataNum = jsonResponse.data.length;
    for (var symptomIndex = 0; symptomIndex < 10; symptomIndex++) {
      $('#searchList').append(`<p class='symptomSearchResult' id='${jsonResponse.data[symptomIndex].name}'>${jsonResponse.data[symptomIndex].name}</p>`);
    }
  });
}

$(document).ready(function () {


  $('#triggerAPI').click(function (event) {
    getSymptomAPIresult();
  });

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
    Doctor.returnDoctorFromQuery(queryInput);
  })

  $('#doctorSearchButton').click(function () {
    let queryInput = $('#mySymptomInput').val();
    returnDoctorFromQuery(queryInput);
  })

  $('#mySymptomInput').on('keypress', function (e) {
    if (e.which == 13) {
      let queryInput = $('#mySymptomInput').val();
      returnDoctorFromQuery(queryInput);
    }
  });
});
