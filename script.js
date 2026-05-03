document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let nom = document.getElementById("nom").value;
    let symptomes = document.getElementById("symptomes").value.toLowerCase();

    let resultat = "";

    if (symptomes.includes("fièvre")) {
        resultat = "Peut-être grippe 🤒";
    } else {
        resultat = "Consultez un médecin 🩺";
    }

    document.getElementById("resultat").innerText = nom + " → " + resultat;
});
