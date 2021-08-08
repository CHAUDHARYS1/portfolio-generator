const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;
// console.log(profileDataArgs);

// const printProfileData = (profileDataArr) => {
//     // this
//     for(let i = 0; i < profileDataArgs.length; i++){
//         console.log(profileDataArr[i]);
//     }
//     console.log('================');

//     // Is the same as this
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);

// // console.log(process);

const generatePage = (userName, github) => {
    return `
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
   <h1>Name: ${userName}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>

    </body>
    </html>
    `;
};
console.log(name, github);
console.log(generatePage(name, github));
