document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let symptomes = document.getElementById("symptomes").value;

    let resultat = "";

    if (symptomes.includes("fièvre")) {
        resultat = "Peut-être grippe";
    } else {
        resultat = "Consultez un médecin";
    }

    document.getElementById("resultat").innerText = resultat;
});
