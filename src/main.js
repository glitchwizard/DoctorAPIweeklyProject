import { Doctor } from './doctor';
import { API } from './api'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function returnDoctorFromSymptomQuery(query) {
  let jsonDocResponse;
  let promise = API.returnDoctorResponse(query);
  promise.then(function (response) {
    jsonDocResponse = JSON.parse(response);
    $('#doctorResult').text('');

    for (var doctorIndex = 0; doctorIndex <= jsonDocResponse.data.length - 1; doctorIndex++) {
      let currentDoctor = jsonDocResponse.data[doctorIndex];
      $('#doctorResult').append(`<hr /><div class=docSearchResult">`);

      $('#doctorResult').append(`<p class='doctorSearchResult' id='${currentDoctor.uid}'><h3>${currentDoctor.profile.first_name} ${currentDoctor.profile.last_name}</h3></p><p><strong>Practice:</strong> ${currentDoctor.practices[0].name}</p><p><strong>Address:</strong> ${currentDoctor.practices[0].visit_address.street} ${currentDoctor.practices[0].visit_address.street2}</p><p>${currentDoctor.practices[0].visit_address.city} ${currentDoctor.practices[0].visit_address.state},${currentDoctor.practices[0].visit_address.zip}<p>`);

      if (currentDoctor.practices[0].website != undefined) {
        $('#doctorResult').append(`<p> Website: <a href="${currentDoctor.practices[0].website}">${currentDoctor.practices[0].website}</a></p>`)
      }

      for (var currentPhoneIndex = 0; currentPhoneIndex < currentDoctor.practices[0].phones.length; currentPhoneIndex++) {
        if (currentDoctor.practices[0].phones[currentPhoneIndex].type == 'landline') {
          $('#doctorResult').append(`<p><strong>Phone Number:</strong>${currentDoctor.practices[0].phones[currentPhoneIndex].number}</p>`)
        }
      }

      if (currentDoctor.practices[0].accepts_new_patients == true) {
        $('#doctorResult').append(`<p><strong>Accepting new patients: </strong>Yes</p>`);
      } else if (currentDoctor.practices[0].accepts_new_patients == false) {
        $('#doctorResult').append(`<p><strong>Accepting new patients: </strong>No</p>`);
      } else {
        $('#doctorResult').append(`<p><strong>Accepting new patients: </strong>Unknown</p>`)
      }


      $('#doctorResult').append(`</div>`)
    }
  });
}

$(document).ready(function () {

  $('#doctorSearchButton').click(function () {
    let queryInput = $('#mySymptomInput').val();
    Doctor.returnDoctorFromSymptomQuery(queryInput);
  })

  $('#doctorSearchButton').click(function () {
    let queryInput = $('#mySymptomInput').val();
    returnDoctorFromSymptomQuery(queryInput);
  })

  $('#mySymptomInput').on('keypress', function (e) {
    if (e.which == 13) {
      let queryInput = $('#mySymptomInput').val();
      returnDoctorFromSymptomQuery(queryInput);
    }
  });
});
