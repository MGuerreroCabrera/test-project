import './style.css'

const aplicacion = document.querySelector("#app");

const img = document.createElement("img");

img.src = "./assets/logo.png";
console.log("Voy a introducir la imagen en el div app");

aplicacion.appendChild(img);

console.log(img);
