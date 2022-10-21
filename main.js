// importation des classe / id pour les utiliser dans le javascript. //
let field = document.getElementById("app-field");
let btn = document.getElementById("app-btn");
let alllist = document.getElementById("all");
let listItems = document.getElementById("House-Category");
let listItems2 = document.getElementById("Homeworks-Category");
let listItems3 = document.getElementById("Activities-Category");
let check_house = document.getElementById("check_house");
let check_homeworks = document.getElementById("check_homeworks");
let check_activities = document.getElementById("check_activities");
let cacher_house = document.querySelector(".cmyk-house");
let cacher_homeworks = document.querySelector(".cmyk-homeworks");
let cacher_activities = document.querySelector(".cmyk-activities");
let afficher = document.getElementById("afficher");

function space() { // PERMET D AGGRANDIR LE BLOCK QUAND ON ENVOIE LA TACHE
  let espace = document.createElement("hr");
  let text = field.value;
  if (text == "") {
    alert("Veuillez rentrer quelques chose !")
  } else {
    alllist.appendChild(espace);
  }
}

function space2() { // PERMET D AGGRANDIR LE BLOCK QUAND ON ENVOIE LA TACHE
  let espace2 = document.createElement("hr");
  let text = field.value;
  if (text == "") {
    alert("Veuillez rentrer quelques chose !")
  } else {
    alllist.appendChild(espace2);
  }
}

function space3() { // PERMET D AGGRANDIR LE BLOCK QUAND ON ENVOIE LA TACHE
  let espace3 = document.createElement("hr");
  let text = field.value;
  if (text == "") {
    alert("Veuillez rentrer quelques chose !")
  } else {
    alllist.appendChild(espace3);
  }
}

///////////////////// DEBUT AFFICHER-CACHER LES TITRES DES CATEGORIES /////////////////////


// si la classe "cmyk-house" est séléctionner alors sa la cache, sinon sa l'affiche.
function house_categorie() {
  if (cacher_house.className == "cmyk-house") {
    cacher_house.className = 'ac'; // renvoie au css pour que sa cache la catégorie
  } else {
    cacher_house.className = 'cmyk-house';
  }
}
// si la classe "cmyk-homeworks" est séléctionner alors sa la cache, sinon sa l'affiche.
function homeworks_categorie() {
  if (cacher_homeworks.className == "cmyk-homeworks") {
    cacher_homeworks.className = 'ac'; // renvoie au css pour que sa cache la catégorie
  } else {
    cacher_homeworks.className = 'cmyk-homeworks';
  }
}
// si la classe "cmyk-activities" est séléctionner alors sa la cache, sinon sa l'affiche.
function activities_categorie() {
  if (cacher_activities.className == "cmyk-activities") {
    cacher_activities.className = 'ac'; // renvoie au css pour que sa cache la catégorie
  } else {
    cacher_activities.className = 'cmyk-activities';
  }
}

///////////////////// FIN AFFICHER-CACHER LES TITRES DES CATEGORIES /////////////////////


// function qui créera le boutton pour delete les tâches ajouté à la todolist.
function delete_categorie() {
  // Créez un bouton "fermer" et ajoutez-le à chaque élément de la liste
  var heightlist = document.getElementsByTagName("li");
  var i;
  for (i = 1; i < heightlist.length; i++) { // i = 1 pour ne pas que le boutton ne ce duplique quand la page ce charge
    var span = document.createElement("BUTTON"); // Création du boutton quand on clique
    var txt = document.createTextNode("🗑️");  // Création de l'émoji "tash" quand on clique
    span.className = "close"; // Création de la classe close
    span.appendChild(txt); // apparition de l'émoji "trash" pour pouvoir le delete
    heightlist[i].appendChild(span);
  }
  // Cliquez sur un bouton de fermeture pour masquer l'élément de liste actuel
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none"; // permet de cacher la tâche choisis   
    }
  }
}

// ce qui permettra de mettre la tâche dans la catégorie où on veut grâce au dropdown. //

check_house.addEventListener("click", (ev) => {
  //on récupère le text de l'input
  //on récupère la valeur de l'input

  if (check_house == check_house) {
    let text = field.value;

    //apres il faut penser à utiliser .createElement()
    let newLi = document.createElement("li");
    newLi.textContent = text;
    //on ajoute le nouvel Li à la list
    listItems.appendChild(newLi);
    // On veut supprimer le text de l'input
    field.value = "";
    console.log(newLi)
    //on crée un Li avec le bon contenu
  }
})

check_homeworks.addEventListener("click", () => {
  //on récupère le text de l'input
  //on récupère la valeur de l'input
  if (check_homeworks == check_homeworks) {
    let text = field.value;


    //apres il faut penser à utiliser .createElement()


    let newLi = document.createElement("li");
    newLi.textContent = text;
    //on ajoute le nouvel Li à la list
    listItems2.appendChild(newLi);
    // On veut supprimer le text de l'input
    field.value = "";
    //on crée un Li avec le bon contenu
  }
})

check_activities.addEventListener("click", () => {
  //on récupère le text de l'input
  //on récupère la valeur de l'input
  if (check_activities == check_activities) {
    let text = field.value;


    //apres il faut penser à utiliser .createElement()



    let newLi = document.createElement("li");
    newLi.textContent = text;
    //on ajoute le nouvel Li à la list
    listItems3.appendChild(newLi);
    // On veut supprimer le text de l'input
    field.value = "";
    //on crée un Li avec le bon contenu
  }
})

// on crée le fait d'appuyer pour entrer pour ouvrir le dropdown.
var input = document.getElementById("app-field"); // id qui renvoie le la valeur dans l'input

input.addEventListener("keypress", function (event) { // event key pressé
  if (event.key === "Enter") { // si l'utilisateur appuie sur entrer
    event.preventDefault();
    document.getElementById("app-btn").click();  // permet que quand l'utilisateur appuie sur entrer, sa ouvre le dropdown
  }
});