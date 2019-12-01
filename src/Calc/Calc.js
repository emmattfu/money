import React, { Component } from "react";
import "./Calc.css";

export default class Calc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      money: '150',
      currency: 'USD',
      result: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calculate = e => {
    e.preventDefault();
    this.setState({result: (this.state.money / this.state.rate[this.state.currency])})
  }


  changeMoney = e => {
    this.setState({[e.target.name] : e.target.value})
  }
 
  render() {
    let a;

    !this.state.money ? a = <p>Введите подходящую сумму</p> : a = '';

    return (
      <div className="calc">
        <h3> Калькулятор обмена</h3>
        <div className="block">
          <div>Я хочу</div>
          <div>
            <form onSubmit={this.calculate}>
              <input className='form-item' type="number" min='0' defaultValue={this.state.money} name='money' onChange={this.changeMoney}/>
              <select className='form-item' value={this.state.currency} name='currency' onChange={this.changeMoney}>
                {Object.keys(this.state.rate).map(el => {
                  return (
                    <option value={el} key={el}>{el}</option>
                  );
                })}
              </select>
              <input className='form-item' type='submit' />
            </form>
            {a}
          </div>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>EUR {this.state.result.toFixed(2)}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
