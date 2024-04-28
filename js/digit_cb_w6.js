function lastItem(originalArray) {
    const sortedArray = originalArray.sort();
    const lastItemAlphabetically = sortedArray[sortedArray.length - 1];
  
    const outputDiv = document.getElementById('lastItemOutput');
    outputDiv.innerHTML = `
      <p>Original Array: ${originalArray}</p>
      <p>Last Item Alphabetically: ${lastItemAlphabetically}</p>
    `;
}


function sortItemsInput(){

    const responses = {};

    //check if input is a number and qualify  to proceed
    while(isNaN(numItems) || numItems > 4 || numItems < 2 || !(Number.isInteger(numItems))){
        var numItems = Number(prompt("How many items would you like to add? (Enter 2-4 Items.)"));
    }

    //based on userinput, collect info from users
    for (let index = 0; index < numItems; index++) {
        let catInput = prompt(`Enter category ${index+1} of ${numItems}.`)
        let catItem = prompt(`Enter your ${catInput}`)
        responses[catInput] = catItem;
      };

    // IF YOU WANT TO SORT BY KEY
    const responseKeys = Object.keys(responses).sort();

    for (const key of responseKeys) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `Your ${key.toLowerCase()} is ${responses[key]}`
        document.getElementById('outputArray').appendChild(newDiv)
    }

}

document.getElementById("inputButton").addEventListener("click", inputItem)