import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    const { typeBtn, btnClass } = this.props;
    this.state = {
      nameBtn: typeBtn,
      btnClass,
    };
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick(nameButton) {
    const { btnClick } = this.props;
    btnClick(nameButton);
  }

  render() {
    const { nameBtn, btnClass } = this.state;
    return <button type="button" className={btnClass} onClick={() => this.btnClick(nameBtn)}>{ nameBtn }</button>;
  }
}

Button.propTypes = {
  typeBtn: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  btnClick: PropTypes.func,
};

Button.defaultProps = {
  btnClass: 'btn-light',
  btnClick: () => {},
};
