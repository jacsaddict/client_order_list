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


import {
   Form, FormGroup, Label, Input, FormFeedback, FormText ,Button , Col
} from 'reactstrap';

import {main_display,clear_pancake,clear_drink} from 'states/order-actions.js';

///Liou
const showSecond = false;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';

import moment from 'moment';
import TimePicker from 'rc-time-picker';


class ShoppingCart extends React.Component{


  constructor(props) {
      super(props);

      this.state = {
          input_name : '',
          input_phone : '',
          input_email : '',
          input_time :''
      };

      this.handleInputChange_name = this.handleInputChange_name.bind(this);
      this.handleInputChange_phone = this.handleInputChange_phone.bind(this);
      this.handleInputChange_email = this.handleInputChange_email.bind(this);
      this.handleInputChange_time = this.handleInputChange_time.bind(this);

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
                  <FormGroup>
                    <Col sm={{ size: 5, offset: 1 }}>
                      <Label for="name">姓名</Label>
                      <Input name="name" placeholder="請輸入姓名" id = "NAME" required onChange={this.handleInputChange_name}></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={{ size: 5, offset: 1 }}>
                      <Label for="phone" name="phone" >電話</Label>
                      <Input type="tel" name="phone" placeholder="請輸入電話" id = "PHONE" onChange={this.handleInputChange_phone}></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={{ size: 5, offset: 1 }}>
                      <Label for="email" name="email" >e-mail</Label>
                      <Input type="email" name="email" placeholder="請輸入e-mail" id = "EMAIL" onChange={this.handleInputChange_email}></Input>
                    </Col>


                  </FormGroup>
                  <FormGroup>
                    <Col sm={{ size: 5, offset: 1 }}>
                      <Label for="time" name="time" >取餐時間</Label>
                      <TimePicker
                      format={str}
                       showSecond={showSecond}
                       className="xxx"
                       disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23]}
                       disabledMinutes={() => [0, 2, 4, 6, 8]}
                       hideDisabledOptions
                       onChange={this.handleInputChange_time}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 5, offset: 2 }}>
                      <Button   type = "submit" formTarget="_blank">Submit</Button>
                      <Button  onClick={() => this.handelAdd(this.props.present,this.props.present2,this.state.input_name,this.state.input_phone,this.state.input_email,this.state.input_time)}>加到紀錄</Button>
                      <Button tag={Link} to=''>返回</Button>
                    </Col>
                  </FormGroup>
                </Form>


            </div>
        )

    }


    handleInputChange_time(e) {
        const text = e._d.toString();
        //console.log(e);
        this.setState({input_time: text});
        //console.log(e._d);
        // this.props.dispatch(PostInput(e.target.value));
        // if(e.target.value){
        //     this.props.dispatch(Danger(false));
        // }
    }


    handleInputChange_name(e) {
        const text = e.target.value
        this.setState({input_name: text});

        // this.props.dispatch(PostInput(e.target.value));
        // if(e.target.value){
        //     this.props.dispatch(Danger(false));
        // }
    }


    handleInputChange_phone(e) {
        const text = e.target.value
        this.setState({input_phone: text});

        // this.props.dispatch(PostInput(e.target.value));
        // if(e.target.value){
        //     this.props.dispatch(Danger(false));
        // }
    }


    handleInputChange_email(e) {
        const text = e.target.value
        this.setState({input_email: text});

        // this.props.dispatch(PostInput(e.target.value));
        // if(e.target.value){
        //     this.props.dispatch(Danger(false));
        // }
    }

    handelDelete(item){
      //console.log(item);
      this.props.dispatch(delete_from_cart_pancake(item));
    }

    handelDeleteDrink(item){
      //console.log(item);
      this.props.dispatch(delete_from_cart_drink(item));
    }

    handelAdd(present1,present2,name,phone,email,time){
      // console.log(present1);
      // console.log(present2);
      console.log(name);
      console.log(phone);
      console.log(email);
        this.props.dispatch(submit(present1,present2,name,phone,email,time));

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
