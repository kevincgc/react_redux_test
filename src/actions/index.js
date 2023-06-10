export function addCard(card) {
  return { type: 'ADD_CARD', data: card }
}

export function selectCard(i) {
  return { type: 'SELECT_CARD', index: i.index }
}

export function showDetails(s) {
  return { type: 'SHOW_DETAILS', show: s.val }
}

export function removeCard(i) {
  return { type: 'REMOVE_CARD', index: i.index }
}