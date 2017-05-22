import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {  //static
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }
  
  incrementIfOdd = () => {  //不需要声明吗？
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }
  
  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000);
  }
  
  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
       //为什么放在一个p里？有buton的情况下
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        {' '}
        <button onClick = {this.incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}

export default Counter;