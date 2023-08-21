addItemsInDiv('card-1', 'cart-items', 'card-title-1');
addItemsInDiv('card-2', 'cart-items', 'card-title-2');
addItemsInDiv('card-3', 'cart-items', 'card-title-3');
addItemsInDiv('card-4', 'cart-items', 'card-title-4');
addItemsInDiv('card-5', 'cart-items', 'card-title-5');
addItemsInDiv('card-6', 'cart-items', 'card-title-6');
addItemsInDiv('card-7', 'cart-items', 'card-title-7');
addItemsInDiv('card-8', 'cart-items', 'card-title-8');
addItemsInDiv('card-9', 'cart-items', 'card-title-9');

getPriceFromCard('card-1', 'card-1-price');
getPriceFromCard('card-2', 'card-2-price');
getPriceFromCard('card-3', 'card-3-price');
getPriceFromCard('card-4', 'card-4-price');
getPriceFromCard('card-5', 'card-5-price');
getPriceFromCard('card-6', 'card-6-price');
getPriceFromCard('card-7', 'card-7-price');
getPriceFromCard('card-8', 'card-8-price');
getPriceFromCard('card-9', 'card-9-price');


document.getElementById('go-home').addEventListener('click', function(){
    deleteChildren('cart-items'); //cart empty

    //all value reset
    totalPrice = 0.00;
    setValueToElement("total-price", totalPrice.toFixed(2));
    discount = 0.00;
    totalPriceDiscount = 0.00;
    setValueToElement('discount', discount.toFixed(2));
    setValueToElement('total', totalPriceDiscount.toFixed(2));

    //make purchase button disable
    const makePurchaseButton = document.getElementById("make-purchase");
    makePurchaseButton.setAttribute('disabled', true);
    makePurchaseButton.classList.remove("text-white");
    makePurchaseButton.classList.add("text-gray-300");

    //promocode section reset
    document.getElementById('promocode-field').value = '';
    const promocodeBtn = document.getElementById('promocode-btn');
    promocodeBtn.setAttribute('disabled', true);
    promocodeBtn.classList.remove("text-white");
    promocodeBtn.classList.add("text-gray-300");

    childCount =0;
})
