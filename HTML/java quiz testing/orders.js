(function () {
let prevTotals = [];
let prevTotal;
class Item {
    constructor(itemName, price, qty) {
        this.itemName = itemName;
        this._price = price;
        this.qty = qty;
        this.total = (this._price * this.qty);

    }

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