import React, { useState, useEffect } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [objState, setObjState] = useState({});

  useEffect(() => {
    setObjState({
      total: '0',
      next: null,
      operation: null,
    });
  }, []);

  const btnClick = (buttonName) => {
    setObjState(calculate(objState, buttonName));
  };

  return (
    <div className="container">
      <div className="result">
        { objState.total || '' }
        { objState.operation || '' }
        { objState.next || '' }
      </div>
      <Button typeBtn="0" btnClick={btnClick} btnClass="btn-light btn-zero" />
      <Button typeBtn="." btnClick={btnClick} btnClass="btn-light btn-dot" />
      <Button typeBtn="=" btnClick={btnClick} btnClass="btn-accent btn-equal" />
      <Button typeBtn="AC" btnClick={btnClick} btnClass="btn-light btn-clear" />
      <Button typeBtn="+/-" btnClick={btnClick} btnClass="btn-light btn-toogle-sign" />
      <Button typeBtn="%" btnClick={btnClick} btnClass="btn-light btn-percentage" />
      <Button typeBtn="/" btnClick={btnClick} btnClass="btn-accent btn-divider" />
      <Button typeBtn="x" btnClick={btnClick} btnClass="btn-accent btn-multiply" />
      <Button typeBtn="-" btnClick={btnClick} btnClass="btn-accent btn-substract" />
      <Button typeBtn="+" btnClick={btnClick} btnClass="btn-accent btn-plus" />
      <Button typeBtn="1" btnClick={btnClick} btnClass="btn-light btn-one" />
      <Button typeBtn="2" btnClick={btnClick} btnClass="btn-light btn-two" />
      <Button typeBtn="3" btnClick={btnClick} btnClass="btn-light btn-three" />
      <Button typeBtn="4" btnClick={btnClick} btnClass="btn-light btn-four" />
      <Button typeBtn="5" btnClick={btnClick} btnClass="btn-light btn-five" />
      <Button typeBtn="6" btnClick={btnClick} btnClass="btn-light btn-six" />
      <Button typeBtn="7" btnClick={btnClick} btnClass="btn-light btn-seven" />
      <Button typeBtn="8" btnClick={btnClick} btnClass="btn-light btn-eight" />
      <Button typeBtn="9" btnClick={btnClick} btnClass="btn-light btn-nine" />
    </div>
  );
};

export default Calculator;
