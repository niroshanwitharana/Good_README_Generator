function generateMarkdown(response) {
  return `
  ##${response.title}\n\n
  ##Discription :\n
   ${response.discription}\n\n
  ##Contents : \n
   ${response.contents}\n\n
   ##Installation :\n
   ${response.installation}\n\n
   ##Usage : \n
   ${response.usage}\n\n
   ##License :\n
   ${response.license}\n\n.
   ##Contribute : \n
   ${response.contribute}\n\n.
   ##Test : \n
   ${response.test}\n\n
   ##Contact :\n
   [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com"/${response.name}\n\n           
   ##Pull Requests are Welcome : \n
   [![PRs are Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)\n\n
   ##Email :\n           
   ${email}\n\n\
  
   
   ![Profile Picture]${profilePic}
   `;
}

module.exports = generateMarkdown;
