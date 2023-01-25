import { crearCartaHTML, pedirCarta, valorCarta } from "./index";

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos mínimos que se necesitan para ganar
 * @param {Array<String>} deck es un arreglo de string
 * @param {HTMLElement} puntosHTML es un elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora es un elemento HTML para mostrar las cartas
 */
export const turnoComputadora = (
  puntosMinimos,
  deck,
  puntosHTML,
  divCartasComputadora
) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  if (!puntosHTML) {
    throw "Argumento puntosHTML es necesario";
  }
  if (!divCartasComputadora) {
    throw "Argumento divCartasComputadora es necesario";
  }

  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
