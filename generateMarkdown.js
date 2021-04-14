// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//a notice is added to the section of the README entitled License that 
//explains which license the application is covered under
function renderLicenseBadge(license) {
    if (license==='Apache2.0'){
   return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license==='MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
   }
   if (license==='Mozilla Public License 2.0'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjectTitle}
  ## License
  ${renderLicenseBadge(data.License)}
  ## Description
  ${data.Description}
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## Contributing
  ${data.Contributing}
  ## Tests
  ${data.Tests}
  ## GitHub Username
  ${data.GitHubUserName}
  ## Email Address
  ${data.EmailAddress}

 
`;
}

module.exports = generateMarkdown;

// ${renderLicenseBadge()}