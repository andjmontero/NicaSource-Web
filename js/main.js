class Partner {
  constructor(name, desc, img, icon, id) {
    (this.name = name),
      (this.desc = desc),
      (this.img = img),
      (this.icon = icon),
      (this.id = id);
  }
}

const partnerSugestions = [];

partnerSugestions.push(
  new Partner(
    "Bradley Hunter",
    "Based in Chicago, i love playing tennis and loud music.",
    "./img/partners/Bradley.png",
    "./img/partners-icons/music2.png",
    1
  ),
  new Partner(
    "Marie Bennet",
    "Currently living in Colorado. Lover of art, languages and travelling.",
    "./img/partners/Marie.png",
    "./img/partners-icons/brush.png",
    2
  ),
  new Partner(
    "Diana Wells",
    "Living in Athens, Greece. I love black and white classics, chillout music and green tea.",
    "./img/partners/Diana.png",
    "./img/partners-icons/camera.png",
    3
  ),
  new Partner(
    "Christopher Pierce",
    "Star Wars fanatic. I have a persistent enthusiasm to create new things.",
    "./img/partners/Christopher.png",
    "./img/partners-icons/airplane.png",
    4
  )
);

const container = document.getElementById("partners");

for (const partner of partnerSugestions) {
  let card = document.createElement("div");
  card.innerHTML = `  <img src="${partner.img}" alt="partner ${partner.name}"><div class="icono" id="icon-${partner.id}"><img  src=" ${partner.icon}"/></div>
    <h5>${partner.name}</h5>
    <p>${partner.desc}</p>`;
  container.appendChild(card);
  card.classList.add("partner-card");
}
