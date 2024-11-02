window.addEventListener('scroll', (e) => {
  const header = document.getElementById('header')
  const scrollPosition = 400

  if (scrollY > scrollPosition) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

// seleziono tutte le lettere M della SVG tramite un attributo
const lettersM = document.querySelectorAll('[stroke-linecap="butt"]')

const changeOpacity = function () {
  // genero un numero casuale compreso tra 0 e la length della NodeList che contiene tutte le M dell'immagine SVG
  const random = Math.floor(Math.random() * lettersM.length)

  // seleziono la lettera con l'indice casuale generato
  const selectedM = lettersM[random]

  // in css ho settato una transition per tutte le lettere con l'attributo scelto come riferimento
  //e una classe hidden che porta l'opacity a 0 facendo scomparire la lettera selezionata
  //con IF controllo che la M selezionata non abbia già la classe hidden, se la classe hidden è gia presente la tolgo
  //se la M selezionata no ha la classe hidden allora la aggiungo
  if (selectedM.classList.contains('hidden')) {
    selectedM.classList.remove('hidden')
  } else {
    selectedM.classList.add('hidden')
  }
}

// chiamata della funzione, ogni 100 millisecondi viene selezionata una M casuale che se visibile viene resa totalmente opaca
// se non visibile viene resa visibile
setInterval(changeOpacity, 100)
