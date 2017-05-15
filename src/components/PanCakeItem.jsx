import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';


import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';


import {add,minus,add_to_cart} from 'states/order-actions.js';

import './PanCakeItem.css';

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
          this.func_add = this.func_add.bind(this);
          this.func_minus = this.func_minus.bind(this);
          this.func_add_to_cart = this.func_add_to_cart.bind(this);

  }




      func_add(id)
      {
        this.props.dispatch(add(id));
        this.forceUpdate();
      }

      func_minus(id)
      {
        if(this.props.quantity[id] > 0)
            this.props.dispatch(minus(id));
        this.forceUpdate();
      }

      func_add_to_cart(id)
      {
        this.props.dispatch(add_to_cart(id));
        this.forceUpdate();
      }


        render(){
            return(
              // <div>
              //   <span>{this.props.text}</span>
              //   <button onClick={() => this.func_minus(this.props.id_num)}>-</button>
              //   <span>{this.props.quantity[this.props.id_num]}</span>
              //   <button  onClick={() => this.func_add(this.props.id_num)}>+</button>
              //   <button onClick={() => this.func_add_to_cart(this.props.id_num)}>加入購物車</button>
              // </div>
              <div>

                <button className="dickbtn" onClick={() => this.func_minus(this.props.id_num)}>-</button>
                <span>{this.props.quantity[this.props.id_num]}</span>
                <button className="dickbtn" onClick={() => this.func_add(this.props.id_num)}>+</button>
                <button className="dickbtn" onClick={() => this.func_add_to_cart(this.props.id_num)}>加入購物車</button>
              </div>
            )
        }

}





export default connect((state) => {
    return {
        ...state.order
    };
})(PanCakeItem);
