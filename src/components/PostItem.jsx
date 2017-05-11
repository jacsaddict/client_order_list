import React from 'react';
import PropTypes from 'prop-types';
import {
    Tooltip
} from 'reactstrap';
import moment from 'moment';

import {getMoodIcon} from 'utilities/weather.js';
import {connect} from 'react-redux';
import {tip} from 'states/post-actions.js';

import './PostItem.css';

class PostItem extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        mood: PropTypes.string,
        text: PropTypes.string,
        clearVotes: PropTypes.number,
        cloudsVotes: PropTypes.number,
        drizzleVotes: PropTypes.number,
        rainVotes: PropTypes.number,
        thunderVotes: PropTypes.number,
        snowVotes: PropTypes.number,
        windyVotes: PropTypes.number,
        onVote: PropTypes.func
    };

    constructor(props) {
        super(props);

        // this.state = {
        //     tooltipOpen: false
        // };

        this.handleClick = this.handleClick.bind(this);
        this.handleTooltipToggle = this.handleTooltipToggle.bind(this);
        this.handleClearVote = this.handleClearVote.bind(this);
        this.handleCloudsVote = this.handleCloudsVote.bind(this);
        this.handleDrizzleVote = this.handleDrizzleVote.bind(this);
        this.handleRainVote = this.handleRainVote.bind(this);
        this.handleThunderVote = this.handleThunderVote.bind(this);
        this.handleSnowVote = this.handleSnowVote.bind(this);
        this.handleWindyVote = this.handleWindyVote.bind(this);
    }

    render() {
        const {id, mood, text, ts, clearVotes, cloudsVotes, drizzleVotes, rainVotes, thunderVotes, snowVotes, windyVotes,tooltipOpen} = this.props;
        // const {tooltipOpen} = this.state;

        return (
            <div className='post-item d-flex flex-column' onClick={this.handleClick}>
                <div className='post d-flex'>
                    <div className='mood'><i className={getMoodIcon(mood)}></i></div>
                    <div className='wrap'>
                        <div className='ts'>{moment(ts * 1000).calendar()}</div>
                        <div className='text'>{text}</div>
                    </div>
                </div>
                <div className='vote d-flex justify-content-end'>
                    <div className='vote-results'>
                        {clearVotes > 0 && (<span><i className={getMoodIcon('Clear')}></i>&nbsp;{clearVotes}&nbsp;&nbsp;</span>)}
                        {cloudsVotes > 0 && <span><i className={getMoodIcon('Clouds')}></i>&nbsp;{cloudsVotes}&nbsp;&nbsp;</span>}
                        {drizzleVotes > 0 && <span><i className={getMoodIcon('Drizzle')}></i>&nbsp;{drizzleVotes}&nbsp;&nbsp;</span>}
                        {rainVotes > 0 && <span><i className={getMoodIcon('Rain')}></i>&nbsp;{rainVotes}&nbsp;&nbsp;</span>}
                        {thunderVotes > 0 && <span><i className={getMoodIcon('Thunder')}></i>&nbsp;{thunderVotes}&nbsp;&nbsp;</span>}
                        {snowVotes > 0 && <span><i className={getMoodIcon('Snow')}></i>&nbsp;{snowVotes}&nbsp;&nbsp;</span>}
                        {windyVotes > 0 && <span><i className={getMoodIcon('Windy')}></i>&nbsp;{windyVotes}&nbsp;&nbsp;</span>}
                    </div>
                    <div className='vote-plus'>
                        <i id={`post-item-vote-${id}`} className='fa fa-plus'></i>
                    </div>
                </div>
                <Tooltip placement='left' isOpen={tooltipOpen && this.props.id === this.props.toolid} autohide={false} target={`post-item-vote-${id}`} toggle={this.handleTooltipToggle}>
                    <i className={`vote-tooltip ${getMoodIcon('Clear')}`} onClick={this.handleClearVote}></i>&nbsp;
                    <i className={`vote-tooltip ${getMoodIcon('Clouds')}`} onClick={this.handleCloudsVote}></i>&nbsp;
                    <i className={`vote-tooltip ${getMoodIcon('Drizzle')}`} onClick={this.handleDrizzleVote}></i>&nbsp;
                    <i className={`vote-tooltip ${getMoodIcon('Rain')}`} onClick={this.handleRainVote}></i>&nbsp;
                    <i className={`vote-tooltip ${getMoodIcon('Thunder')}`} onClick={this.handleThunderVote}></i>&nbsp;
                    <i className={`vote-tooltip ${getMoodIcon('Snow')}`} onClick={this.handleSnowVote}></i>&nbsp;
                    <i className={`vote-tooltip ${getMoodIcon('Windy')}`} onClick={this.handleWindyVote}></i>
                </Tooltip>
            </div>
        );
    }

    handleClick() {
        // this.setState({
        //   tooltipOpen: true
        // });

        this.props.dispatch(tip(true,this.props.id));
    }

    handleTooltipToggle() {
        // this.setState((prevState, props) => ({
        //     tooltipOpen: !prevState.tooltipOpen
        // }));
        if(this.props.tooltipOpen === true)
          this.props.dispatch(tip(false,this.props.id));
        else {
          this.props.dispatch(tip(true,this.props.id));
        }
    }

    handleClearVote() {
        this.props.onVote(this.props.id, 'Clear');
        // this.setState({
        //   tooltipOpen: false
        // });
        this.props.dispatch(tip(false,this.props.id));
    }

    handleCloudsVote() {
        this.props.onVote(this.props.id, 'Clouds');
        // this.setState({
        //   tooltipOpen: false
        // });
        this.props.dispatch(tip(false,this.props.id));
    }

    handleDrizzleVote() {
        this.props.onVote(this.props.id, 'Drizzle');
        // this.setState({
        //   tooltipOpen: false
        // });
        this.props.dispatch(tip(false,this.props.id));
    }

    handleRainVote() {
        this.props.onVote(this.props.id, 'Rain');
        // this.setState({
        //   tooltipOpen: false
        // });
        this.props.dispatch(tip(false,this.props.id));
    }

    handleThunderVote() {
        this.props.onVote(this.props.id, 'Thunder');
        // this.setState({
        //   tooltipOpen: false
        // });
        this.props.dispatch(tip(false,this.props.id));
    }

    handleSnowVote() {
        this.props.onVote(this.props.id, 'Snow');
        // this.setState({
        //   tooltipOpen: false
        // });
        this.props.dispatch(tip(false,this.props.id));
    }

    handleWindyVote() {
        this.props.onVote(this.props.id, 'Windy');
        // this.setState({
        //   tooltipOpen: false
        // });
        this.props.dispatch(tip(false,this.props.id));
    }
}



export default connect((state) => {
    return {
        ...state.Tool
    };
})(PostItem);
