# DoctorAPIweeklyProject

#### By Charley McGowan

## Table of contents

**[Description](#description)**<br>
**[Resources](#resources)**<br>
**[Planning](#planning)**<br>
**[Installation Instructions](#setup-and-installation)**<br>
**[Known Bugs](#known-bugs)**<br>
**[Support](#support-and-contact-details)**<br>
**[Technologies Used](#technologies-used)**<br>
**[License](#license)**<br>

## Description


## Setup and Installation
Clone the code from [GitHub](https://github.com/glitchwizard/DoctorAPIweeklyProject).

## Resources
Initial template cloned from from [Scotts GitHub](https://github.com/skillitzimberg/Template_JS).

## Planning

1. Configuration/dependencies
  * "devDependencies":
	-"babel-core": "^6.26.0",
	-"babel-loader": "^7.1.3",
	-"babel-preset-es2015": "^6.24.1",
	-"clean-webpack-plugin": "^0.1.18",
	-"css-loader": "^0.28.10",
	-"dotenv-webpack": "^1.6.0",
	-"eslint": "^4.18.2",
	-"eslint-loader": "^2.0.0",
	-"html-webpack-plugin": "^3.0.6",
	-"jasmine": "^3.1.0",
	-"jasmine-core": "^2.99.0",
	-"karma": "^2.0.0",
	-"karma-chrome-launcher": "^2.2.0",
	-"karma-cli": "^1.0.1",
	-"karma-jasmine": "^1.1.1",
	-"karma-jasmine-html-reporter": "^0.2.2",
	-"karma-jquery": "^0.2.2",
	-"karma-sourcemap-loader": "^0.3.7",
	-"karma-webpack": "^2.0.13",
	-"style-loader": "^0.20.2",
	-"uglifyjs-webpack-plugin": "^1.2.2",
	-"webpack": "^4.0.1",
	-"webpack-cli": "^3.1.2",
	-"webpack-dev-server": "^3.1.14"
  
  * "dependencies": {
    -"bootstrap": "^4.2.1",
    -"jquery": "^3.3.1",
    -"popper.js": "^1.14.6"
  }

2. Specifications:
	* A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query. 
	* A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
	* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
	* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
	* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

3. Integration
	- Index.html

4. UX/UI
  * bootstrap

5. Polish
  * TBD

## Known Bugs

## Support and contact details
Charley McGowan

## Technologies Used

HTML, CSS, Json, dotnet, webpack, karma jasmine, javascript

### License

Licensed under the MIT license.

Copyright (c) 2019 ** Charley McGowan **
