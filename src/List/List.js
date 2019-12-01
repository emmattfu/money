import React, { Component } from 'react';
import './List.css';

export default class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        {adress: 'ул. Ленина, 41', phone: '+380666617604'},
        {adress: 'ул. Дружбы, 73а', phone: '+380666632704'},
        {adress: 'пр. Мира, 114а', phone: '+380876632704'},
        {adress: 'ул. Победы, 33а', phone: '+380669632704'},
        {adress: 'ул. Космонавтов, 3', phone: '+380666632724'},
        {adress: 'ул. Победы, 69', phone: '+380666632704'},
        {adress: 'ул. Победы, 3а', phone: '+380666632704'},
      ]
    }
  }
  render() {
    
    return (
      <div className="list">
        <h3 className="list-main-text">Список мест где вы можете получить наличные:</h3>
        {this.state.list.map((el, i) => {
          return <p className="list-item" key={i}>{el.adress}, телефон: {el.phone}</p>
        })}
      </div>
    )
  }
}
