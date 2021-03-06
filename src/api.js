class API {

  static returnSymptomResponse() {

    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${process.env.exports.apiKey}`;

      request.onload = function () {
        if (this.readyState == 4 && this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();

    });
  }

  static returnDoctorResponse(query) {

    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or-portland&user_location=45.5423657%2C-122.9345683&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

      request.onload = function () {
        if (this.readyState == 4 && this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();

    });
  }
}

export { API }
