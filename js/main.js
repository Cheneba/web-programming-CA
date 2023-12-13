const bar = document.getElementById("bar");
const nav = document.querySelector("nav ul");
const cls = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (cls) {
  cls.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// send the places to it's container on the page
function output(range, data) {
  if (range[0] === -1) {
    data.forEach((element) => {
      // Item html code
      item = element.code();
      // appends item to the page
      container.innerHTML += item;
    });
  } else {
    for (let i = 0; i < range.length; i++) {
      const element = range[i];

      // Item html code
      item = data[element].code();
      // appends item to the page
      container.innerHTML += item;
    }
  }
}

// search function that searches the params in the database
function search(keywords) {
  let text = "";
  let result = [];

  // loops through data from the database
  for (let i = 0; i < locationsData.length; i++) {
    const element = locationsData[i];
    // loops through each key and value pairs
    // of the data from the database
    for (let key in element) {
      const value = element[key];

      // second loop
      if (typeof value === "object") {
        for (let key2 in value) {
          const value2 = value[key2];

          // assigns string to my collector variable
          text += value2;
        }
        continue;
      }
      // assigns string to my collector variable
      text += value;
    }
    // checks if the keywords can be found in the string
    // collected from the database
    if (searchData(text, keywords)) {
      result.push(i);
    }
    // clears the string for next loop
    text = "";
  }
  // for debbugging
  console.log(result);

  // output results
  output(result);
}

// looks if there is anything to find from the database
function searchData(data, keywords) {
  // loops through the keywords
  for (let i = 0; i < keywords.length; i++) {
    const element = keywords[i];

    // creates a regular expression object
    let regex = new RegExp(element);
    // check for data in the database
    let result = data.match(regex);
    // returns true if positive
    if (result) {
      return true;
    }
  }
  // return false if nothing is found
  return false;
}
