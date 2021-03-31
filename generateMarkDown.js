let fs = require('fs');

function generateMarkdown (answer){
    // const createdMarkDown = `# ${answer.title}\n
    // ## Description\n
    // ${answer.description}\n
    // ## Table of content\n
    // 1.[Installation](#installation) \n
    // 2.[Usage](#usage) \n
    // 3.[Lisence](#lisence) \n
    // 4.[Contribution](#contribution) \n
    // 5.[Run the test](#test) \n
    // 6.[Questions](#email) \n
    // ## Installation \n
    // ${answer.installation}`;
    const createdMarkDown = '# Sathish'

    fs.writeFileSync('README.md', createdMarkDown, (err)=> err && console.log(err))

}

module.exports = {generateMarkdown};