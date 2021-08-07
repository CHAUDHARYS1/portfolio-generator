const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
    // this
    for(let i = 0; i < profileDataArgs.length; i++){
        console.log(profileDataArr[i]);
    }
    console.log('================');

    // Is the same as this
    profileDataArr.forEach(profileItem => console.log(profileItem));
};
printProfileData(profileDataArgs);

// console.log(process);