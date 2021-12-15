const {calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem}  = require("../src/js/cart-functions.js")

describe("calculateChange", () => {
  test("Given total 5 and payment 6, return 1.00", function (){
  expect(calculateChange(5,6)).toEqual(1);
});

test("Given total 12.30 and payment 13.03, return 0.73", function (){
  expect(calculateChange(12.30,13.03)).toBeCloseTo(0.73);
});

test("Given total 45 and payment 50, return 5.00", function (){
  expect(calculateChange(45,50)).toEqual(5);
});
});

describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6, return true", function(){
    expect(isSufficientPayment(5,6)).toEqual(true);
  });

  test("Given total 10 and payment 7, return false", function(){
    expect(isSufficientPayment(10,7)).toEqual(false);
  });

  test("Given total 3 and payment 3, return true", function(){
    expect(isSufficientPayment(3,3)).toEqual(true);
  });

  test("Given total 115 and payment 50, return false", function(){
    expect(isSufficientPayment(115,50)).toEqual(false);
  });
  
});

describe("calculateTotal", () => {
  test("one item priced 4.99 return 4.99", ()=>{
    expect(calculateTotal({name:"Jelly", price:4.99})).toBeCloseTo(4.99);
  });

  test("three item priced 3.50,12.99,0.03 return 16.52", ()=>{
    expect(calculateTotal(
      {name:"Jelly", price:3.50},
      {name:"Ground Turkey", price:12.99},
      {name:"Misc", price:0.03})
      ).toBeCloseTo(16.52);
  });

  test("empty array returns 0", function(){
    expect(cartFunctions.calculateTotal([])).toEqual(0);
  });

  test("two items priced 3.50,12.99 returns 16.49", function(){
    expect(cartFunctions.calculateTotal([
      {name:"Jelly", price:3.50},
      {name:"Ground Turkey", price:12.99},
    ])).toBeCloseTo(16.49);
  });

});

describe("addItem", () => {
  
  //addItem(results, "Beans", 3); //call function to mpdify array
  test("processing an empty array adds one item", function(){
    let results = []; // set up empty array
    expect(results).toEqual([{name: "Beans", price: 3}]);
  });

  test("processing one item array adds two items", function(){
    let results = [{name: "Beans", price:3}]
    addItem(results, "Sugar", 2);
    expect(results).toEqual([
      {name: "Beans", price: 3},
      {name: "Sugar", price: 2}
    
    ]);
  });

  test("processing two items array adds three items", function(){
    let results = [{name: "Beans", price:3},{name: "Sugar", price: 2}]
    addItem(results, "Ground Turkey", 12.99);
    expect(results).toEqual([
      {name: "Beans", price: 3},
      {name: "Sugar", price: 2},
      {name: "Ground Terkey", price: 12.99}
    ]);
  });

});

describe("removeItem", () => {
  test("remove from index 0", function() {
    expect(removeItem()).toEqual();
    //create array to passing on
    let array = [
      {name: "Beans", price: 3},
      {name: "Sugar", price: 2},
      {name: "Taco", price: 4}
    ];
    //call function
    removeItem(array,0)
    expect(removeItem(array)).toEqual([
      {name: "Sugar", price: 2},
      {name: "Taco", price: 4}
    ])
  });
});

