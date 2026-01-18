const genderButtons = document.querySelectorAll(".gender-btn");
const genderInput = document.getElementById("gender");
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateName);


genderButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    genderButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    genderInput.value = btn.dataset.value;
  });
});

const numberSlider = document.getElementById("favoriteNumber");
const numberValue = document.getElementById("numberValue");
numberValue.textContent = numberSlider.value;

numberSlider.addEventListener("input", () => {
  numberValue.textContent = numberSlider.value;
});

function generateName() {
  const firstInitial = document.getElementById("firstInitial").value.toUpperCase();
  const lastInitial = document.getElementById("lastInitial").value.toUpperCase();
  const favoritePet = document.getElementById("favoritePet").value;
  const favoriteColor = document.getElementById("favoriteColor").value;
  const favoriteNumber = document.getElementById("favoriteNumber").value;
  const gender = document.getElementById("gender").value;

  const fruitElements = document.querySelectorAll('input[name="favoriteFruit"]:checked');
  const fruitCount = fruitElements.length;

  if (!firstInitial || !lastInitial || !favoritePet || !favoriteColor || !favoriteNumber || !gender || fruitCount === 0) {
    alert("Please fill out all fields and select at least one fruit.");
    return;
  }

  const prefix = getPrefix(firstInitial);
  const firstName = getFirstName(favoritePet);
  const middleName = getMiddleName(favoriteColor);
  const lastName = getLastName(lastInitial, gender, fruitCount);
  const suffix = getSuffix(favoriteNumber);

  const finalName = `${prefix} ${firstName} ${middleName} ${lastName} ${suffix}`;
  sessionStorage.setItem("finalName", finalName);
  window.location.href = "name.html";
}

function getPrefix(letter) {
  if (letter >= "A" && letter <= "I") return "Goalie";
  else if (letter >= "J" && letter <= "R") return "Forward";
  else return "Defense";
}

function getFirstName(pet) {
  switch(pet) {
    case "dog": return "Mark";
    case "cat": return "Rod";
    case "fish": return "Brian";
    case "bird": return "Henrik";
    case "rabbit": return "Mike";
    case "hamster": return "Adam";
    case "guinea pig": return "Jean";
    case "penguin": return "Eddie";
    case "bearded dragon": return "Artemi";
    case "rats": return "Mika";
    case "mice": return "Chris";
    case "horse": return "Matt";
    case "turtle": return "Igor";
    default: return "Player";
  }
}

function getMiddleName(color) {
  switch (true) {
    case color >= "#FF0000" && color <= "#FFA500": return "Puck";
    case color >= "#FFFF00" && color <= "#00FF00": return "Stick";
    case color >= "#0000FF" && color <= "#800080": return "Goal";
    default: return "Ice";
  }
}

function getLastName(letter, gender, fruitCount) {
  if ((letter >= "A" && letter <= "B") && gender === "male" && fruitCount >= 1) return "Messier";
  else if ((letter >= "C" && letter <= "D") && gender === "female" && fruitCount >= 3) return "Gilbert";
  else if ((letter >= "E" && letter <= "F") && gender === "male" && fruitCount >= 2) return "Leetch";
  else if ((letter >= "G" && letter <= "H") && gender === "female" && fruitCount >= 1) return "Lundqvist";
  else if ((letter >= "I" && letter <= "J") && gender === "male" && fruitCount >= 4) return "Richter";
  else if ((letter >= "K" && letter <= "L") && gender === "female" && fruitCount >= 1) return "Graves";
  else if ((letter >= "M" && letter <= "N") && gender === "male" && fruitCount >= 1) return "Ratelle";
  else if ((letter >= "O" && letter <= "P") && gender === "female" && fruitCount >= 1) return "Giacomin";
  else if ((letter >= "Q" && letter <= "R") && gender === "male" && fruitCount >= 1) return "Panarin";
  else if ((letter >= "S" && letter <= "T") && gender === "female" && fruitCount >= 1) return "Zibanejad";
  else if ((letter >= "U" && letter <= "V") && gender === "male" && fruitCount >= 1) return "Kreider";
  else if ((letter >= "W" && letter <= "X") && gender === "female" && fruitCount >= 1) return "Rempe";
  else if ((letter >= "Y" && letter <= "Z") && gender === "male" && fruitCount >= 1) return "Shesterkin";
  else return "Ranger";
}

function getSuffix(num) {
  return `#${num}`;
}
