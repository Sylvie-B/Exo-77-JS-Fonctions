/* Ecrire ci dessous une fonction permettant d'ajouter du texte dans le div appelé container */
function txtInsert() {
    let newText = document.getElementById("container");
    newText.prepend("J'ajoute du texte");
}


/* Appeler la fonction */

txtInsert();

