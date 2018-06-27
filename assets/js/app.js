/*jshint esversion: 6 */
const bizOnline = (function (){

  var tabl = [];

  var Produit = function (nom, prix, description, ref, couleur, poids, image){
    this.nom= nom;
    this.prix= prix;
    this.description= description;
    this.ref= ref;
    this.couleur= couleur;
    this.poids= poids;
    this.image= image;
  };

  const refAleatoire  = function(){
    let chiffreAleatoire;
    let tablLettre = ["A", "B", "C", "D", "E"];
    let choixLettre = Math.floor(Math.random()*5);
    let ref = tablLettre[choixLettre];

    for (var i = 0; i < 5; i++) {
      chiffreAleatoire = Math.floor(Math.random()*9);
      ref += chiffreAleatoire;
    }
    return ref;
  };

  const creerProduit = function(){
    var nom = document.getElementById('nom');
    var prix = document.getElementById('prix');
    var description = document.getElementById('description');
    var image = "url image";
    var couleur = document.getElementById('couleur');
    var poids = document.getElementById('poids');
    var ref = refAleatoire();


    if(nom.value != "" && prix.value != "" && description.value != ""){
      alert("Le produit a été ajouter");
      tabl.push(new Produit(nom.value, prix.value, description.value, ref, couleur.value, poids.value, image));
      console.log(tabl);
      ajouter();
      nom.value = "";
      prix.value = "";
      description.value = "";
      couleur.value = "#ffffff";
      poids.value = 0;
    }

    return tabl;
  };

  const ajouter = function(){
    var caseTableau = document.getElementById('tbody');
    var temp = "";

    for (var i = 0; i < tabl.length; i++) {
        temp += "<tr><td>"+ tabl[i].nom + "</td>"+
        "<td>"+ tabl[i].prix + "</td>"+
        "<td>"+ tabl[i].description +"</td>"+
        "<td>"+tabl[i].ref +"</td>"+
        "<td>"+tabl[i].couleur +"</td>"+
        "<td>"+tabl[i].poids +"</td>"+
        "<td>"+tabl[i].image +"</td>"+
        "<td><button type=\"button\" class=\"supp\">Supprimer</button></td></tr>";
    }
    caseTableau.innerHTML = temp;
    return caseTableau;
  };

  const supprimerLigne_indexN = function(){
    var n;

    // on récupère l'identifiant (id) de la table qui sera modifiée
    caseTableau = document.getElementById("tbody");
    // nombre de lignes dans la table (avant suppression de la ligne n)
    var nbLignes = caseTableau.rows.length;

    n = prompt("Numéro de la ligne à supprimer ?\nEntrez le n° de la ligne ");


        caseTableau.deleteRow(n-1); // suppression d'une ligne à l'index n


  };



  window.onload = function init(){

    var valider = document.getElementById('valider');
    valider.onclick = creerProduit;
    var supprimer = document.getElementById('suppression');
    supprimer.onclick = supprimerLigne_indexN;

  };


}());
