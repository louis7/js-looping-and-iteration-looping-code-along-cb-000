// Code your solutions in this file
function writeCards(names, specialEvent) {
  cards= [];
  for (let i = 0; i < names.length; i++) {
    cards.push('Thank you, ${names[i]}, for the wonderful ${specialEvent} gift!');

  }

  return cards;
}
