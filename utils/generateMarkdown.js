// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//badge
function renderLicenseBadge(license) {
license !== 'no license'
 return `
 [![badge](https://img.shields.io/badge/license-${license})
 `;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//link for license
function renderLicenseLink(license) {
license !== 'no license'
return `
[${license}(https://choosealicense.com/licenses/${license})]
`;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//section
function renderLicenseSection(license) {
license !== 'no license'
return `

`;
};

//section for demo
function renderDemo (demo) {

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(info) {
//README format
  return `
  # ${info.title}

  ${renderLicenseBadge(info.license)}

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#tests)
  - [Questions](#questions)


  ## Description
  ${info.description}
  ${renderLicenseSection(info.license)} 
  ${renderLicenseLink(info.license)}
  
## Installation 
  ${info.installation}

## Usage 
  ${info.usage}
  ${info.screenshot}
  ${renderDemo(demo)}

## Contribution
  ${info.contribution}

## Testing
  ${info.testing}

## Questions
   Questions? Reach out to me at [${info.github}](https://github.com/${github}) or ${info.email}!

`;
};

module.exports = generateMarkdown;
