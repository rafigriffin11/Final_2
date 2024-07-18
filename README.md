# Final_2

This repository contains automated test cases for the website “https://thinking-tester-contact-list.herokuapp.com/”.

### Table of Contents

Introduction

Features

Installation

Usage

Folder Structure

Contributing

License


### Introduction
Provide a brief introduction to the project. Explain its purpose, goals, and any other relevant information.
Part two of this project was curated in order to automate the test cases created in part one. The test cases that were able to be automated include all the API, UI, and security tests. The non-functional tests were not able to be automated, for the reason that jmeter requires specific user input to test for varying traffic loads.

### Features

Core Functionality: Describe the primary purpose or main functionality of the project. This could be a brief overview of what problem the project solves or what it enables users to do.

-This project aims to run various tests on the contact list for the herkoapp site. The automated tests are ran to ensure functionality and ease of use for the user. Other tests have been orchestrated to ensure API's are reliable and preforming as expected.

-Javascript is the language used for this project, and the majority of the tests have been ran through cypress. The e2e.yml file in the .github/workflows folder contains the code to run the cypress tests through the github UI. additionally, it contains the steps to setup node.js, install dependencies, and install cypress.

-For the tests that cannot be automated, jmeter has been utilized to test for varying loads of user traffic.

-In order to test for encryption and overall site security, an OWASP ZAP baseline scan has been run through GitHub.




### Installation
To get started with this project, follow these steps:

#### Clone the repository:

bash

Copy code: git clone https://github.com/rafigriffin11/Final_2.git

cd Final_2

#### Install dependencies:

Copy code: npm install

This command will install all required dependencies specified in package.json.

### Usage
Provide instructions on how to use the project. Include any necessary steps, commands, or configurations.

For example, if it's a web application, you might include:

Start the application:

sql
Copy code
npm start
This command will start the application and it can be accessed at http://localhost:3000.

### Folder Structure
Describe the structure of the repository, particularly if it's not straightforward. Provide an overview of important directories and files.

css
Copy code
├── cypress/
│   ├── e2e/
│   │   ├── API_tests/
│   │   ├── ...
├── src/
│   ├── components/
│   ├── styles/
│   ├── ...
├── README.md
├── package.json
└── ...
cypress/: Contains Cypress tests.
src/: Contains source code for the application.
README.md: This file, containing information about the project.
package.json: Configuration file for npm with dependencies and scripts.
Contributing
If you want to contribute to this project and make it better, your help is very welcome. Here's how you can contribute:

Fork the repository.
Make your changes.
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin my-new-feature).
Create a new Pull Request.


### License
This project is licensed under the [License Name] License - see the LICENSE file for details.
