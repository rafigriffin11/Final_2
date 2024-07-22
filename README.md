# Final_2 Project
Welcome to the Final_2 project repository. This project contains the necessary codebase and automated test cases for the website “https://thinking-tester-contact-list.herokuapp.com/”.

Part two of this project was curated in order to automate the test cases created in part one. The test cases that were able to be automated include all the API, UI, and security tests. The non-functional tests were not able to be automated, for the reason that jmeter requires specific user input to test for varying traffic loads.

The link to the github account where the tests are located: https://github.com/rafigriffin11/Final_2/tree/master/cypress/e2e

## Table of Contents
Prerequisites

Features

Installation

Running the Application

Running Cypress Tests

Contributing


### Prerequisites
Ensure you have the following installed:

Node.js (version 14.x or above)
npm (version 6.x or above)

### Features
-This project aims to run various tests on the contact list for the herkoapp site. The automated tests are ran to ensure functionality and ease of use for the user. Other tests have been orchestrated to ensure API's are reliable and preforming as expected.

-Javascript is the language used for this project, and the majority of the tests have been ran through cypress. The e2e.yml file in the .github/workflows folder contains the code to run the cypress tests through the github UI. additionally, it contains the steps to setup node.js, install dependencies, and install cypress.

-For the tests that cannot be automated, jmeter has been utilized to test for varying loads of user traffic.

-In order to test for encryption and overall site security, an OWASP ZAP baseline scan has been run through GitHub.

### Installation
Clone the repository:

bash
Copy code
git clone https://github.com/rafigriffin11/Final_2.git
cd Final_2
Install the dependencies:

bash
Copy code
npm install

### Running the Application
To start the application, use the following command:

bash
Copy code
npm start

### Running Cypress Tests
Cypress is used for end-to-end testing in this project. Follow the steps below to run Cypress tests:

Navigate to the Cypress directory:

bash
Copy code
cd cypress
Install Cypress (if not already installed):

bash
Copy code
npm install cypress --save-dev
Open Cypress Test Runner:

bash
Copy code
npx cypress open

### Run all tests:

Once the Cypress Test Runner is open, you can click on the Run all specs button to execute all tests in the cypress/e2e directory.

Alternatively, you can run Cypress tests from the command line without opening the Test Runner:

bash
Copy code
npx cypress run

### Contributing
We welcome contributions to improve this project. Please follow these steps:

### Fork the repository.
Create a new branch (git checkout -b feature-branch).

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature-branch).

Create a new Pull Request.
