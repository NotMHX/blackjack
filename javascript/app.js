import { getRandomCard } from "./cards.js";

document
  .getElementById("buttonHit")
  .addEventListener("click", () => drawThirdCard(1));
document
  .getElementById("buttonStand")
  .addEventListener("click", () => holdCards(1));

let sumPlayers = [0, 0, 0];
let round = 0;

while (round < 2) {
  for (let currentPlayer = 1; currentPlayer <= 3; currentPlayer++) {
    const randomCard = getRandomCard();
    console.log("Zufällige Karte:", randomCard);

    const displayDiv = document.getElementById(`cardDisplay${currentPlayer}`);
    console.log("current display = " + `cardDisplay${currentPlayer}`);

    const cardImage = document.createElement("img");
    cardImage.src = randomCard.url;
    cardImage.alt = randomCard.name;
    cardImage.className = "card";

    displayDiv.appendChild(cardImage);
    sumPlayers[currentPlayer - 1] += randomCard.value;

    if (sumPlayers[currentPlayer - 1] === 21) {
      showPopup("you win; reaching 21");
      break;
    }
  }
  round++;

  console.log("current sum: " + sumPlayers);
}

function drawThirdCard(currentPlayer) {
  if (round < 2) {
    alert("You need to draw two cards first!");
    return;
  }
  if (sumPlayers[currentPlayer - 1] < 21) {
    const displayDiv = document.getElementById(`cardDisplay${currentPlayer}`);
    const randomCard = getRandomCard();
    const cardImage = document.createElement("img");
    cardImage.src = randomCard.url;
    cardImage.alt = randomCard.name;
    cardImage.className = "card";

    displayDiv.appendChild(cardImage);

    sumPlayers[currentPlayer - 1] += randomCard.value;
  }

  console.log("Summe nach der dritten Karte:", sumPlayers);

  if (sumPlayers[currentPlayer - 1] > 21) {
    showPopup("you lose");
  }
}

function holdCards(currentPlayer) {
  while (kisumme < 17) {
    const displayDiv = document.getElementById("bank");
    const cardImage = document.createElement("img");
    while (kisumme < 17) {
      const randomCard = getRandomCard();

      cardImage.src = randomCard.url;
      cardImage.alt = randomCard.name;
      cardImage.className = "card";
      displayDiv.appendChild(cardImage);
      kisumme += randomCard.value;
    }
    // replace url of last image
    let lastIndex = roundForComputer - 1;
    console.log("the last index is " + lastIndex);
    let lastImage = document.getElementById(`unknownCard${lastIndex}`);
    console.log("last card: " + lastImage.src);
    lastImage.src = unknownCardImageUrl;

    // replace last image
    document.getElementById(`unknownCard${roundForComputer - 1}`).remove();
    displayDiv.appendChild(lastImage);

    // add new card
    displayDiv.appendChild(cardImage);

    roundForComputer++;
  }
  if (
    kisumme > 21 ||
    (kisumme < 21 && kisumme < sumPlayers[currentPlayer - 1])
  ) {
    showPopup("you win; comp too high");
  }
  if (kisumme < 21 && kisumme > sumPlayers[currentPlayer - 1]) {
    showPopup("you lose");
  }
}

// game startup
let kisumme = 0;
let roundForComputer = 0;
let unknownCardImageUrl = "";

while (roundForComputer < 2) {
  console.log(roundForComputer);

  const randomCard = getRandomCard();
  const bankDiv = document.getElementById("bank");
  const cardImage = document.createElement("img");
  if (roundForComputer == 0) {
    console.log("Zufällige Karte:", randomCard);
    cardImage.src = randomCard.url;
  } else {
    cardImage.id = `unknownCard${roundForComputer}`;
    console.log("card image new: " + cardImage.id);
    cardImage.src = "images/cards/unknown.png";
    unknownCardImageUrl = randomCard.url;
  }
  cardImage.alt = randomCard.name;
  cardImage.className = "card";
  bankDiv.appendChild(cardImage);

  roundForComputer++;
  kisumme += randomCard.value;

  console.log("Wert" + kisumme);

  if (kisumme === 21) {
    bankDiv.appendChild(cardImage);
    showPopup("you lose");
    break;
  }
}

export function showPopup(text) {
  const popupDiv = document.createElement("div");
  popupDiv.className = "popup";

  // text
  const popupText = document.createElement("p");
  popupText.textContent = text;
  popupDiv.appendChild(popupText);

  // play again button
  // const popupBtnPlay = document.createElement("button");
  // popupBtnPlay.setAttribute("onClick", "playAgain()");
  // popupBtnPlay.textContent = "Play again";
  //popupDiv.appendChild(popupBtnPlay);

  // reset button
  const popupBtnReset = document.createElement("button");
  popupBtnReset.setAttribute("onClick", "location.reload()");
  popupBtnReset.textContent = "Reset";
  popupDiv.appendChild(popupBtnReset);

  document.getElementById("popupContainer").appendChild(popupDiv);
}
