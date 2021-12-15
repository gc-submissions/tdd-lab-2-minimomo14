//formatCurrency(), getCoins()
function formatCurrency (amount) {
    let dollars = dollars.toFixed(2);
    if (amount >= 0) {
        return "$" + dollars;
    } else {
      dollars = dollars * -1;
      let dollars = dollars.toFixed(2);
      amount = "-$" + dollars; 
      return amount; 
    };
    
};

function getCoins () {

}

module.exports = {
    formatCurrency:formatCurrency,
    getCoins:getCoins
}