/** PSEUDOCODE
 * check that the card number contains only digit
 * check the length
 * check the card type
 */

function validateCreditCard(cardNumber) {
  const cleanedCardNumber = cardNumber.replace(/[\s-]/g, "");

  // Check if the card number contains only digits and has a valid length
  if (!/^\d{13,19}$/.test(cleanedCardNumber)) {
    return "Invalid card number. Please enter a valid credit card number.";
  }

  // Check the card type (Visa or Mastercard)
  let cardType;
  if (/^4/.test(cleanedCardNumber)) {
    cardType = "Visa";
  } else if (/^5[1-5]/.test(cleanedCardNumber)) {
    cardType = "Mastercard";
  } else {
    return "Unsupported card type. Please enter a Visa or Mastercard.";
  }

  let sum = 0;
  let double = false;

  for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedCardNumber.charAt(i));

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    double = !double;
  }

  if (sum % 10 !== 0) {
    return "Invalid card number. Please enter a valid credit card number.";
  }

  return `Valid ${cardType} card number.`;
}

const cardNumber = "4187-4517-3951-1308"; // Replace with the actual card number
const validationMessage = validateCreditCard(cardNumber);
console.log(validationMessage);
