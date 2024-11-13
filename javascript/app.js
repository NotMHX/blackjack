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


input1.type = "number";
input2.type = "number";
input3.type = "number";


input1.placeholder = "Bet Coins Player 1";
input2.placeholder = "Bet Coins Player 2";
input3.placeholder = "Bet Coins Player 3";


let test = document.getElementById("test");
test.appendChild(input1);
test.appendChild(input2);
test.appendChild(input3);
button.textContent = "Bet Coins";
betCoins();



function betCoins() {
  console.log("start");

  document.getElementById("popupContainer").innerHTML = "";
  document.getElementById("playerTitle1").textContent = `Spieler 1 (${kontoPlayer[0]} Coins)`;
  document.getElementById("playerTitle2").textContent = `Spieler 2 (${kontoPlayer[1]} Coins)`;
  document.getElementById("playerTitle3").textContent = `Spieler 3 (${kontoPlayer[2]} Coins)`;

  button.addEventListener("click", () => {
    console.log("Bet Coins");
    amount[0] = parseInt(input1.value) || 0;
    amount[1] = parseInt(input2.value) || 0;
    amount[2] = parseInt(input3.value) || 0;

    let validBets = true;

    for (let i = 0; i < playerCount; i++) {
      if (kontoPlayer[i] === 0) {

        showPopup(`Player ${i + 1} hat keine Coins mehr und kann nicht teilnehmen.`);
        validBets = false;
      } else if (amount[i] <= 0 || amount[i] > kontoPlayer[i]) {

        showPopup(`Player ${i + 1} muss zwischen 1 und ${kontoPlayer[i]} Coins setzen.`);
        validBets = false;
      }
    }
    document.getElementById("buttonHit").style.display = "block";
    document.getElementById("buttonStand").style.display = "block";

    currentCard = 1;
    sumBank = 0;
    sumPlayers[0] = 0;
    sumPlayers[1] = 0;
    sumPlayers[2] = 0;
    unknownCardImageUrl = "";
    order = 1;
    console.log(input1.value);
    amount[0] = input1.value;
    amount[1] = input2.value;
    amount[2] = input3.value;

    console.log(amount);

        if (validBets == true) {
      startGame();
    }
  });

  test.appendChild(button);
}

function tradeCoins() {
  for (let i = 0; i < 3; i++) {
    if (
      (sumPlayers[i] <= 21 && sumPlayers[i] > sumBank) ||
      (sumPlayers[i] <= 21 && sumBank > 21)
    ) {
      kontoPlayer[i] += Number(amount[i]);
      showPopup(`win Player ${i}`);
    } else {
      kontoPlayer[i] -= amount[i];
    }

    if (kontoPlayer[i] < 0) {
      location.reload();
    }

  }
  showPopup("Game Over");

}

function startGame() {


  clearExistingCards();

  document.getElementById("playerTitle1").textContent = `Spieler 1 (${kontoPlayer[0]} Coins)`;
  document.getElementById("playerTitle2").textContent = `Spieler 2 (${kontoPlayer[1]} Coins)`;
  document.getElementById("playerTitle3").textContent = `Spieler 3 (${kontoPlayer[2]} Coins)`;

  console.log(currentCard)


  for (currentCard; currentCard <= 2; currentCard++) {

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


    if (sumBank === 21) {
      bankDiv.appendChild(cardImage);
      showPopup("Game Over");
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


    if (order == playerCount) {
      document.getElementById(`player${order}`).style.backgroundColor = "gray";
      showPopup("The bank won");
    } else {
      nextPlayer();
      document.getElementById(`player${order - 1}`).style.backgroundColor =
        "gray";
    }
  }
}

function checkSum(currentPlayer) {
  if (order == playerCount) {

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

    let lastIndex = currentCard - 1;
    console.log("the last index is " + lastIndex);
    let lastImage = document.getElementById(`unknownCard${lastIndex}`);
    console.log("last card: " + lastImage.src);
    lastImage.src = unknownCardImageUrl;


    document.getElementById(`unknownCard${lastIndex}`).remove();
    displayDiv.appendChild(lastImage);


    displayDiv.appendChild(cardImage);

    tradeCoins();
  } else {
    nextPlayer();
  }
}

export function showPopup(text) {
  const popupDiv = document.createElement("div");
  popupDiv.className = "popup";


  const popupText = document.createElement("p");
  popupText.textContent = text;
  popupDiv.appendChild(popupText);


  const popupBtnPlay = document.createElement("button");
  popupBtnPlay.addEventListener("click", () => betCoins());
  popupBtnPlay.textContent = "Play again";
  popupDiv.appendChild(popupBtnPlay);


  const popupBtnReset = document.createElement("button");
  popupBtnReset.setAttribute("onClick", "location.reload()");
  popupBtnReset.textContent = "Reset";
  popupDiv.appendChild(popupBtnReset);

  document.getElementById("popupContainer").appendChild(popupDiv);
}

function clearExistingCards() {

  for (let i = 1; i <= playerCount; i++) {
    const playerDiv = document.getElementById(`player${i}`);
    const cardImages = playerDiv.getElementsByTagName("img");
    if (cardImages.length > 0) {
      while (cardImages.length > 0) {
        cardImages[0].remove();
      }
    }
  }


  const bankDiv = document.getElementById("bank");
  const bankCardImages = bankDiv.getElementsByTagName("img");
  if (bankCardImages.length > 0) {
    while (bankCardImages.length > 0) {
      bankCardImages[0].remove();
    }
  }
}
