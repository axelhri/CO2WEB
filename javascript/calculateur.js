document.addEventListener('DOMContentLoaded', function() {
    var resultElement = document.createElement('p');
    resultElement.className = 'result';
    document.querySelector('.formcal').appendChild(resultElement);

    document.querySelector('.formcal').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Récupération des valeurs entrées par l'utilisateur
        var distance = parseFloat(document.getElementById('dist').value);
        var joursTravailles = parseInt(document.getElementById('jourt').value);

        // Facteur d'émission en kg CO2/km pour une voiture essence
        var facteurEmission = 0.12;

        // Calcul des émissions de CO2
        var emissions = distance * joursTravailles * facteurEmission;

        // Affichage du résultat
        resultElement.textContent = "Émissions de CO2 pour cette distance : " + emissions.toFixed(2) + " kg CO2";
    });
});
