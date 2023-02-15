const image = document.querySelector('.map__image');
const map = L.map('map-canvas');

const ZOOM = 19;

const MAP_CENTER = {
  lat: 59.968400,
  lng: 30.317523,
};

const pinIcon = L.icon({
  iconUrl: '../img/map/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  MAP_CENTER,
  {
    icon: pinIcon,
  }
);

image.classList.add('map__image--hide');

map.setView(MAP_CENTER, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

marker.addTo(map);
