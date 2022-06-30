export default function checkCard(numberCard) {
  const visa = new RegExp('^4');
  const master = new RegExp('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)');
  const amex = new RegExp('^3[47]');
  const discover = new RegExp('^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])');
  const jcb = new RegExp('^352[8-9]|35[3-8]');
  const diners = new RegExp('^30[0-5]|36|54');
  const mir = new RegExp('^2');

  let card = 'null';
  if (numberCard.match(visa)) {
    card = 'visa';
  } else if (numberCard.match(master)) {
    card = 'master';
  } else if (numberCard.match(amex)) {
    card = 'amex';
  } else if (numberCard.match(discover)) {
    card = 'discover';
  } else if (numberCard.match(jcb)) {
    card = 'jcb';
  } else if (numberCard.match(diners)) {
    card = 'diners';
  } else if (numberCard.match(mir)) {
    card = 'mir';
  }
  return card;
}
