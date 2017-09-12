import React, { Component } from 'react';
import Menu from './components/menu/menu';

export default class App extends Component{
    render(){
        return (
            <div>
                <Menu />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    };
}