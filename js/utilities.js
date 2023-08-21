//function for adding new elements in a div
let childCount = 0;
let totalPrice = getValueFromElement("total-price");
function addItemsInDiv(clickedElementId, divIdWhereAdd, idWhatAdd) {
  const whereAdd = document.getElementById(divIdWhereAdd);

  const whatAdd = document.getElementById(idWhatAdd).innerText;

  document
    .getElementById(clickedElementId)
    .addEventListener("click", function () {
      const newElement = document.createElement("p");
      newElement.innerHTML = `
        ${childCount + 1} . ${whatAdd}
    `;
      newElement.classList.add("text-2xl");
      newElement.classList.add("font-medium");
      newElement.classList.add("mb-4");
      const hiddenHr = document.getElementById("hidden-hr");
      hiddenHr.classList.remove("hidden");

      whereAdd.appendChild(newElement);
      childCount++;
    });
}

//function for getting value form an element
function getValueFromElement(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);

  return elementValue;
}

//function for setting vale to an element
function setValueToElement(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

//function for getting price after clicking on card
function getPriceFromCard(cardId, cardPriceId) {
  document.getElementById(cardId).addEventListener("click", function () {
    const cardPrice = getValueFromElement(cardPriceId);
    totalPrice = totalPrice + cardPrice;
    //checking purchasable or not
    const makePurchaseButton = document.getElementById("make-purchase");
    if (totalPrice > 0.0) {
      makePurchaseButton.removeAttribute("disabled");
      makePurchaseButton.classList.remove("text-gray-300");
      makePurchaseButton.classList.add("text-white");
    }
    //checking promocode
    const promoCodeBtn = document.getElementById('promocode-btn');
    if(totalPrice >= 200.00){
        promoCodeBtn.removeAttribute('disabled');
        promoCodeBtn.classList.remove('text-gray-300');           
        promoCodeBtn.classList.add('text-white');
    }
    else{
        promoCodeBtn.setAttribute('disabled', true);
        promoCodeBtn.classList.remove('text-white');
        promoCodeBtn.classList.add('text-gray-300');
    }
    //after typing the promocode 20% discount calculation
    document.getElementById('promocode-field').addEventListener('keyup', function(event){
        const promoCodeFieldText = event.target.value;
      
        function apply(){
          if(document.getElementById('promocode-field').value.length === 7){
            let discount = totalPrice * 0.2;
            let totalPriceDiscount = totalPrice - discount;
            setValueToElement('discount', discount.toFixed(2));
            setValueToElement('total', totalPriceDiscount.toFixed(2));
          }
        }
        if(promoCodeFieldText === 'SELL200'){
            document.getElementById('promocode-btn').addEventListener('click', apply);
        }
        
    })
    setValueToElement("total-price", totalPrice.toFixed(2));
    setValueToElement('total', totalPrice.toFixed(2));
  });
}

//function for deleting children
function deleteChildren(elementId){
  document.getElementById('hidden-hr').classList.add('hidden');
  const element  = document.getElementById(elementId);
  element.innerHTML = '';
}

