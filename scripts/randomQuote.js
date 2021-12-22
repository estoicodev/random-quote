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
  if (e.ctrlKey && e.key === "Enter") {
    newRandomQuote();
  }
});
