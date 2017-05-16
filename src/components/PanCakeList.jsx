import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';


import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';


import './PanCakeList2.css';

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
            // <div>
            // <PanCakeItem text = {"原味鬆餅"} id_num = {0}/>
            // <PanCakeItem text = {"巧克力鬆餅"} id_num = {1}/>
            // <PanCakeItem text = {"鬆餅"} id_num = {2}/>
            // </div>

            // <div id="PCL">
            //
            // <div id="pricing-table" className="clear">
            //     <div className="plan">
            //         <h3>原味鬆餅<span>$25</span></h3>
            //         <a className="signup" ><PanCakeItem text = {"原味鬆餅"} id_num = {0}/></a>
            //     </div>
            //     <div className="plan">
            //         <h3>巧克力鬆餅<span>$30</span></h3>
            //         <a className="signup" ><PanCakeItem text = {"巧克力鬆餅"} id_num = {1}/></a>
            //     </div>
            //     <div className="plan">
            //         <h3>抹茶鬆餅<span>$30</span></h3>
            //         <a className="signup" ><PanCakeItem text = {"抹茶鬆餅"} id_num = {2}/></a>
            //     </div>
            //     <div className="plan">
            //         <h3>花生鬆餅<span>$30</span></h3>
            //         <a className="signup" ><PanCakeItem text = {"花生鬆餅"} id_num = {3}/></a>
            //     </div>
            //     <div className="plan">
            //         <h3>勁辣雞鬆餅<span>$45</span></h3>
            //         <a className="signup" ><PanCakeItem text = {"勁辣雞鬆餅"} id_num = {4}/></a>
            //     </div>
            //
            // </div>
            //
            //
            // </div>

            <table id = "table-1">
                <tr>
                    <td><span id = "text">口味</span></td>
                    <td>價錢</td>
                    <td>數量</td>
                </tr>
                <tr>
                    <td>原味鬆餅</td>
                    <td>$25</td>
                    <td><PanCakeItem text = {"原味鬆餅"} id_num = {0}/></td>
                </tr>
                <tr>
                    <td>巧克力鬆餅</td>
                    <td>$30</td>
                    <td><PanCakeItem text = {"巧克力鬆餅"} id_num = {1}/></td>
                </tr>
                <tr>
                    <td>抹茶鬆餅</td>
                    <td>$30</td>
                    <td><PanCakeItem text = {"抹茶鬆餅"} id_num = {2}/></td>
                </tr>
                <tr>
                    <td>花生鬆餅</td>
                    <td>$30</td>
                    <td><PanCakeItem text = {"花生鬆餅"} id_num = {3}/></td>
                </tr>

            </table>
        )


    }


}
