const inquirer = require('inquirer');
const fs = require('fs');
const badge;
const promtUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'title',
            message: 'What is the title of the project?'
        },
        {
            type:'input',
            name: 'description',
            message: 'Give a description.'
        },
        {
            type:'input',
            name: 'installInstruction',
            message: 'Instruction on how to install the project:'
        },
        {
            type:'input',
            name: 'usageInfo',
            message: 'Anything to write about its usage:'
        },
        {
            type:'input',
            name: 'contribute',
            message: 'Contribution Guidelines?'
        },
        {
            type:'input',
            name: 'test',
            message: 'Test Instructions?'
        },
        {
            type:'list',
            name: 'license',
            message: 'Which license do you want?',
            choices: ['MIT','Apache','Boost','BSD','Eclipse']
        },
        {
            type:'input',
            name: 'github',
            message: 'GitHub?'
        },
        {
            type:'input',
            name: 'email',
            message: 'Email?'
        },
    ])
}

const generateMarkdown = (data) => 
`# ${data.title}
## Description
 ${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${data.installInstruction}
## Usage
${data.usageInfo}
## Credits
## License
${badge}
## How to Contribute
${data.contribute}
## Tests
${data.test}
## Questions
If you have any questions contact me on
    GitHub: ${data.github}
    Email: ${data.email}
`

const init = () => {
    promtUser()
    .then((answers) => {
        switch (answers.license) {
            case 'MIT': badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                break;
            case 'Apache': badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                break;
            case 'Boost': badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
                break;
            case 'BSD': badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
                break;   
            default: badge = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
                break;
        }
    })
    .then((answers) => fs.writeFileSync('testREADME.md', generateMarkdown(answers)))
    .then(() => console.log('Great Sucess'))
    .catch((error) => console.error(error))
}

init();