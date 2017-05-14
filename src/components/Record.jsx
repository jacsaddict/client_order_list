import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';

import {main_display} from 'states/order-actions.js';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {
    Button
} from 'reactstrap';



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
          total_records = [...total_records,<br/>,<br/>];
      }

      console.log(total_records);
      return(
        <div>

          {
            total_records
          }
          <Button tag={Link} to=''>返回</Button>
          {/* {this.props.records[0].map((m=>
            <li key = {m.name}>{m.name}&nbsp;:&nbsp;
                               {m.quantity}&nbsp;&nbsp;
            </li>))}

            {this.props.records[1].map((m=>
              <li key = {m.name}>{m.name}&nbsp;:&nbsp;
                                 {m.quantity}&nbsp;&nbsp;
              </li>))} */}


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
