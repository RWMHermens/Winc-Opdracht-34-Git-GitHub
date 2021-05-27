const letsGo = () => {
    let person = prompt("Welkom! Wat is je naam?", "Poedeliewoepsie");
    if (person != null) {
        alert("Hé " + person + "!");
    }

    let x = Math.floor(Math.random() * 25) + 1;
    let turns = 5;
    let hint = 'Raad het getal tussen 0 en 25!';

    while (turns > 0) {
        let guess = prompt(hint + ' Je hebt nog ' + turns + ' pogingen.');
        if (!guess) break;
        guess = Number(guess);
        if (guess == x) {
            document.getElementById('gelukt').innerText = 'GEFELICITEERD ' + person + ', je hebt het getal geraden!';
            turns = 0;
        } else {
            hint = 'Helaas,';
            if (guess < x) hint += ' te laag!';
            if (guess > x) hint += ' te hoog!';
            turns = turns - 1;
        }
    }
    alert('Het geheime getal was ' + x + '.');
};