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

import './Order.css';

import PanCakeList from 'components/PanCakeList.jsx';
import DrinkList from 'components/DrinkList.jsx';


import {main_display} from 'states/order-actions.js';



class Order extends React.Component {

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

  componentDidMount() {
      this.props.dispatch(main_display());
  }

  componentWillUnmount() {
      this.props.dispatch(main_display());
  }

  render(){
    return(
      // <div>
      //           <Button color="secondary" onClick={this.handlePanCakeList}>鬆餅</Button>
      //           <Button color="secondary" onClick={this.handleDrinkList}>飲品</Button>
      //
      //
      //           <Button tag={Link} to=''>返回</Button>
      //     {this.state.DrinkList_open === 1 && <DrinkList />}
      //     {this.state.PanCakeList_open === 1 && <PanCakeList />}
      //
      //   </div>
      <div id="bigdiv">
      <ul>
            <li><Button color="secondary" onClick={this.handlePanCakeList}><a  className="round green">鬆餅<span className="round"></span></a></Button></li>
            <li><Button color="secondary" onClick={this.handleDrinkList}><a  className="round red">飲料<span className="round"></span></a></Button></li>
          	<li><Button tag={Link} to=''><a className="round yellow">返回<span className="round"></span></a></Button></li>
      </ul>



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




export default connect((state) => {
    return {
        ...state.MainButton
    };
})(Order);
