if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// global variables
let container = document.querySelector(".site-container");

// launches when the page is loaded
function ready() {
  var item;
  var p = [""];
  if (location.href.includes("=")) {
    p = location.href.split("=");
    p.shift();
    if (p[0].includes("+")) {
      p = p[0].split("+");
    }
  }
  if (p[0] !== "" && p !== undefined) {
    search(p);
  } else {
    output([-1], locationsData);
  }
  console.log(p);
}

function detailPage(value) {
  window.location.href = `details.html?id=${value.getAttribute("id")}`;
}
