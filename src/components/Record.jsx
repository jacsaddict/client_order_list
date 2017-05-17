import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {main_display} from 'states/order-actions.js';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {
    Button
} from 'reactstrap';

import './Record.css';

class Record extends React.Component{

      constructor(props){
          super(props);

    }

    componentDidMount() {
        this.props.dispatch(main_display());
    }
    componentWillUnmount() {
        this.props.dispatch(main_display());
    }
    render(){
      var total_records = [];


      for(var i = 0; i < this.props.records.length; i++)
      {
        for(var j = 0; j < this.props.records[i].length; j++)
        {
              total_records = [...total_records,this.props.records[i][j].name,this.props.records[i][j].quantity];
        }

        if(i%2 === 1)
          total_records = [...total_records,this.props.client[(i-1)/2].name,this.props.client[(i-1)/2].phone,this.props.client[(i-1)/2].email,this.props.client[(i-1)/2].id,<br/>,<br/>];
          // console.log(this.props.records);
           console.log(this.props.client);
      }

      // console.log(total_records);
      console.log(this.props.records);
      console.log(this.props.records2);

      return(
        <div>

          {/* {
            total_records
          } */}
          <Button tag={Link} to=''>返回</Button>



          {/* {this.props.records.map((m=>
            <div>
              {m.map((k=>
                    <ListGroupItem className = "ShoppingCart-list"  key = {k.name}>
                                       <span className = "topic">{k.name}</span>
                                       <span className = "topic">{k.quantity}</span>
                                       <span className = "topic">{k.price}</span>
                                       <span className = "topic">{k.quantity * k.price}</span>
                    </ListGroupItem>))}

           </div>
         ))}


         {this.props.records2.map((m=>
           <div>
             {m.map((k=>
                   <ListGroupItem className = "ShoppingCart-list"  key = {k.name}>
                                      <span className = "topic">{k.name}</span>
                                      <span className = "topic">{k.quantity}</span>
                                      <span className = "topic">{k.price}</span>
                                      <span className = "topic">{k.quantity * k.price}</span>
                   </ListGroupItem>))}

          </div>
        ))} */}


             <ListGroup>
          {this.props.records.map((m=>

              <div>
                {m.map((k=>
                  <ListGroupItem key = {k.name} id = "list">{k.name}&nbsp;:&nbsp;
                                     {k.quantity}&nbsp;&nbsp;
                </ListGroupItem>
              ))}
            </div>
            ))}

            </ListGroup>


        </div>
      );
    }



}




export default connect((state) => {
    return {
        ...state.record,
        ...state.MainButton
    };
})(Record);
