document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    let nom = document.getElementById("nom").value;
    let symptomes = document.getElementById("symptomes").value.toLowerCase();

    let resultat = "";

    if (symptomes.includes("fièvre") || symptomes.includes("toux")) {
        resultat = " grippe";
    } 
    else if (symptomes.includes("fatigue")) {
        resultat = "fatigue légère";
    } 
    else {
        resultat = " consulte un médecin";
    }

    document.getElementById("resultat").innerText = nom + " → " + resultat;
});
