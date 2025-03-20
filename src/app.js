import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};

window.onload = function() { 
  let botones = document.querySelectorAll(".casilla");
  botones.forEach((boton, index) => {
      boton.addEventListener("click", () => manejarTurno(index));
  });

  document.getElementById("reset").addEventListener("click", reiniciarJuego);
}

let tablero = ["", "", "", "", "", "", "", "", ""];
let turno = "X";

const combinacionesGanadoras = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 4, 8], [2, 4, 6],
  [0, 3, 6], [1, 4, 7], [2, 5, 8]
];

function manejarTurno(i) {
  if (tablero[i] === "") {
    tablero[i] = turno;
    actualizarTablero();
    verificarGanador();
    turno = turno === "X" ? "O" : "X";
  } else {
    alert("¡Casilla ocupada! Elige otra.");
  }
};

function actualizarTablero() {
  let botones = document.querySelectorAll(".casilla");
  for (let i = 0; i < 9; i++) {
    botones[i].innerText = tablero[i]
  }
};

function verificarGanador() {
  for (let combinacion of combinacionesGanadoras) {
    let [a, b, c] = combinacion;
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      alert(`¡${tablero[a]} ha ganado! 🎉`);
      reiniciarJuego();
      return;
    }
  }
  if (!tablero.includes("")) {
    alert("¡Empate! 🤝");
    reiniciarJuego();
  }
}

function reiniciarJuego() {
  tablero = ["", "", "", "", "", "", "", "", ""];
  turno = "X";
  actualizarTablero();
}