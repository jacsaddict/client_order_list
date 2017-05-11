// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import Main from 'components/Main.jsx';
//
// import 'bootstrap/dist/css/bootstrap.css';
//
// window.onload = function() {
//     ReactDOM.render(
//         <Main />,
//         document.getElementById('root')
//     );
// };



import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';

import {unit, weather, weatherForm, forecast} from 'states/weather-reducers.js';

import {postForm, MainRe,TodayRe,Tool} from 'states/post-reducers.js';

import {connect} from 'react-redux';




export default class Index extends React.Component{


    componentWillMount() {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        this.store = createStore(combineReducers({
            unit,
            weather,
            weatherForm,
            forecast,
            postForm,      ///////// new
            MainRe,
            TodayRe,
            Tool
        }), composeEnhancers(applyMiddleware(thunkMiddleware/*, loggerMiddleware*/)));
    }


    render(){
      return(
        <Provider store = {this.store}>
          <Main />
        </Provider>
      );
    }


  }




window.onload = function() {
    ReactDOM.render(
        // <Main />,
        <Index />,
        document.getElementById('root')
    );
}
