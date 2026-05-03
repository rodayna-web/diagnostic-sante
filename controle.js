document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let symptomes = document.getElementById("symptomes").value.toLowerCase();

    if (symptomes.includes("fièvre")) {
        document.getElementById("resultat").innerText = "grippe 🤒";
    } else {
        document.getElementById("resultat").innerText = "consulte médecin 🩺";
    }
});
