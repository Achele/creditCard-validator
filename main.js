/** PSEUDOCODE
 *
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
}

const cardNumber = "1234-5678-9012-3452"; // Replace with the actual card number
const validationMessage = validateCreditCard(cardNumber);
console.log(validationMessage);
