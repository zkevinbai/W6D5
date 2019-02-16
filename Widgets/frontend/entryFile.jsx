import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener('DOMContentLoaded',
    () => {
        const root = document.getElementById("root");
        const tabsProps = [
            {
                title: 'one',
                content: 'I am the one!'
            },
            {
                title: 'two',
                content: 'I am the two!'
            },
            {
                title: 'three',
                content: 'I am the three!'
            }
        ]
        ReactDOM.render(
            <div>
                <h1 class="header">Kevin & Melvin</h1>
                <h1 class="clock"><Clock /></h1>
                <h1 class="tabs"><Tabs tabs={tabsProps}/></h1>
            </div>
            , root);
    }
    
);