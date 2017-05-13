import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
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
//import css
//

import PanCakeList from 'components/PanCakeList.jsx';
import DrinkList from 'components/DrinkList.jsx';






export default class Order extends React.Component {

  //static propTypes
  constructor(props) {
    super(props);
    this.state = {
      PanCakeList_open : 0,
      DrinkList_open : 0

    }
    //this.states.....
    this.handlePanCakeList = this.handlePanCakeList.bind(this);
    this.handleDrinkList   = this.handleDrinkList.bind(this);
  }
  render(){
    return(
      <div>
      <Navbar color='faded' light toggleable>
      <Collapse isOpen={true} navbar>
          <Nav navbar>
              <NavItem>
                  <NavLink onClick={this.handlePanCakeList}><Button color="secondary">鬆餅</Button></NavLink>

              </NavItem>
              <NavItem>
                  <NavLink onClick={this.handleDrinkList}><Button color="secondary">飲品</Button></NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>


          {this.state.DrinkList_open === 1 && <DrinkList />}
          {this.state.PanCakeList_open === 1 && <PanCakeList />}

        </div>

    )
  }


  handlePanCakeList(){
    this.setState({
      PanCakeList_open : 1,
      DrinkList_open : 0
    })
  }
  handleDrinkList(){
    this.setState({
      DrinkList_open : 1,
      PanCakeList_open : 0
    })
  }
}
