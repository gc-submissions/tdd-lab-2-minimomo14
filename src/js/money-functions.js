//formatCurrency(), getCoins()

function formatCurrency (amount) {
    amount = amount.toFixed(2);
    if (amount >= 0) {
        return "$" + amount;
    } else {
      amount = amount * -1;
      //let dollars = dollars.toFixed(2);
      amount = "-$" + amount.toFixed(2); 
      return amount; 
    };
    
};

function getCoins (cents) {
    let coins = [{quarter:25},{dimes:10},{nickle:5},{pennies:1}];
    console.log("is this lod ?!",coins)
    for (let i=0; i<coins.length; i++){
        cents = cents + coins[i]
    }
    return cents;
  }
console.log(cents(1,0,1,2));

module.exports = {
    formatCurrency:formatCurrency,
    getCoins:getCoins
}