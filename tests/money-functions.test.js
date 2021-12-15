const moneyFuctions = require("../src/js/money-functions")
describe("formatCurrency", () => {
  // test(), () => {
 //   expect(()).toEqual();
 // } 
 test("given amount 0 get back $0.00", function(){
    expect(moneyFunctions.formatCurrency(0)).toEqal("$0.00")
  });

  test("given amount 1 get back $1.00", function(){
    expect(moneyFunctions.formatCurrency(1)).toEqal("$1.00")
  });

  test("given amount 1.5 get back $1.50", function(){
    expect(moneyFunctions.formatCurrency(1.5)).toEqal("$1.50")
  });
  test("given amount 0.01 get back $0.01", function(){
    expect(moneyFunctions.formatCurrency(0.01)).toEqal("$0.01")
  });

  test("given amount 527.6789 get back $527.6789", function(){
    expect(moneyFunctions.formatCurrency(527.6789)).toEqal("$527.68")
  });

  test("given amount -1 get back -$1.00", function(){
    expect(moneyFunctions.formatCurrency(-1)).toBeCloseTo("-$1.00")
  });

  test("any amount 20 get back $20.00", function(){
    expect(moneyFunctions.formatCurrency(20)).toBeCloseTo("$20.00")
  });
  
  test("any amount 999 get back $999.00", function(){
    expect(moneyFunctions.formatCurrency(999)).toBeCloseTo("$999.00")
  });
  


});

describe("getCoins", () => {
  test.todo("add getCoins tests here");
});