const favoriteNumber = document.getElementById('favoriteNumber');
const favoriteNumberValue = document.getElementById('favoriteNumberValue');

favoriteNumber.addEventListener('input', function() {
  favoriteNumberValue.textContent = favoriteNumber.value;
});

document.getElementById('generateBtn').addEventListener('click', function() {
  const firstInitial = document.getElementById('firstInitial').value.toUpperCase();
  const lastInitial = document.getElementById('lastInitial').value.toUpperCase();
  const favoritePet = document.getElementById('favoritePet').value;
  const favoriteColor = document.getElementById('favoriteColor').value.toUpperCase();
  const favNumber = parseInt(document.getElementById('favoriteNumber').value);

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
    switch(favoriteColor) {
      case '#FF0000': case '#FFA500': return 'Puck';
      case '#FFFF00': case '#00FF00': return 'Stick';
      case '#0000FF': case '#800080': return 'Goal';
      case '#FFC0CB': case '#F5F5DC': return 'Crease';
      case '#FFFFFF': case '#000000': return 'Blue';
      default: return 'Ice';
    }
  }

  function getLastName() {
    if (lastInitial >= 'A' && lastInitial <= 'B') return 'Messier';
    else if (lastInitial >= 'C' && lastInitial <= 'D') return 'Gilbert';
    else if (lastInitial >= 'E' && lastInitial <= 'F') return 'Leetch';
    else if (lastInitial >= 'G' && lastInitial <= 'H') return 'Lundqvist';
    else if (lastInitial >= 'I' && lastInitial <= 'J') return 'Richter';
    else if (lastInitial >= 'K' && lastInitial <= 'L') return 'Graves';
    else if (lastInitial >= 'M' && lastInitial <= 'N') return 'Ratelle';
    else if (lastInitial >= 'O' && lastInitial <= 'P') return 'Giacomin';
    else if (lastInitial >= 'Q' && lastInitial <= 'R') return 'Panarin';
    else if (lastInitial >= 'S' && lastInitial <= 'T') return 'Zibanejad';
    else if (lastInitial >= 'U' && lastInitial <= 'V') return 'Kreider';
    else if (lastInitial >= 'W' && lastInitial <= 'X') return 'Rempe';
    else return 'Shesterkin';
  }

  function getSuffix(favoriteNumber) {
    if (favoriteNumber === 1) return "#1";
    else if (favoriteNumber === 2) return "#2";
    else if (favoriteNumber === 3) return "#3";
    else if (favoriteNumber === 4) return "#4";
    else if (favoriteNumber === 5) return "#5";
    else if (favoriteNumber === 6) return "#6";
    else if (favoriteNumber === 7) return "#7";
    else if (favoriteNumber === 8) return "#8";
    else if (favoriteNumber === 9) return "#9";
    else if (favoriteNumber === 10) return "#10";
    else if (favoriteNumber === 11) return "#11";
    else if (favoriteNumber === 12) return "#12";
    else if (favoriteNumber === 13) return "#13";
    else if (favoriteNumber === 14) return "#14";
    else if (favoriteNumber === 15) return "#15";
    else if (favoriteNumber === 16) return "#16";
    else if (favoriteNumber === 17) return "#17";
    else if (favoriteNumber === 18) return "#18";
    else if (favoriteNumber === 19) return "#19";
    else if (favoriteNumber === 20) return "#20";
    else if (favoriteNumber === 21) return "#21";
    else if (favoriteNumber === 22) return "#22";
    else if (favoriteNumber === 23) return "#23";
    else if (favoriteNumber === 24) return "#24";
    else if (favoriteNumber === 25) return "#25";
    else if (favoriteNumber === 26) return "#26";
    else if (favoriteNumber === 27) return "#27";
    else if (favoriteNumber === 28) return "#28";
    else if (favoriteNumber === 29) return "#29";
    else if (favoriteNumber === 30) return "#30";
    else if (favoriteNumber === 31) return "#31";
    else if (favoriteNumber === 32) return "#32";
    else if (favoriteNumber === 33) return "#33";
    else if (favoriteNumber === 34) return "#34";
    else if (favoriteNumber === 35) return "#35";
    else if (favoriteNumber === 36) return "#36";
    else if (favoriteNumber === 37) return "#37";
    else if (favoriteNumber === 38) return "#38";
    else if (favoriteNumber === 39) return "#39";
    else if (favoriteNumber === 40) return "#40";
    else if (favoriteNumber === 41) return "#41";
    else if (favoriteNumber === 42) return "#42";
    else if (favoriteNumber === 43) return "#43";
    else if (favoriteNumber === 44) return "#44";
    else if (favoriteNumber === 45) return "#45";
    else if (favoriteNumber === 46) return "#46";
    else if (favoriteNumber === 47) return "#47";
    else if (favoriteNumber === 48) return "#48";
    else if (favoriteNumber === 49) return "#49";
    else if (favoriteNumber === 50) return "#50";
    else if (favoriteNumber === 51) return "#51";
    else if (favoriteNumber === 52) return "#52";
    else if (favoriteNumber === 53) return "#53";
    else if (favoriteNumber === 54) return "#54";
    else if (favoriteNumber === 55) return "#55";
    else if (favoriteNumber === 56) return "#56";
    else if (favoriteNumber === 57) return "#57";
    else if (favoriteNumber === 58) return "#58";
    else if (favoriteNumber === 59) return "#59";
    else if (favoriteNumber === 60) return "#60";
    else if (favoriteNumber === 61) return "#61";
    else if (favoriteNumber === 62) return "#62";
    else if (favoriteNumber === 63) return "#63";
    else if (favoriteNumber === 64) return "#64";
    else if (favoriteNumber === 65) return "#65";
    else if (favoriteNumber === 66) return "#66";
    else if (favoriteNumber === 67) return "#67";
    else if (favoriteNumber === 68) return "#68";
    else if (favoriteNumber === 69) return "#69";
    else if (favoriteNumber === 70) return "#70";
    else if (favoriteNumber === 71) return "#71";
    else if (favoriteNumber === 72) return "#72";
    else if (favoriteNumber === 73) return "#73";
    else if (favoriteNumber === 74) return "#74";
    else if (favoriteNumber === 75) return "#75";
    else if (favoriteNumber === 76) return "#76";
    else if (favoriteNumber === 77) return "#77";
    else if (favoriteNumber === 78) return "#78";
    else if (favoriteNumber === 79) return "#79";
    else if (favoriteNumber === 80) return "#80";
    else if (favoriteNumber === 81) return "#81";
    else if (favoriteNumber === 82) return "#82";
    else if (favoriteNumber === 83) return "#83";
    else if (favoriteNumber === 84) return "#84";
    else if (favoriteNumber === 85) return "#85";
    else if (favoriteNumber === 86) return "#86";
    else if (favoriteNumber === 87) return "#87";
    else if (favoriteNumber === 88) return "#88";
    else if (favoriteNumber === 89) return "#89";
    else if (favoriteNumber === 90) return "#90";
    else if (favoriteNumber === 91) return "#91";
    else if (favoriteNumber === 92) return "#92";
    else if (favoriteNumber === 93) return "#93";
    else if (favoriteNumber === 94) return "#94";
    else if (favoriteNumber === 95) return "#95";
    else if (favoriteNumber === 96) return "#96";
    else if (favoriteNumber === 97) return "#97";
    else if (favoriteNumber === 98) return "#98";
    else if (favoriteNumber === 99) return "#99";
    else if (favoriteNumber === 100) return "#100";
    else return "#0";
  }

  const finalName = `${getPrefix()} ${getFirstName()} ${getMiddleName()} ${getLastName()} ${getSuffix(favNumber)}`;
  document.getElementById('generatedName').textContent = finalName;
  document.getElementById('outputCard').style.display = 'block';
});
