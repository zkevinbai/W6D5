import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
    }

    render(){
        console.log(this);

        return (
            <div class="tabs-outer">
                <h1>I am Tabs</h1>
                <div class="tabs-index">
                    <span class='tabs-titles'>
                        {this.props.tabs.map((tab, idx) => {
                            return <span class='tabs-title' onClick={() => this.setState({
                                index: idx
                            })}>{tab.title}</span>
                        })}
                    </span>
                    <span class='tab-content'>
                        {this.props.tabs[this.state.index].content}
                    </span>
                </div>
            </div>
        );
    }
}

export default Tabs;