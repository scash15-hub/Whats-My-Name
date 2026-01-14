const favoriteNumber = document.getElementById('favoriteNumber');
const favoriteNumberValue = document.getElementById('favoriteNumberValue');

favoriteNumber.addEventListener('input', function () {
  favoriteNumberValue.textContent = favoriteNumber.value;
});

document.getElementById('generateBtn').addEventListener('click', function () {
  const firstInitial = document.getElementById('firstInitial').value.toUpperCase();
  const lastInitial = document.getElementById('lastInitial').value.toUpperCase();
  const favoritePet = document.getElementById('favoritePet').value;
  const favoriteColor = document.getElementById('favoriteColor').value.toUpperCase();
  const favNumber = parseInt(favoriteNumber.value);

  if (!firstInitial || !lastInitial || !favoritePet || !favoriteColor || !favNumber) {
    document.getElementById('errorMsg').style.display = 'block';
    document.getElementById('outputCard').style.display = 'none';
    return;
  } else {
    document.getElementById('errorMsg').style.display = 'none';
  }

  function getPrefix() {
    if (firstInitial >= 'A' && firstInitial <= 'I') return 'Goalie';
    else if (firstInitial >= 'J' && firstInitial <= 'R') return 'Forward';
    else return 'Defense';
  }

  function getFirstName() {
    if (favoritePet === 'dog') return 'Mark';
    else if (favoritePet === 'cat') return 'Rod';
    else if (favoritePet === 'fish') return 'Brian';
    else if (favoritePet === 'bird') return 'Henrik';
    else if (favoritePet === 'rabbit') return 'Mike';
    else return 'Player';
  }

  function getMiddleName() {
    if (favoriteColor === '#FF0000' || favoriteColor === '#FFA500') return 'Puck';
    else if (favoriteColor === '#FFFF00' || favoriteColor === '#00FF00') return 'Stick';
    else if (favoriteColor === '#0000FF' || favoriteColor === '#800080') return 'Goal';
    else if (favoriteColor === '#FFC0CB' || favoriteColor === '#F5F5DC') return 'Crease';
    else if (favoriteColor === '#FFFFFF' || favoriteColor === '#000000') return 'Blue';
    else return 'Ice';
  }

  function getLastName() {
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const likesPizza = document.getElementById('pizza').checked;
    const likesBurgers = document.getElementById('burgers').checked;

    if (gender === "male" && likesPizza && !likesBurgers) return "Messier";
    else if (gender === "female" && likesBurgers && !likesPizza) return "Leetch";
    else if (gender === "other" && likesPizza && likesBurgers) return "Panarin";
    else if (gender === "male" && likesBurgers) return "Kreider";
    else if (gender === "female" && likesPizza) return "Lundqvist";
    else return "Ranger";
  }

  function getSuffix(num) {
    if (num >= 1 && num <= 100) return "#" + num;
    else return "#0";
  }

  const finalName =
    getPrefix() + " " +
    getFirstName() + " " +
    getMiddleName() + " " +
    getLastName() + " " +
    getSuffix(favNumber);

  document.getElementById('generatedName').textContent = finalName;
  document.getElementById('outputCard').style.display = 'block';
});
