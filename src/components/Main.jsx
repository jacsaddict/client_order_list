import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
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
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';

import {connect} from 'react-redux';

////////////////////

import Order from 'components/Order.jsx';

import ShoppingCart from 'components/ShoppingCart.jsx';



////////////////////
import Today from 'components/Today.jsx';
import Forecast from 'components/Forecast.jsx';
import {unit, weather, weatherForm, forecast} from 'states/weather-reducers.js';
import {postForm, MainRe} from 'states/post-reducers.js';
import {NavbarToggle, SearchInput} from 'states/post-actions.js';


import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // navbarToggle: false,
            // searchText: ''
            PanCakeQuaint:
              {
                origin: 0,
                honey:  0,

              }
        };
        //this.store = null;
        this.searchEl = null;

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);



    }

    componentWillMount() {
        // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        // this.store = createStore(combineReducers({
        //     unit,
        //     weather,
        //     weatherForm,
        //     forecast,
        //     postForm,
        //     MainRe
        // }), composeEnhancers(applyMiddleware(thunkMiddleware/*, loggerMiddleware*/)));
    }

    render() {
        return (
            //<Provider store={this.store}>
                <Router>
                    <div className='main'>
                        <div className='bg-faded'>
                            <div className='container'>
                                <Navbar color='faded' light toggleable>
                                    <NavbarToggler right onClick={this.handleNavbarToggle}/>
                                    <NavbarBrand className='text-info' href="/">WeatherMood</NavbarBrand>
                                    <Collapse isOpen={this.props.navbarToggle} navbar>
                                        <Nav navbar>
                                            <NavItem>
                                                <NavLink tag={Link} to='/order'>開始點餐</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={Link} to='/favorite'>我的最愛</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={Link} to='/contact-us'>聯絡我們</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={Link} to='/shopping-cart'>購物車</NavLink>
                                            </NavItem>
                                        </Nav>
                                        <div className='search ml-auto'>
                                            <Input className='ml-auto' type='text' getRef={this.searchEl} placeholder='Search' onKeyPress={this.handleSearchKeyPress} getRef={e => this.searchEl = e}></Input>{
                                                this.props.searchText &&
                                                <i className='navbar-text fa fa-times' onClick={this.handleClearSearch}></i>
                                            }
                                        </div>

                                    </Collapse>
                                </Navbar>
                            </div>
                        </div>

                        <Route exact path="/order" render={() => (
                            <Order/>
                        )}/>
                        <Route exact path="/shopping-cart" render={() => (
                            <ShoppingCart />
                        )}/>
                        <div className='footer'>
                            DataLab.
                        </div>
                    </div>
                </Router>
        );
    }



    handleNavbarToggle() {
        // this.setState((prevState, props) => ({
        //     navbarToggle: !prevState.navbarToggle
        // }));
        this.props.dispatch(NavbarToggle());
    }

    handleSearchKeyPress(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13){
            // this.setState({
            //     searchText: e.target.value
            // });
            this.props.dispatch(SearchInput(e.target.value));
        }
    }

    handleClearSearch() {
        // this.setState({
        //     searchText: ''
        // });
        this.props.dispatch(SearchInput(''));
        this.searchEl.value = '';
    }
    DataToCart(){

    }
}



export default connect((state) => {
    return {
        ...state.MainRe
    };
})(Main);
