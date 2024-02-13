let cards = [
  {
    name: "2hearts",
    value: 2,
    url: "images/cards/2_of_hearts.png",
  },
  {
    name: "3hearts",
    value: 3,
    url: "images/cards/3_of_hearts.png",
  },
  {
    name: "acehearts",
    value: 11,
    url: "images/cards/ace_of_hearts.png",
  },
  {
    name: "4hearts",
    value: 4,
    url: "images/cards/4_of_hearts.png",
  },
  {
    name: "5hearts",
    value: 5,
    url: "images/cards/5_of_hearts.png",
  },
  {
    name: "6hearts",
    value: 6,
    url: "images/cards/6_of_hearts.png",
  },
  {
    name: "7hearts",
    value: 7,
    url: "images/cards/7_of_hearts.png",
  },
  {
    name: "8hearts",
    value: 8,
    url: "images/cards/8_of_hearts.png",
  },
  {
    name: "9hearts",
    value: 9,
    url: "images/cards/9_of_hearts.png",
  },
  {
    name: "10hearts",
    value: 10,
    url: "images/cards/10_of_hearts.png",
  },
  {
    name: "jackhearts",
    value: 10,
    url: "images/cards/jack_of_hearts2.png",
  },
  {
    name: "queenhearts",
    value: 10,
    url: "images/cards/queen_of_hearts2.png",
  },
  {
    name: "kinghearts",
    value: 10,
    url: "images/cards/king_of_hearts2.png",
  },
  {
    name: "2spades",
    value: 2,
    url: "images/cards/2_of_spades.png",
  },
  {
    name: "3spades",
    value: 3,
    url: "images/cards/3_of_spades.png",
  },
  {
    name: "acespades",
    value: 11,
    url: "images/cards/ace_of_spades.png",
  },
  {
    name: "4spades",
    value: 4,
    url: "images/cards/4_of_spades.png",
  },
  {
    name: "5spades",
    value: 5,
    url: "images/cards/5_of_spades.png",
  },
  {
    name: "6spades",
    value: 6,
    url: "images/cards/6_of_spades.png",
  },
  {
    name: "7spades",
    value: 7,
    url: "images/cards/7_of_spades.png",
  },
  {
    name: "8spades",
    value: 8,
    url: "images/cards/8_of_spades.png",
  },
  {
    name: "9spades",
    value: 9,
    url: "images/cards/9_of_spades.png",
  },
  {
    name: "10spades",
    value: 10,
    url: "images/cards/10_of_spades.png",
  },
  {
    name: "jackspades",
    value: 10,
    url: "images/cards/jack_of_spades2.png",
  },
  {
    name: "queenspades",
    value: 10,
    url: "images/cards/queen_of_spades2.png",
  },
  {
    name: "kingspades",
    value: 10,
    url: "images/cards/king_of_spades2.png",
  },
  {
    name: "2diamonds",
    value: 2,
    url: "images/cards/2_of_diamonds.png",
  },
  {
    name: "3diamonds",
    value: 3,
    url: "images/cards/3_of_diamonds.png",
  },
  {
    name: "acediamonds",
    value: 11,
    url: "images/cards/ace_of_diamonds.png",
  },
  {
    name: "4diamonds",
    value: 4,
    url: "images/cards/4_of_diamonds.png",
  },
  {
    name: "5diamonds",
    value: 5,
    url: "images/cards/5_of_diamonds.png",
  },
  {
    name: "6diamonds",
    value: 6,
    url: "images/cards/6_of_diamonds.png",
  },
  {
    name: "7diamonds",
    value: 7,
    url: "images/cards/7_of_diamonds.png",
  },
  {
    name: "8diamonds",
    value: 8,
    url: "images/cards/8_of_diamonds.png",
  },
  {
    name: "9diamonds",
    value: 9,
    url: "images/cards/9_of_diamonds.png",
  },
  {
    name: "10diamonds",
    value: 10,
    url: "images/cards/10_of_diamonds.png",
  },
  {
    name: "jackdiamonds",
    value: 10,
    url: "images/cards/jack_of_diamonds2.png",
  },
  {
    name: "queendiamonds",
    value: 10,
    url: "images/cards/queen_of_diamonds2.png",
  },
  {
    name: "kingdiamonds",
    value: 10,
    url: "images/cards/king_of_diamonds2.png",
  },
  {
    name: "2clubs",
    value: 2,
    url: "images/cards/2_of_clubs.png",
  },
  {
    name: "3clubs",
    value: 3,
    url: "images/cards/3_of_clubs.png",
  },
  {
    name: "aceclubs",
    value: 11,
    url: "images/cards/ace_of_clubs.png",
  },
  {
    name: "4clubs",
    value: 4,
    url: "images/cards/4_of_clubs.png",
  },
  {
    name: "5clubs",
    value: 5,
    url: "images/cards/5_of_clubs.png",
  },
  {
    name: "6clubs",
    value: 6,
    url: "images/cards/6_of_clubs.png",
  },
  {
    name: "7clubs",
    value: 7,
    url: "images/cards/7_of_clubs.png",
  },
  {
    name: "8clubs",
    value: 8,
    url: "images/cards/8_of_clubs.png",
  },
  {
    name: "9clubs",
    value: 9,
    url: "images/cards/9_of_clubs.png",
  },
  {
    name: "10clubs",
    value: 10,
    url: "images/cards/10_of_clubs.png",
  },
  {
    name: "jackclubs",
    value: 10,
    url: "images/cards/jack_of_clubs2.png",
  },
  {
    name: "queenclubs",
    value: 10,
    url: "images/cards/queen_of_clubs2.png",
  },
  {
    name: "kingclubs",
    value: 10,
    url: "images/cards/king_of_clubs2.png",
  },
];

export function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}
