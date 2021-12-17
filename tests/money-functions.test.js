//const { getCoins } = require("../src/js/money-functions");
const moneyFunctions = require("../src/js/money-functions")

describe("formatCurrency", () => {
  // test(), () => {
 //   expect(()).toEqual();
 // } 
 test("given amount 0 get back $0.00", function(){
    expect(moneyFunctions.formatCurrency(0)).toEqual("$0.00")
  });  
 test("given amount 1 get back $1.00", function(){
    expect(moneyFunctions.formatCurrency(1)).toEqual("$1.00")
  });
  test("given amount 1.5 get back $1.50", function(){
    expect(moneyFunctions.formatCurrency(1.5)).toEqual("$1.50")
  });

  test("given amount 0.01 get back $0.01", function(){
    expect(moneyFunctions.formatCurrency(0.01)).toEqual("$0.01")
  });
  test("given amount 527.6789 get back $527.6789", function(){
    expect(moneyFunctions.formatCurrency(527.6789)).toEqual("$527.68")
  });
  test("given amount -1 get back -$1.00", function(){
    expect(moneyFunctions.formatCurrency(-1)).toEqual("-$1.00")
  });
   test("any amount 20 get back $20.00", function(){
    expect(moneyFunctions.formatCurrency(20)).toEqual("$20.00")
  });
   test("any amount 999 get back $999.00", function(){
    expect(moneyFunctions.formatCurrency(999)).toEqual("$999.00")
  });
});


describe("getCoins", () => {
  test("32 cents produces: Q:1,D:0,N:1,P:2", function(){
    expect(moneyFunctions.getCoins(1,0,1,2)).toEqual(32);
  });
  test("10 cents produces: Q:0,D:1,N:0,P:", function(){
    expect(moneyFunctions.getCoins(0,1,0,0)).toEqual(10);
  });
  test("27 cents produces: Q:1,D:0,N:0,P:2", function(){
    expect(moneyFunctions.getCoins(1,0,0,2)).toEqual(27);
  });
  test("68 cents produces: Q:2,D:1,N:1,P:3", function(){
    expect(moneyFunctions.getCoins(2,1,1,3)).toEqual(68);
  });
});