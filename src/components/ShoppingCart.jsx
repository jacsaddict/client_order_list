import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';


import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';

import {delete_from_cart_pancake,
        delete_from_cart_drink,
        submit
       } from 'states/order-actions.js';



import {
   Form, FormGroup, Label, Input, FormFeedback, FormText ,Button , Col
} from 'reactstrap';


class ShoppingCart extends React.Component{


  constructor(props) {
      super(props);

      this.handelDelete = this.handelDelete.bind(this);
      this.handelDeleteDrink = this.handelDeleteDrink.bind(this);
      this.handelSubmit = this.handelSubmit.bind(this);
  }



    render(){
        return(
            <div>
                {this.props.present.map((m=>
                  <li key = {m.name}>{m.name}&nbsp;:&nbsp;
                                     {m.quantity}&nbsp;&nbsp;
                    <button onClick = {() => this.handelDelete(m.name)}>刪除</button>
                  </li>))}
                {this.props.present2.map((m=>
                  <li key = {m.name}>{m.name}&nbsp;:&nbsp;
                                     {m.quantity}&nbsp;&nbsp;
                    <button onClick = {() => this.handelDeleteDrink(m.name)}>刪除</button>
                  </li>))}

                <Form>
                  <FormGroup>
                    <Col sm={{ size: 5, offset: 1 }}>
                      <Label for="name">姓名</Label>
                      <Input name="name" placeholder="請輸入姓名" required></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={{ size: 5, offset: 1 }}>
                      <Label for="phone" name="phone" >電話</Label>
                      <Input type="tel" name="phone" placeholder="請輸入電話" required></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={{ size: 5, offset: 1 }}>
                      <Label for="email" name="email" >e-mail</Label>
                      <Input type="email" name="email" placeholder="請輸入e-mail" required></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 5, offset: 2 }}>
                      <Button onClick = {() => this.handelSubmit(this.props.present,this.props.present2)}>Submit</Button>
                    </Col>
                  </FormGroup>
                </Form>

            </div>
        )

    }

    handelDelete(item){
      //console.log(item);
      this.props.dispatch(delete_from_cart_pancake(item));
    }

    handelDeleteDrink(item){
      //console.log(item);
      this.props.dispatch(delete_from_cart_drink(item));
    }

    handelSubmit(present1,present2){
      console.log(present1);
      console.log(present2);
        this.props.dispatch(submit(present1,present2));
    }





}


export default connect((state) => {
    return {
        ...state.order,
        ...state.order2,
        ...state.Record
    };
})(ShoppingCart);
