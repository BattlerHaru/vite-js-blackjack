/**
 * Crea una carta en HTML
 * @param {String} carta carta seleccionada
 * @returns {HTMLImageElement} imagen de la carta
 */

export const crearCartaHTML = (carta) => {
  if (!carta) {
    throw "La carta es un argumento obligatorio";
  }
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");

  return imgCarta;
};
