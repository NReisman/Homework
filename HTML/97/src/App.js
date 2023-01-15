import { Component } from 'react';
import './App.css';
import OrderComponent from './OrderComponent';

class App extends Component {
  state = {
    orders: [

      {
        "customer": "Bob <img onerror=\"alert('youve been hacked')\" style=\"display:none\" src=\"foo\">",
        "address": "123 Any Street Lakewood NJ 08701",
        "items": [
          {
            "item": "cookies",
            "quantity": 5,
            "total": 4.95
          },
          {
            "item": "jelly beans",
            "quantity": 2,
            "total": 3
          }
        ]
      },
      {
        "customer": "Joe",
        "address": "456 Any Street Lakewood NJ 08701",
        "items": [
          {
            "item": "carrots",
            "quantity": 3,
            "total": 1.02
          }
        ]
      }
    ],
    selectedOrder: 0
  }

  render() {
    const orders = this.state.orders.map((o, i) => <li>{o.customer}</li>);
    return (
      <div className="container text-center">
        <h1>PCS Orders</h1>
        <div>
          <ul className="bulletless">{orders}</ul>
        </div>
        <hr />
        <OrderComponent order={this.state.orders[this.state.selectedOrder]} />
      </div>
    );
  }
}

export default App;