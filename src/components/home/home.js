import React, { Component } from 'react';
import SlideShow from 'react-image-slideshow';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgsData:[
                {
                    url: '/img/ny.jpg'
                },
                {
                    url: '/img/la.jpg'
                },
                {
                    url: '/img/chicago.jpg'
                }
            ]
        };
    }

    handleSlideshowOpen(index) {
        this.refs.SlideShow.handleModalOpen(index);
    }

    render() {
        return (
            <div className="main">
                <SlideShow imgs={this.state.imgsData} ref="SlideShow"/>
            </div>
        );
    }
}