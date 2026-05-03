document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let text = document.getElementById("symptomes").value;

    let result = "Consultez un médecin";

    if (text.includes("fièvre")) {
        result = "Peut-être grippe";
    }

    document.getElementById("resultat").innerText = result;
});
