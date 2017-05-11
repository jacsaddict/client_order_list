import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';


import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';


import {add} from 'states/order-actions.js';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Button
} from 'reactstrap';

class PanCakeItem extends React.Component{

      constructor(props){
          super(props);

          // this.state = {
          //   quantity : 0
          // };

          // this.add = this.add.bind(this);
          // this.minus = this.minus.bind(this);
          this.func = this.func.bind(this);


  }

      // add(prevState){
      //   this.setState((prevState, props) => (
      //     {
      //       quantity : prevState.quantity +1
      //     }
      //   ))
      // }
      //
      //
      // minus(prevState){
      //   if(this.state.quantity > 0)
      //   {
      //     this.setState((prevState, props) => (
      //       {
      //         quantity : prevState.quantity -1
      //       }
      //     ))
      //   }
      // }


      func(id)
      {
        this.props.dispatch(add(id));
        this.forceUpdate();
      }

        render(){
            return(
              <div>
                <span>{this.props.text}</span>
                <button >-</button>
                <span>{this.props.quantity[this.props.id_num]}</span>
                <button  onClick={() => this.func(this.props.id_num)}>+</button>
                <button >加入購物車</button>
              </div>
            )
        }

}





export default connect((state) => {
    return {
        ...state.order
    };
})(PanCakeItem);
