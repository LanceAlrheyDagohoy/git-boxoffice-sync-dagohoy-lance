function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isPremium) {
    var total = quantity * basePrice;

    if (quantity >= 5) {
        total = total * 0.90;
    }

    if (isPremium) {
        total = total * 1.50;
    }

    total = total - 10;

    return Math.round(total);
}


module.exports = { isValidQuantity, calculateTicketPrice };
