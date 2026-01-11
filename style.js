// ===== Helper Functions =====
function getPrefix(firstInitial) {
    const letter = firstInitial.toUpperCase();
    if (letter >= 'A' && letter <= 'I') {
        return "Goalie";
    } else if (letter >= 'J' && letter <= 'R') {
        return "Forward";
    } else {
        return "Defense";
    }
}

function getFirstName(favoritePet) {
    if (favoritePet === "dog") {
        return "Mark";
    } else if (favoritePet === "cat") {
        return "Rod";
    } else if (favoritePet === "fish") {
        return "Brian";
    } else if (favoritePet === "bird") {
        return "Henrik";
    } else if (favoritePet === "rabbit") {
        return "Mike";
    } else if (favoritePet === "hamster") {
        return "Adam";
    } else if (favoritePet === "guinea pig") {
        return "Jean";
    } else if (favoritePet === "penguin") {
        return "Eddie";
    } else if (favoritePet === "bearded dragon") {
        return "Artemi";
    } else if (favoritePet === "rats") {
        return "Mika";
    } else if (favoritePet === "mice") {
        return "Chris";
    } else if (favoritePet === "horse") {
        return "Matt";
    } else {
        return "Igor";
    }
}

function getMiddleName(favoriteColor) {
    switch (true) {
        case (favoriteColor >= "#FF0000" && favoriteColor <= "#FFA500"):
            return "Puck";
        case (favoriteColor >= "#FFFF00" && favoriteColor <= "#00FF00"):
            return "Stick";
        case (favoriteColor >= "#0000FF" && favoriteColor <= "#800080"):
            return "Goal";
        case (favoriteColor >= "#FFC0CB" && favoriteColor <= "#F5F5DC"):
            return "Crease";
        case (favoriteColor >= "#FFFFFF" && favoriteColor <= "#000000"):
            return "Blue";
        default:
            return "Ice";
    }
}

function getLastName(firstName) {
    const lastLetter = firstName[firstName.length - 1].toUpperCase();
    if (lastLetter >= 'A' && lastLetter <= 'B') {
        return "Messier";
    } else if (lastLetter >= 'C' && lastLetter <= 'D') {
        return "Gilbert";
    } else if (lastLetter >= 'E' && lastLetter <= 'F') {
        return "Leetch";
    } else if (lastLetter >= 'G' && lastLetter <= 'H') {
        return "Lundqvist";
    } else if (lastLetter >= 'I' && lastLetter <= 'J') {
        return "Richter";
    } else if (lastLetter >= 'K' && lastLetter <= 'L') {
        return "Graves";
    } else if (lastLetter >= 'M' && lastLetter <= 'N') {
        return "Ratelle";
    } else if (lastLetter >= 'O' && lastLetter <= 'P') {
        return "Giacomin";
    } else if (lastLetter >= 'Q' && lastLetter <= 'R') {
        return "Panarin";
    } else if (lastLetter >= 'S' && lastLetter <= 'T') {
        return "Zibanejad";
    } else if (lastLetter >= 'U' && lastLetter <= 'V') {
        return "Kreider";
    } else if (lastLetter >= 'W' && lastLetter <= 'X') {
        return "Rempe";
    } else {
        return "Shesterkin";
    }
}

function getSuffix(favoriteNumber) {
    if (favoriteNumber >= 1 && favoriteNumber <= 100) {
        return "#" + favoriteNumber;
    } else {
        return "";
    }
}

// ===== Input Validation =====
function validateInputs(firstInitial, favoritePet, favoriteColor, favoriteNumber) {
    if (!firstInitial || !favoritePet || !favoriteColor || !favoriteNumber) {
        alert("Please fill out all fields before continuing!");
        return false;
    }
    return true;
}

// ===== Name Generator =====
function generateHockeyName(firstInitial, favoritePet, favoriteColor, favoriteNumber) {
    if (!validateInputs(firstInitial, favoritePet, favoriteColor, favoriteNumber)) {
        return "";
    }

    const prefix = getPrefix(firstInitial);
    const firstName = getFirstName(favoritePet);
    const middleName = getMiddleName(favoriteColor);
    const lastName = getLastName(firstName);
    const suffix = getSuffix(favoriteNumber);

    return `${prefix} ${firstName} ${middleName} ${lastName} ${suffix}`;
}

// ===== Example: Hooking to HTML =====
function showHockeyName() {
    const firstInitial = document.getElementById("firstInitial").value;
    const favoritePet = document.getElementById("favoritePet").value;
    const favoriteColor = document.getElementById("favoriteColor").value;
    const favoriteNumber = parseInt(document.getElementById("favoriteNumber").value);

    const name = generateHockeyName(firstInitial, favoritePet, favoriteColor, favoriteNumber);

    if (name) {
        document.getElementById("output").textContent = name;
    }
}

// ===== Optional Confetti / Button Effects =====
function createConfetti() {
    const colors = ['#00c853', '#b2ff59', '#ffd700', '#00bfff'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.opacity = '1';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);

        const duration = 2000 + Math.random() * 1000;
        const xDrift = (Math.random() - 0.5) * 200;

        setTimeout(() => {
            confetti.animate([
                { transform: 'translateY(0) translateX(0)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) translateX(${xDrift}px)`, opacity: 0 }
            ], { duration: duration, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' });

            setTimeout(() => confetti.remove(), duration);
        }, Math.random() * 100);
    }
}
