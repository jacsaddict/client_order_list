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
import { Container, Row, Col } from 'reactstrap';

////////////////////
import Slider from 'react-slick';
import Order from 'components/Order.jsx';

import ShoppingCart from 'components/ShoppingCart.jsx';

import Contact from 'components/Contact.jsx';

import Record from 'components/Record.jsx';
////////////////////
import Today from 'components/Today.jsx';
import Forecast from 'components/Forecast.jsx';
import {unit, weather, weatherForm, forecast} from 'states/weather-reducers.js';
import {postForm, MainRe} from 'states/post-reducers.js';
import {NavbarToggle, SearchInput} from 'states/post-actions.js';


import ReactFBLike from 'react-fb-like';
///2017/05/15
import TimePicker from 'rc-time-picker';
///

import './Main.css';
const images = [
      'images/ig1.png',
            'images/ig7.png',
                  'images/ig3.png',
                        'images/ig4.png',
                        'images/ig5.png',
                        'images/ig6.png'
];
class Main extends React.Component {
    constructor(props) {
        super(props);
        //this.store = null;
        // this.state = {
        //     display : true
        // };
        this.searchEl = null;

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
        // this.main_button_onclick = this.main_button_onclick.bind(this);


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
      var settings = {
             dots: true,
             slidesToShow: 3,
             infinite: true,
             autoplay: true,
             autoplaySpeed: 2000,
             arrows: false,
          }
        return (
            //<Provider store={this.store}>
                <Router>
                    <div className='main'>
                        <div className='bg-faded'>
                            <div className='container'>
                                <Navbar color='faded' light toggleable>
                                    <NavbarToggler right onClick={this.handleNavbarToggle}/>
                                    <NavbarBrand className='text-warning' href="/">高菲鬆餅屋</NavbarBrand>
                                    <Collapse isOpen={this.props.navbarToggle} navbar>
                                        <Nav navbar>
                                            <NavItem>
                                                <NavLink tag={Link} to='/order'>開始點餐</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={Link} to='/record'>訂單紀錄</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={Link} to='/contact-us'>聯絡我們</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={Link} to='/shopping-cart'>購物車</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="tel:0984060967">打個電話</NavLink>
                                            </NavItem>
                                        </Nav>


                                    </Collapse>
                                </Navbar>
                            </div>
                        </div>



                        <div className="slider-container">
                          <Slider  {...settings} >
                            {images.map((image, key) => <div key={key}><img src={image} /></div>)}
                          </Slider>
                        </div>

                        <br/>
                        <br/>

                        {
                          this.props.display === true &&
                        <div>
                          <Row id="but_row">
                            <Col xs="3" className="main-button"><Button color="basic" tag={Link} to='/order' id="icon1" ><img src={`images/icon-eat.png`} id="image1"/><p>開始點餐</p></Button></Col>
                            <Col xs="3" className="main-button"><Button color="basic" tag={Link} to='/record' id="icon1"><img src={`images/icon-list.png`} id="image1"/><p>訂餐記錄</p></Button></Col>
                            <Col xs="3" className="main-button"><Button color="basic" href="tel:0984060967" tag={Link} to='/contact-us' id="icon1" ><img src={`images/icon-t.png`} id="image1"/><p>聯絡我們</p></Button></Col>
                            <Col xs="3" className="main-button"><Button color="bisic" tag={Link} to='/shopping-cart' id="icon1" ><img src={`images/icon-c.png`} id="image1"/><p>購物車</p></Button></Col>
                          </Row>

                        </div>
                        }
                        <Route exact path="/order" render={() => (
                            <Order/>
                        )}/>
                        <Route exact path="/record" render={() => (
                            <Record/>
                        )}/>
                        <Route exact path="/contact-us" render={() => (
                            <Contact/>
                        )}/>
                        <Route exact path="/shopping-cart" render={() => (
                            <ShoppingCart />
                        )}/>
                    </div>
                </Router>
        );
    }


    // main_button_onclick(){
    //   console.log(this.state.display);
    //     this.setState(
    //       {
    //         display: !this.state.display
    //       }
    //     );
    //     forceUpdate();
    // }

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

}



export default connect((state) => {
    return {
        ...state.MainRe,
        ...state.MainButton
    };
})(Main);
