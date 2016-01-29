function Pizza(size, number, topping) {
  this.size = size;
  this.number = number;
  this.topping = topping;
}

Pizza.prototype.totalCost = function() {
  var toppingList = this.topping.split(" ");
  var toppingCost = ((toppingList.length * .75) * this.number);
  var sizeCost = 0;

  if (this.size === "large") {
    sizeCost = 10;
  } else if (this.size === "medium") {
    sizeCost = 7;
  } else if (this.size === "small") {
    sizeCost = 5;
  } else {
    sizeCost = 12;
  }

  var totalCost = toppingCost + (sizeCost * (parseInt(this.number)));
  return totalCost;
};

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    var costForAll = 0;
    event.preventDefault();

    $(".pizzaCreator").each(function() {
    var pizzaTopping = $("input#topping").val().toString();
    var size = $("select#size").val();
    var number = $("input#numberOfPizza").val();
    var pizza1 = new Pizza(size, number, pizzaTopping);
    $("#pizzaCostDisplay").show();
    $("#totalCost").text(number + " " + size + " " + "pizza(s) with " + pizzaTopping + " " + "will cost $" + pizza1.totalCost());
    costForAll += pizza1.totalCost();
  });

    $("#costForAllPizza").text("total cost for all pizza's will be $" + costForAll);
    $("select#size").val("Select Size");
    $("input#topping").val("");
    $("input#numberOfPizza").val("");

  });
  $("#addAnotherPizza").click(function(){
    $("#pizzaForms").append("<div class='pizzaCreator'><label for='pizzaSize'>Pizza Size: </label>" + " " + "<select id='size'>" +     "<option>Select Size</option>" +
    "<option value='family-size'>Family Size</option>" +
    "<option value='large'>Large</option>" +
    "<option value='medium'>Medium</option>" +
    "<option value='small'>Small</option>" +
    "</select>" + " " +
    "<label for='topping'>Toppings</label>" + " " +
    "<input type='text' id='topping' placeholder='Cheese, Pepperoni,...'>" + " " +
    "<label for='numberOfPizza'>Number of Pizzas:</label>" + " " +
    "<input type='text' id='numberOfPizza'> </div>");
  });

});
