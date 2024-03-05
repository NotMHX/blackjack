import { getRandomCard } from "./cards.js";
document
  .getElementById("buttonHit")
  .addEventListener("click", () => drawThirdCard(order));
document
  .getElementById("buttonStand")
  .addEventListener("click", () => checkSum(order));

document.getElementById("buttonStand").style.display = "none";
document.getElementById("buttonHit").style.display = "none";

let sumPlayers = [0, 0, 0];
let sumBank = 0;
let unknownCardImageUrl = "";
let currentCard = 1;
let playerCount = 3;
let order = 1;
let kontoPlayer = [100, 100, 100];
let amount = [0, 0, 0];
document.getElementById(`player1`).style.backgroundColor = "#30beee";
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");
let button = document.createElement("button");

// Setze die Typen der Eingabefelder
input1.type = "number";
input2.type = "number";
input3.type = "number";

// Setze Platzhaltertext für die Eingabefelder
input1.placeholder = "Bet Coins Player 1";
input2.placeholder = "Bet Coins Player 2";
input3.placeholder = "Bet Coins Player 3";

// Füge die Eingabefelder dem DOM hinzu
let test = document.getElementById("test");
test.appendChild(input1);
test.appendChild(input2);
test.appendChild(input3);
button.textContent = "Bet Coins";
betCoins();

function betCoins() {
  console.log("start");


  document.getElementById("popupContainer").innerHTML = "";
  currentCard = 1;
  sumBank = 0;
  sumPlayers[0] = 0;
  sumPlayers[1] = 0;
  sumPlayers[2] = 0;
  unknownCardImageUrl = "";
  order = 1;



  button.addEventListener("click", () => {
    console.log("Bet Coins");
    document.getElementById("buttonHit").style.display = "block";
    document.getElementById("buttonStand").style.display = "block";


    console.log(input1.value);
    amount[0] = input1.value;
    amount[1] = input2.value;
    amount[2] = input3.value;





    console.log(amount);

    startGame();
  });

  test.appendChild(button);
}

function tradeCoins() {
  for (let i = 0; i < 3; i++) {
    if (
      (sumPlayers[i] <= 21 && sumPlayers[i] > sumBank) ||
      (sumPlayers[i] <= 21 && sumBank > 21)
    ) {
      kontoPlayer[i] += Number(amount[i])
      showPopup(`win Player ${i}`);
    } else {
      kontoPlayer[i] -= amount[i];
    }
  }
  showPopup("loose player");
}

function startGame() {
  console.log(kontoPlayer);
  document.getElementById(
    "playerTitle1"
  ).textContent = `Spieler 1 (${kontoPlayer[0]})`;
  document.getElementById(
    "playerTitle2"
  ).textContent = `Spieler 2 (${kontoPlayer[1]})`;
  document.getElementById(
    "playerTitle3"
  ).textContent = `Spieler 3 (${kontoPlayer[2]})`;

  // gives every player & bank two cards
  for (currentCard; currentCard <= 2; currentCard++) {
    // to players
    for (let currentPlayer = 1; currentPlayer <= playerCount; currentPlayer++) {
      const randomCard = getRandomCard();
      console.log("Zufällige Karte:", randomCard);

      const displayDiv = document.getElementById(`player${currentPlayer}`);
      console.log("current display = " + `player${currentPlayer}`);

      const cardImage = document.createElement("img");
      cardImage.src = randomCard.url;
      cardImage.alt = randomCard.name;
      cardImage.className = "card";
      console.log(sumPlayers);
      displayDiv.appendChild(cardImage);
      sumPlayers[currentPlayer - 1] += randomCard.value;
      console.log(sumPlayers);
      if (sumPlayers[currentPlayer - 1] == 21) {
        if (order == 3) {
          order = 0;
          checkSum(order);
        }

        nextPlayer();
      }
    }
    console.log("current sum: " + sumPlayers);

    // to bank
    console.log(currentCard);

    const randomCard = getRandomCard();
    const bankDiv = document.getElementById("bank");
    const cardImage = document.createElement("img");
    if (currentCard == 1) {
      console.log("Zufällige Karte:", randomCard);
      cardImage.src = randomCard.url;
    } else {
      cardImage.id = `unknownCard${currentCard}`;
      console.log("card image new: " + cardImage.id);
      cardImage.src = "images/cards/unknown.png";
      unknownCardImageUrl = randomCard.url;
    }
    cardImage.alt = randomCard.name;
    cardImage.className = "card";
    bankDiv.appendChild(cardImage);

    sumBank += randomCard.value;

    console.log("Wert" + sumBank);

    if (sumBank === 21) {
      bankDiv.appendChild(cardImage);
      showPopup("you lose");
      break;
    }
  }
}

function nextPlayer() {
  let lastColor;
  if (order == playerCount) {
    holdCards(order);
    order = 0;
    lastColor = playerCount;
  } else {
    order++;
    lastColor = order - 1;
  }
  console.log(
    "the last color is " + lastColor + " and the current order is " + order
  );
  document.getElementById(`player${order}`).style.backgroundColor = "#30beee";
  document.getElementById(`player${lastColor}`).style.backgroundColor =
    "lightblue";
}

function drawThirdCard(currentPlayer) {
  if (sumPlayers[currentPlayer - 1] < 21) {
    const displayDiv = document.getElementById(`player${currentPlayer}`);
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
    console.log(order);
    // grey out current player

    if (order == playerCount) {
      document.getElementById(`player${order}`).style.backgroundColor = "gray";
      showPopup("The computer won, you all lost.");
    } else {
      nextPlayer();
      document.getElementById(`player${order - 1}`).style.backgroundColor =
        "gray";
    }
  }
}

function checkSum(currentPlayer) {
  if (order == playerCount) {
    while (sumBank < 17) {
      const displayDiv = document.getElementById("bank");
      const cardImage = document.createElement("img");
      while (sumBank < 17) {
        const randomCard = getRandomCard();

        cardImage.src = randomCard.url;
        cardImage.alt = randomCard.name;
        cardImage.className = "card";
        displayDiv.appendChild(cardImage);
        sumBank += randomCard.value;
      }
      // replace url of last image
      let lastIndex = currentCard - 1;
      console.log("the last index is " + lastIndex);
      let lastImage = document.getElementById(`unknownCard${lastIndex}`);
      console.log("last card: " + lastImage.src);
      lastImage.src = unknownCardImageUrl;

      // replace last image
      document.getElementById(`unknownCard${lastIndex}`).remove();
      displayDiv.appendChild(lastImage);

      // add new card
      displayDiv.appendChild(cardImage);
    }
    tradeCoins();
  } else {
    nextPlayer();
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
  const popupBtnPlay = document.createElement("button");
  popupBtnPlay.addEventListener("click", () => betCoins());
  popupBtnPlay.textContent = "Play again";
  popupDiv.appendChild(popupBtnPlay);

  // reset button
  const popupBtnReset = document.createElement("button");
  popupBtnReset.setAttribute("onClick", "location.reload()");
  popupBtnReset.textContent = "Reset";
  popupDiv.appendChild(popupBtnReset);

  document.getElementById("popupContainer").appendChild(popupDiv);
}
