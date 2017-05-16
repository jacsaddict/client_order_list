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
           BrowserRouter as Router,
           Route,
           Link
       } from 'react-router-dom'

       import './ShoppingCart.css';

import {
   Form, FormGroup, Label, Input, FormFeedback, FormText ,Button , Col,InputGroup, InputGroupButton
} from 'reactstrap';

import {main_display,clear_pancake,clear_drink} from 'states/order-actions.js';
///2017/05/15
import TimePicker from 'rc-time-picker';

const showSecond = false;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';

import moment from 'moment';


class ShoppingCart extends React.Component{


  constructor(props) {
      super(props);

      this.handelDelete = this.handelDelete.bind(this);
      this.handelDeleteDrink = this.handelDeleteDrink.bind(this);
      // this.handelSubmit = this.handelSubmit.bind(this);
      this.handelAdd = this.handelAdd.bind(this);
  }

  componentDidMount() {
      this.props.dispatch(main_display());
  }
  componentWillUnmount() {
      this.props.dispatch(main_display());


  }

    render(){
        var total_price = 0;
        for(var i = 0;i<this.props.present.length;i++)
        {
            total_price += this.props.present[i].price*this.props.present[i].quantity;
        }
        for(var i = 0;i<this.props.present2.length;i++)
        {
            total_price += this.props.present2[i].price*this.props.present2[i].quantity;
        }
        console.log(total_price);
        return(
            <div>
                {this.props.present.map((m=>
                  <li key = {m.name}>{m.name}&nbsp;:&nbsp;
                                     {m.quantity}&nbsp;&nbsp;
                                     {m.price}&nbsp;&nbsp;
                                     {m.quantity * m.price}&nbsp;&nbsp;
                    <button onClick = {() => this.handelDelete(m.name)}>刪除</button>
                  </li>))}
                {this.props.present2.map((m=>
                  <li key = {m.name}>{m.name}&nbsp;:&nbsp;
                                     {m.quantity}&nbsp;&nbsp;
                                     {m.price}&nbsp;&nbsp;
                                     {m.quantity * m.price}&nbsp;&nbsp;
                    <button onClick = {() => this.handelDeleteDrink(m.name)}>刪除</button>
                  </li>))}

                  {total_price}

                  <br></br>
                  <br></br>
                  <br></br>



                <Form>
                <div className="form">
                <div className="time">
                  <FormGroup>
                    <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                      <Label for="name">姓名</Label>
                      <Input name="name" placeholder="請輸入姓名" required></Input>
                    </Col>
                  </FormGroup>
                  </div>
                  <div className="cllocl">
                  <FormGroup>
                    <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                      <Label for="phone" name="phone" >電話</Label>
                      <Input type="tel" name="phone" placeholder="請輸入電話" required></Input>
                    </Col>

                  </FormGroup>
                    </div>
                    <div className="time">
                  <FormGroup>
                    <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                      <Label for="email" name="email" >e-mail</Label>
                      <Input type="email" name="email" placeholder="請輸入e-mail" required></Input>
                    </Col>
                  </FormGroup>
                  </div>
                  <div className="cllockff">
                  <FormGroup>
                    <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                      <Label for="time" name="time" >取餐時間</Label>
                      <br></br>
                      <TimePicker
                      format={str}
                       showSecond={showSecond}
                       className="xxx"
                       disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23]}
                       disabledMinutes={() => [0, 2, 4, 6, 8]}
                       hideDisabledOptions
                      />
                    </Col>
                  </FormGroup>
                  </div>
                  <FormGroup check row>
                    <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                      <Button   type = "submit" formTarget="_blank">Submit</Button>
                      <Button  onClick={() => this.handelAdd(this.props.present,this.props.present2)}>加到紀錄</Button>
                      <Button tag={Link} to=''>返回</Button>
                    </Col>
                  </FormGroup>
                  </div>
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

    handelAdd(present1,present2){
      console.log(present1);
      console.log(present2);
        this.props.dispatch(submit(present1,present2));

    }

    // handelSubmit(){
    //   console.log("11111111");
    //    this.props.dispatch(clear_pancake());
    //    this.props.dispatch(clear_drink());
    // }




}


export default connect((state) => {
    return {
        ...state.order,
        ...state.order2,
        ...state.Record,
        ...state.MainButton
    };
})(ShoppingCart);
