# Cypress Test Automation Project

This project is an example of a test automation project using Cypress and TypeScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and yarn. If not, you can download and install it from [here](https://nodejs.org/en/download/) and [here](https://classic.yarnpkg.com/en/docs/install/#mac-stable) respectively.

### Installation and Setup

Follow these steps to get a local copy up and running:

1. Clone the repository to your local machine using `git clone <repository_url>`.
2. Navigate to the project directory in your terminal.
3. Run `yarn install` to install all the project dependencies.
4. Set up your `cypress.env.json` file with the necessary environment variables. Please refer to the `cypress.env.example.json` file in the root directory for an example.

### Running Tests

You can run tests in two ways:

1. **Interactive Test Runner:**
   - Run `yarn cypress:open` to open the Cypress Test Runner. 
   - In the Test Runner, you'll see a list of your spec files. Click any spec file to run it.

2. **Headless Mode:**
   - Run `yarn cypress:run` to run all tests in headless mode (i.e., in the terminal).

To run a specific test, use the command: `yarn cypress:run --spec "<spec_file>"`. Replace `<spec_file>` with the path to your spec file.

### Reporting

Cypress Mochawesome Reporter is set up for better visualization of test reports.

### Test notes

Please note that the tests will not run as I've removed all references to the actual website and apis. The first api test will fail as it cannot authenticate. The E2E test was passing and working fine but before submitting the task I've removed the references to the website, will attach screenshots below that show successful test runs


![Screenshot 2023-07-16 at 16 47 46](https://github.com/achchu/cypress-project/assets/31702196/3a1e9398-1d78-4d17-afa4-ee4d97d42b2d)
![Screenshot 2023-07-16 at 16 47 56](https://github.com/achchu/cypress-project/assets/31702196/17e564f8-d32e-4c1a-a791-83d081cca8b4)
