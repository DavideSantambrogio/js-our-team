const cardContainer= document.getElementById("my-card")

const team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
  }
]
// console.log(team)

createCard()

// stampa di ogni array
for (const member in team) {
    console.log(team[member]);
}

// funzioni
// crea card
function createCard() {
  for (let i = 0; i < team.length; i++) {

    const newCard = document.createElement("div");    
    newCard.classList.add("col-lg-4") 
    newCard.classList.add("col-md-6")
    newCard.classList.add("col-sm-12")
    newCard.classList.add("mb-5")

    newCard.innerHTML = (
        '<img src="img/' + team[i].foto + '" alt="";>'
        + '<h2>' + team[i].nome + '</h2>'
        + '<p>' + team[i].ruolo + '</p>'
    )
    cardContainer.append(newCard)
}
}



