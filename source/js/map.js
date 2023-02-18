const image = document.querySelector('.map__image');
const map = L.map('map-canvas');

const ZOOM = 20;

const MAP_CENTER = {
  lat: 59.968385,
  lng: 30.317392,
};

const PIN_CENTER = {
  lat: 59.968321,
  lng: 30.317462,
};

const pinIcon = L.icon({
  iconUrl: '../img/icons/stack.svg#map-pin',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  PIN_CENTER,
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
