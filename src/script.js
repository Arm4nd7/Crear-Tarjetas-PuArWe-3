let createButton = document.getElementById("createBtn");
let removeButton = document.getElementById("removeBtn");

let createCards = [];
let createDescription = [];

createButton.addEventListener("click", newCards);
//Creacion de contenedor y agregacion de titulo y parrafo
function newCards(){
    let newCard = document.createElement("div");
    newCard.classList.add("card-div");
    createCards.push(newCard);
    document.getElementById("tarjetas").appendChild(newCard);
    titleH3(newCard);
    descriptionP(newCard);
    buttonDiv(newCard);
}
//creacion de titulo
function titleH3(element){
    let newTitle = document.createElement("h3");
    newTitle.textContent = "Titulo h3";
    createDescription.push(newTitle);
    element.appendChild(newTitle)
}
// ceracion de parrafo
function descriptionP(element){
    let newP = document.createElement("p");
    newP.textContent = "Nueva descripcion para esta tarjeta";
    createDescription.push(newP);
    element.appendChild(newP)
}

function buttonDiv(element) {
    let newButtonDiv = document.createElement("button");
    newButtonDiv.textContent = "Eliminar";
    createDescription.push(newButtonDiv);
    element.appendChild(newButtonDiv);
    newButtonDiv.addEventListener("click", () =>{
    if(createDescription.length >0 ){
        let removeBtn = createCards.pop();
        removeBtn.remove();
    }
    });
}




