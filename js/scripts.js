var Pizza = function() {
  this.toppings = []
  this.pizzaSize = ;
  this.price = 1;
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


Pizza.prototype.getToppingPrice = function(number) {
  this.price += topping[number][1];
}
Pizza.prototype.getSizePrice = function(number) {
  switch (number) {
    case 0:
      this.price += 10;
      break; //small size
    case 1:
      this.price += 12;
      break;
    case 2:
      this.price += 14;
      break;
    case 3:
      this.price += 18;
      break; //XL size
    default:
      alert("there is an error in size section");
  }
}

Pizza.prototype.writePizzaSpecs = function() {
  var str = "<h5>" + "</h5><br><ul>"
  for (var i = 0; i < this.toppings.length; i++) {
    str = str + "<li>" + this.toppings[i][0] + "</li>";
  }
  str += "</ul>"
  return str;
}


var Order = function() {
  this.pizzaArray = []; //number of pizzas in order
  this.totalPrice = 0;
}
//
Order.prototype.calcPrice = function() {
  var myArray = this.pizzaArray;
  for (var i = 0; i < myArray; i++) {
    this.totalPrice += myArray[i].price;
  }
};
var p1 = new Pizza();
var p2 = new Pizza();

var o1 = new Order();

o1.pizzaArray.push(p1);
o1.pizzaArray.push(p2);

o1.calcPrice();
alert(o1.totalPrice)

$(document).ready(function() {


    }




    //
    // var testp = new Pizza(1);
    // var test = new Order();
    //
    // test.pizzaArray.push(testp);
    // test.calcPrice(test);
    //
    // alert("testp: " + testp)
    // alert("test.pizzaArray: " + test.pizzaArray);
    // alert("test: " + test);
    // alert("test.totalPrice: " + test.totalPrice);
    // test.totalPrice);
