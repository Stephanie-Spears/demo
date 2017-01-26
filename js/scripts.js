var Pizza = function(size) {
  this.toppings = []
  this.pizzaSize = size;
  this.price = 15;
}
var toppings = [
  ['cheese', 1.5],
  ['pepperoni', 2.0],
  ['olives', 2.0],
  ['bell peppers', 2.0],
  ['mushrooms', 2.0],
  ['ham', 2.0],
  ['pineapple', 2.0]
];
alert(toppings[1][1]);

Pizza.prototype.getToppingPrice(number) {
  this.price += topping[number][1];
}
Pizza.prototype.writePizzaSpecs() {
  var str = "<h5>" + "</h5><br><ul>"
  for (var i = 0; i < this.toppings.length; i++) {
    str = str + "<li>" + this.toppings[i][0] + "</li>";
  }
  str += "</ul>"
  return str;
}
Order.prototype.getToppingName(number) {
  this.price += topping[number][0];
}


var Order = function() {
  this.pizzaArray = []; //number of pizzas in order
  this.totalPrice = 0;
}
//
Order.prototype.calcPrice = function(myOrder) {
  var myArray = myOrder.pizzaArray;
  for (var i = 0; i < myArray; i++) {
    myOrder.totalPrice += myArray[i].price;
  }
};
var testp = new Pizza(1);
var test = new Order();

test.pizzaArray.push(testp);
test.calcPrice(test);

alert("testp: " + testp)
alert("test.pizzaArray: " + test.pizzaArray);
alert("test: " + test);
alert("test.totalPrice: " + test.totalPrice);
test.totalPrice);
