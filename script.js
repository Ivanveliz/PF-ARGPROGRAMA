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