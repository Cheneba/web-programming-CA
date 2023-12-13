var item;
for (let i = 0; i < locationsData.length; i++) {
  const element = locationsData[i];
  if (element["id"] === location.href.split("=")[1]) {
    item = element;
    break;
  }
}
console.log(item);
console.log(location.href.split("=")[1]);
