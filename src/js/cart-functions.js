//calculateChange,isSufficientPayment,calculateTotal,addItem,removeItem

function calculateChange (total,payment) {
    let change = payment-total;
    //change = change.toFixed(2);
    return change;
}
console.log(calculateChange(5,6))

function isSufficientPayment(total,payment){
    if (payment >= total) { 
        return true;        
    } else {
        return false;
    }
    //return isSufficientPayment;
}

console.log(isSufficientPayment(5,6));
/////////

function calculateTotal (itemsArray) {
    //start with set up total
    let total = 0;
    //look at each item in the array
    for (let i=0; i<itemsArray.length; i++) {
        total += itemsArray[i].price;
      // or// total = total + itemsArray[i].price
    };
    //add up the price property
    return total;

};

//////

function addItem (itemsArray, name, price) {
    itemsArray.push[{name: "Beans", price: 3}];
    //return itemsArray;
}

///////
//removeItem
function removeItem (itemsArray, index) {
    itemsArray.splice(index, 1);
    return itemsArray;
}

module.exports = {
    calculateChange:calculateChange,
    isSufficientPayment:isSufficientPayment,
    calculateTotal:calculateTotal,
    addItem:addItem,
    removeItem:removeItem
}
