import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Button from './Button';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick(buttonName) {
    this.setState((prevState) => (calculate(prevState, buttonName)));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="result">
          { total || '' }
          { operation || '' }
          { next || '' }
        </div>
        <Button typeBtn="0" btnClick={this.btnClick} btnClass="btn-light btn-zero" />
        <Button typeBtn="." btnClick={this.btnClick} btnClass="btn-light btn-dot" />
        <Button typeBtn="=" btnClick={this.btnClick} btnClass="btn-accent btn-equal" />
        <Button typeBtn="AC" btnClick={this.btnClick} btnClass="btn-light btn-clear" />
        <Button typeBtn="+/-" btnClick={this.btnClick} btnClass="btn-light btn-toogle-sign" />
        <Button typeBtn="%" btnClick={this.btnClick} btnClass="btn-light btn-percentage" />
        <Button typeBtn="/" btnClick={this.btnClick} btnClass="btn-accent btn-divider" />
        <Button typeBtn="x" btnClick={this.btnClick} btnClass="btn-accent btn-multiply" />
        <Button typeBtn="-" btnClick={this.btnClick} btnClass="btn-accent btn-substract" />
        <Button typeBtn="+" btnClick={this.btnClick} btnClass="btn-accent btn-plus" />
        <Button typeBtn="1" btnClick={this.btnClick} btnClass="btn-light btn-one" />
        <Button typeBtn="2" btnClick={this.btnClick} btnClass="btn-light btn-two" />
        <Button typeBtn="3" btnClick={this.btnClick} btnClass="btn-light btn-three" />
        <Button typeBtn="4" btnClick={this.btnClick} btnClass="btn-light btn-four" />
        <Button typeBtn="5" btnClick={this.btnClick} btnClass="btn-light btn-five" />
        <Button typeBtn="6" btnClick={this.btnClick} btnClass="btn-light btn-six" />
        <Button typeBtn="7" btnClick={this.btnClick} btnClass="btn-light btn-seven" />
        <Button typeBtn="8" btnClick={this.btnClick} btnClass="btn-light btn-eight" />
        <Button typeBtn="9" btnClick={this.btnClick} btnClass="btn-light btn-nine" />
      </div>
    );
  }
}
