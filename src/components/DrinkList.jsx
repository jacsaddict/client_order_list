import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';

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


export default class DrinkList extends React.Component{



    constructor(props){
        super(props);

        this.handlePanCake1 = this.Drink1.bind(this);
        this.handlePanCake2 = this.Drink2.bind(this);

    }

    Drink1()
    {
      console.log("紅茶＋＋");
    }

    Drink2()
    {
      console.log("綠茶＋＋");
    }

    render(){
        return(
          <Collapse isOpen={true} navbar>
              <Nav navbar>
                  <NavItem>
                      <NavLink onClick={this.Drink1}>紅茶</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink onClick={this.Drink2}>綠茶</NavLink>
                  </NavItem>
              </Nav>
            </Collapse>

        )
    }


}
