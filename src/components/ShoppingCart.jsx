import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';


import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';

import { ListGroup, ListGroupItem } from 'reactstrap';

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
//志容屌大大
var Recaptcha = require('react-recaptcha');
let recaptchaInstance;
const resetRecaptcha = () => {
  recaptchaInstance.reset();
};


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
              <ListGroup>
                  <ListGroupItem>
                      <span className = "topic">品項</span>
                      <span className = "topic">數量</span>
                      <span className = "topic">單價</span>
                      <span className = "topic">總價</span>
                  </ListGroupItem>
                {this.props.present.map((m=>
                  <ListGroupItem className = "ShoppingCart-list"  key = {m.name}>
                                     <span className = "topic">{m.name}</span>
                                     <span className = "topic">{m.quantity}</span>
                                     <span className = "topic">{m.price}</span>
                                     <span className = "topic">{m.quantity * m.price}</span>
                                     <span className = "topic"><Button className="trashbtn" onClick = {() => this.handelDelete(m.name)}><img src={`images/trash.png`} id="image7"/></Button></span>

                  </ListGroupItem>))}



                {this.props.present2.map((m=>
                  <ListGroupItem className = "ShoppingCart-list" key = {m.name}>
                                     <span className = "topic">{m.name}</span>
                                     <span className = "topic">{m.quantity}</span>
                                     <span className = "topic">{m.price}</span>
                                     <span className = "topic">{m.quantity * m.price}</span>
                                     <span className = "topic"><Button className="trashbtn" onClick = {() => this.handelDeleteDrink(m.name)}><img src={`images/trash.png`} id="image7"/></Button></span>

                  </ListGroupItem>))}

              </ListGroup>

              <ListGroupItem>
                <span className = "topic"></span>
                <span className = "topic"></span>
                <span className = "topic"></span>
                <span className = "topic">{total_price}</span>
                <span className = "topic"></span>

              </ListGroupItem>
            {/* {total_price > 0 &&
              total_price} */}

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
                  <div>
                    <div className="cllockff">
                    <FormGroup>
                      <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                        <Label for="time" name="time" ></Label>
                        <br></br>
                        <div className="form-group" id="captcha-holder">
                      <Recaptcha sitekey="6LexliEUAAAAAKTXM_w46doc9l7b3cKJ4VKRy15S" render="explicit" verifyCallback={this.props.onCaptchaVerify} onloadCallback={console.log.bind(this, "recaptcha loaded")}/>
                  </div>

                      </Col>
                    </FormGroup>
                    </div>
                  </div>
                  <br></br>
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
