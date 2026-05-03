document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    let symptomes = document.getElementById("symptomes").value.toLowerCase();

    let resultat = "";

    if (symptomes.includes("fièvre")) {
        resultat = "Peut-être grippe 🤒";
    } 
    else if (symptomes.includes("toux")) {
        resultat = "Possible infection légère 🤧";
    } 
    else {
        resultat = "Consultez un médecin 🩺";
    }

    document.getElementById("resultat").innerText = resultat;
});
