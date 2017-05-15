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
import './DrinkList.css';
export default class DrinkList extends React.Component{



    constructor(props){
        super(props);
    }

    render(){
        return(
          // <div>
          //     <DrinkItem text={"紅茶"} id_num = {0}/>
          //     <DrinkItem text={"綠茶"} id_num = {1}/>
          // </div>
          <div id="PCL">

            <div id="pricing-table" className="clear">
                <div className="plan">
                    <h3>伯爵紅茶<span>$15</span></h3>
                    <a className="signup" ><DrinkItem text={"伯爵紅茶"} id_num = {0}/></a>
                </div>
                <div className="plan">
                    <h3>檸檬紅茶<span>$35</span></h3>
                    <a className="signup" ><DrinkItem text={"檸檬紅茶"} id_num = {1}/></a>
                </div>
                <div className="plan">
                    <h3>冰淇淋紅茶<span>$30</span></h3>
                    <a className="signup" ><DrinkItem text={"冰淇淋紅茶"} id_num = {2}/></a>
                </div>
                <div className="plan">
                    <h3>冬瓜檸檬茶<span>$35</span></h3>
                    <a className="signup" ><DrinkItem text={"冬瓜檸檬茶"} id_num = {3}/></a>
                </div>
                <div className="plan">
                    <h3>百香雙響炮<span>$40</span></h3>
                    <a className="signup" ><DrinkItem text={"百香雙響炮"} id_num = {4}/></a>
                </div>
                <div className="plan">
                    <h3>英式水果茶<span>$30</span></h3>
                    <a className="signup" ><DrinkItem text={"英式水果茶"} id_num = {5}/></a>
                </div>
            </div>


            </div>
        )
    }


}
