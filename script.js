// llamo al archivo JSON a través de fetch
let CardsVideoteca = []

fetch("./videoteca.json").then(response => response.json())
  .then(data => {
    CardsVideoteca = data


    cargarcards(CardsVideoteca)
  })

// elementos del DOM

const contenedorVideoCards = document.getElementById("contenedor-video-cards")

// agrego las cards de videoteca

function cargarcards(cards) {
  cards.forEach(card => {
    const div = document.createElement("div");
    div.classList.add("video-card");
    div.innerHTML = `
      <div class="card-videoteca">
        <div class="contenedor-img">
          <img class="card-img" src="${card.imagen}" alt="matematicas">
          <h4><a href="${card.enlace}" target="_blank">${card.nombre}</a></h4>
        </div>
      </div>
    `;
    contenedorVideoCards.append(div)
  });
}


// llamo al archivo JSON a través de fetch
let CardsCalculadoras = []

fetch("./calculadoras.json").then(response => response.json())
  .then(data => {
    CardsCalculadoras = data


    cargarcardscalc(CardsCalculadoras)
  })


const contenedorCalculadorasCards = document.getElementById("contenedor-calculadoras-cards")


// agrego las cards de calculadoras

function cargarcardscalc(cards) {
  cards.forEach(card => {
    const div = document.createElement("div");
    div.classList.add("calculadora-card");
    div.innerHTML = `
      <div class="card-calculadora">
        <div class="contenedor-img">
        <img class="card-img-calc" src="${card.imagen}" alt="matematicas">
        <div class="contenedor-enlace-cards">
            <h4><a href="${card.enlace}" target="_blank">${card.nombre}</a></h4>
            </div>
        </div>
      </div>
    `;
    // en este caso no supimos como hacer para que los h4 queden los 3 alienados en las cards, 
    contenedorCalculadorasCards.append(div)
  });
} 


// alert en ver mas

//ALERT EN FORMULARIO
const buttonForm = document.querySelector("#button-ver-mas");
  
  buttonForm.addEventListener("click", function(event) {
    event.preventDefault(); // Detiene la acción predeterminada del botón
  
    Swal.fire(
      'Este botón todavia no es funcional',
      'Se dejo para usar la libreria  sweetAlert',
      'info'
    )
  });
