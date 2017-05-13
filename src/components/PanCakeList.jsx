import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';


import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';




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

import PanCakeItem from 'components/PanCakeItem.jsx';

export default class PanCakeList extends React.Component{


    constructor(props){
        super(props);



    }

    handlePanCake1()
    {
      console.log("蜂蜜鬆餅＋＋");
    }


    handlePanCake2()
    {
      console.log("原味鬆餅＋＋");
    }


    render(){
        return(
          <div>
          {/* <Collapse isOpen={true} navbar>
              <Nav navbar>
                  <NavItem>
                      <NavLink onClick={this.handlePanCake1}>蜂蜜鬆餅</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink onClick={this.handlePanCake2}>原味鬆餅</NavLink>
                  </NavItem>
              </Nav>
            </Collapse> */}

            <PanCakeItem text = {"原味鬆餅"} id_num = {0}/>
            <PanCakeItem text = {"巧克力鬆餅"} id_num = {1}/>
            <PanCakeItem text = {"鬆餅"} id_num = {2}/>
            </div>

        )


    }


}
