(function () {

  // SL - Why would we need to save the totals out of the items instead of just asking the items for their totals?
  // and having a shared prevTotals wont work. All orders totals are mixed together. You need this to be per order (or at least clear out between processing orders)
let prevTotals = [];

// SL - what is this one for? You never do anythign with it
let prevTotal;

class Item {
    constructor(itemName, price, qty) {
        this.itemName = itemName;
        this._price = price;
        this.qty = qty;

        // SL - ok, but we could always calculate when needed. What if someone changes price or quantity? Better remenmber to update total as well...
        this.total = (this._price * this.qty);

    }

    // SL - given your implementation looks like only needed code would be prevTotals.push(this.total) rest is useless.
    saveTotal() {
        prevTotal = this.total;
        prevTotals.push(prevTotal);
        return prevTotal;
    }
}

class Order {

    constructor(cName, cAddress, itemArray) {
        this.cName = cName;
        this.cAddress = cAddress;
        this.arrayName = itemArray || [];

        // SL - this is not a getter, its a function - and its not done as a class member, its done by adding a function to each object in the constructor. Why?
        this.grandTotal =
            function () {
                let total1 = 0;
                for (var i in prevTotals) {
                    total1 += prevTotals[i];
                }
                return total1;
            };
    }

}

function myOrders() {

  // SL - not a problem, but async await is much more popular nowadays then .then
    fetch('orders.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

}

// SL - hard coded to work for exactly 2 orders, where first has 2 items and second has 1. We need any number of orders and any number of items. We should be looping through arrays, not hard coding things
// SL - the total of the second order includes the total of the first order since you dont clear out
function appendData(data) {
    var mainContainer = document.getElementById("myData");
    let item1 = new Item(data[0].items[0].item, (data[0].items[0].total / data[0].items[0].quantity), data[0].items[0].quantity);
    item1.saveTotal();
    let item2 = new Item(data[0].items[1].item, (data[0].items[1].total / data[0].items[1].quantity), data[0].items[1].quantity);
    item2.saveTotal();
    let itemArray = [item1, item2];
    let order1 = new Order(data[0].customer, data[0].address, itemArray);
    var div = document.createElement("div");
    div.innerHTML = 'Customer: ' + order1.cName + "<br />" + 'Address: ' + order1.cAddress + "<br />" + 'Total: ' + order1.grandTotal()
        + "<br />" + "<br />" + 'Items:' + "<br />" + 'Item: ' + item1.itemName + "<br />" + "Quantity: " + item1.qty + "<br />" + "Price: " + item1._price
        + "<br />" + "<br />" + 'Item: ' + item2.itemName + "<br />" + "Quantity: " + item2.qty + "<br />" + "Price: " + item2._price;


    let itemA = new Item(data[1].items[0].item, (data[1].items[0].total / data[1].items[0].quantity), data[1].items[0].quantity);
    let itemArray2 = [itemA];

    // SL - will add this items total to prevTotals which already has totals from previous order. Second orders total will include first orders totals.
    itemA.saveTotal();
    let order2 = new Order(data[1].customer, data[1].address, itemArray2);
    var div2 = document.createElement("div");
    div2.innerHTML = 'Customer: ' + order2.cName + "<br />" + 'Address: ' + order2.cAddress + "<br />" + 'Total: ' + order2.grandTotal()
        + "<br />" + "<br />" + 'Items:' + "<br />" + 'Item: ' + itemA.itemName + "<br />" + "Quantity: " + itemA.qty + "<br />" + "Price: " + itemA._price;
;

    mainContainer.appendChild(div);
    mainContainer.appendChild(div2);
}

window.onload = function () {

    var btn = document.getElementById("btn");

    btn.addEventListener("click", myOrders);
};
}());

// SL - looks like maybe you could use some more practice. Im not sure why you felt you need to store item totals out of the items. That seems like maybe you need more practice using objects (and classes). Also hard coding the number of orders and items instead of iterating through the arrays I think shows lack of comfort using arrays. I would practice using arrays (maybe redo some of the early array homeworks we did)

// SL - grade 80