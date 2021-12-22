const buttonRandomQuote = document.querySelector(".button"),
  randomQuoteBox = document.querySelector(".box");

const quotesArray = [
  "Los que están lo suficientemente locos para creer que pueden cambiar el mundo son los que lo teminan cambiando",
  "A nadie le importa lo que sabes hasta que saben cuánto te importa",
  "Hacer algo bien no lo convierte en algo importante",
  "Cuanto más esperes para comenzar, es más probable que nunca lo hagas",
  "La gente lista debería hacer cosas",
  "Sé tan bueno que no puedan ignorarte",
  "El que crea y domina su propio proceso de aprendizaje se vuelve un genio a su manera",
  "La mayoría de la gente no empieza. La mayoría de las personas que comienzan no continúan. La mayoría de las personas que continúan se rinden. Muchos ganadores son los últimos en pie",
  "Una visión sin una tarea es sólo un sueño. Una tarea sin una visión es un trabajo fatigoso. Pero cuando la visión y la tarea van de la mano son la esperanza del mundo",
  "El progreso humano se debe a las personas que lograron un avance personal con relación al arte, la ciencia o la tecnología, y que fueron capaces de compartir su propia transformación con los demás humanos",
  "Pensar es la esencia del trabajo y de la vida, y también una de las cosas más difíciles de hacer. Las personas que construyen imperios dedican horas y horas al trabajo mental… mientras los demás se divierten",
  "Cuando tienes miedo no puedes pensar con claridad; por el contrario, la confianza en tus cualidades te hace mucho más persistente",
  "La mejor forma de evitar la etapa autónoma y estancamiento satisfactorio es practicando los fallos",
];
const quotesLength = quotesArray.length;
console.log(`Cantidad de Frases: ${quotesLength}`);

function randomIntNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function newRandomQuote() {
  let randomNumberQuote = randomIntNumber(0, quotesLength - 1);
  console.log(randomNumberQuote);

  randomQuoteBox.textContent = `"${quotesArray[randomNumberQuote]}"`;
}

buttonRandomQuote.addEventListener("click", newRandomQuote);
document.addEventListener("keydown", function (e) {
  if (e.key === "s") {
    newRandomQuote();
  }
});
