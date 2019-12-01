import React, { Component } from "react";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="/list">Пункты обмена</a>
              </li>
              <li>
                <a href="/about">О нас</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
