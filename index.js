const inquirer = require('inquirer');
const fs = require('fs');

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
            choices: ['MIT',]
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
${data.license}
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
    .then((answers) => fs.writeFileSync('testREADME.md', generateMarkdown(answers)))
    .then(() => console.log('Great Sucess'))
    .catch((error) => console.error(error))
}

init();