import { API } from './api'

class Doctor {
    constructor() {
    }

    static returnDoctorFromQuery(query) {
        let promise = API.returnDoctorResponse(query);
        promise.then(function (response) {
            this.jsonDocResponse = JSON.parse(response);
            $('#doctorResult').text('');
            for (var doctorIndex = 0; doctorIndex < 10; doctorIndex++) {
                $('#doctorResult').append(`
          <p class='doctorSearchResult' id='${this.jsonDocResponse.data[doctorIndex].uid}'>
          <img src=${this.jsonDocResponse.data[doctorIndex].profile.image_url}>
          ${this.jsonDocResponse.data[doctorIndex].profile.first_name} ${this.jsonDocResponse.data[doctorIndex].profile.last_name} Practice:<a href=""> ${this.jsonDocResponse.data[doctorIndex].practices[0].name}
          </a>
          </p>`);
            }
        });
    }
}

Doctor.jsonDocResponse = "";

export { Doctor };
