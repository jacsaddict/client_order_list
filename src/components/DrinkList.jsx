import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
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
import DrinkItem from 'components/DrinkItem.jsx';

export default class DrinkList extends React.Component{



    constructor(props){
        super(props);
    }

    render(){
        return(
          <div>
              <DrinkItem text={"紅茶"} id_num = {0}/>
              <DrinkItem text={"綠茶"} id_num = {1}/>
          </div>
        )
    }


}
