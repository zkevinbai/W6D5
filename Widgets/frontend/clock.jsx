import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
        this.tick = this.tick.bind(this);
    }

    render() {
        return(
            <div class="clock-div">
                <span class="time-span">
                    <span>I am Clock</span>
                    <span>
                        {this.state.date.getHours()}:
                        {this.state.date.getMinutes()}:
                        {this.state.date.getSeconds()}
                    </span>
                </span>
                <span class="date-span">
                    <span>I am Date</span>
                    <span>
                        {this.state.date.getDate()}/
                        {this.state.date.getMonth() + 1}/
                        {this.state.date.getFullYear()}
                    </span> 
                </span>
            </div>
        );
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    componentDidMount() {
        let intv = setInterval(() => {
            this.tick();
        }, 1000)

        this.interval = intv;
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}


export default Clock;