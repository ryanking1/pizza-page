describe('Pizza', function() {
  it('creates a new pizza', function() {
    var testPizza = new Pizza("large", 2, "pepperoni");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.number).to.equal(2);
    expect(testPizza.topping).to.equal("pepperoni");
  });

  it('calculates total value of pizza based on size, toppings, and number', function() {
    var testPizza = new Pizza("large", 1, "pepperoni, cheese");

    expect(testPizza.totalCost()).to.equal(11.25);
  });

});

