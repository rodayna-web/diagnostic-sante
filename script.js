document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let symptomes = document.getElementById("symptomes").value.toLowerCase();

    let resultat = "";

    if (symptomes.includes("fièvre") || symptomes.includes("toux")) {
        resultat = "Peut-être une grippe 🤒";
    } 
    else if (symptomes.includes("fatigue")) {
        resultat = "Vous êtes fatigué 😴";
    } 
    else {
        resultat = "Consultez un médecin 🩺";
    }

    document.getElementById("resultat").innerText =
        nom + " → " + resultat;
});
