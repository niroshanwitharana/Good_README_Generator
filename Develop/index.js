// get the required dependencies using require method
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

// change readFile and writeFile methods to ASyncronys way 
const writeFileAsync = util.promisify(fs.writeFile);

function createPrompt() {

    // create prompt to get all the informations to build up README.md
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub User name?"
        },
        {
            type: "input",
            name: "title",
            message: "Enter your project title(repo name)?"
        },
        {
            type: "input",
            name: "discription",
            message: "Enter your project discription ?"
        },        
        {
            type: "input",
            name: "installation",
            message: "What are the installation requirements?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is the usage of this project ?"
        },
        {
            type: "input",
            name: "license",
            message: "Enter the project License info ?"
        },
        {
            type: "input",
            name: "contribute",
            message: "Any Contributing Info?"
        },
        {
            type: "input",
            name: "test",
            message: "Enter Test information about the project ?"
        },

    ])

}

// create a README file using info passing by prompts




async function init() {

    try {
        const response = await createPrompt();

        // Use  Github username to call API query URL
        const queryUrl = `https://api.github.com/users/${response.username}`;

        // use get method to API call using axios
        const { data } = await axios.get(queryUrl);

        const profilePic = data.avatar_url;
        const email = data.email;


        // create a readme file with user inputs
        const readme = 
`# ${response.title}\n
## Discription :\n
${response.discription}\n
## Contents :
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contributions)
* [Tests](#tests)
* [Contact](#Contact)
    *   [Github Profile Picture](#githubprofile)
    *   [Email](#email)
## Installation :\n
${response.installation}\n
## Usage : \n
${response.usage}\n
## License :\n
${response.license}\n
## Contribute : \n
${response.contribute}\n
## Tests : \n
${response.test}\n
## Pull Requests are Welcome : \n
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)\n
## Contact :\n
{![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com"/${response.name})\n          
## Email :\n           
${email}\n


![Profile Picture](${profilePic})\n`;

        // Write README.md file
        await writeFileAsync("README.md", readme);

        console.log("Successfully wrote to a README.md");
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

init();