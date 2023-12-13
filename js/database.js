// locationsStore
const locationsData = [
  {
    id: "1",
    name: "Lake Awing",
    description: "Description of Location 1",
    imageURL: `images/${this.imageName}`,
    imageName: "lake-awing.jpg",
    coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "2",
    name: "Wum Waterfall",
    description: "Description of Location 1",
    imageURL: `images/${this.imageName}`,
    imageName: "wum-waterfall.jpg",
    coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "3",
    name: "Mount Oku",
    description: "Description of Location 1",
    imageURL: `images/${this.imageName}`,
    imageName: "mount-oku.jpg",
    coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "4",
    name: "Bafut Palace",
    description: "Description of Location 1",
    imageURL: `images/${this.imageName}`,
    imageName: "bafut-palace.jpg",
    coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "5",
    name: "Ayaba Hotel",
    description: "Description of Location 1",
    imageURL: `images/${this.imageName}`,
    imageName: "ayaba-hotel.jpg",
    coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "6",
    name: "Fongum Restaurant",
    description: "Description of Location 1",
    imageURL: `images/${this.imageName}`,
    imageName: "fongum-restaurant.jpg",
    coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "7",
    name: "University Of Bamenda",
    description: "Description of Location 1",
    imageURL: `images/${this.imageName}`,
    imageName: "university-of-bamenda.jpg",
    coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "8",
    name: "Pres. Church Ntamulung",
    description: "Description of Location 1",
    imageURL: `images/${this.imageName}`,
    imageName: "pres-church-ntamulung.jpg",
    coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
];

// commentStore
const commentData = [
  {
    id: "1",
    name: "Valery",
    content: "The site is really really good",
    picture: "valery.jpg",
    code() {
      return getCommentCode(this);
    },
  },
];

function getSiteCode(obj) {
  return `
        <div class="touristic-site"  id="${obj.id}">
          <p class="site-title">${obj.name}</p>
          <img class="site-image" src="${obj.imageURL}" alt="" />
          <button class="site-button" onclick="detailPage(this)">Learn more</button>
        </div>
        `;
}

function getCommentCode(obj) {
  return `"<div>${obj.name}Replace with code for comment</div>"`;
}
