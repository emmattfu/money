import React, { Component } from "react";
import "./Rate.css";

import Calc from '../Calc/Calc';

export default class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRate: {},
      date: ""
    };

    this.currency = ["USD", "RUB", "CAD", "PHP"];
    this.getRates();
  }

  getRates = () => {
    fetch("https://api.exchangeratesapi.io/latest")
      .then(data => data.json())
      .then(data => {
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        this.setState({ date: data.date });
        this.setState({ currentRate: result });
      });
  };

  render() {
    return (
      <div className="rate">
        <h3> Курс валют на {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currentRate).map(el =>  (<div className="block flex-item" key={el}>
              <div className="currency-name">{el}</div>
              <div className="currency-in">{this.state.currentRate[el].toFixed(2)}*</div>
              <p>* Можно получить за 1 EUR</p>
          </div>))}
        </div>
      <Calc rate={this.state.currentRate}/>
      </div>
    );
  }
}
