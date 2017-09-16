import React, { Component } from 'react';
import { React_Bootstrap_Carousel } from 'react-bootstrap-carousel';

export default class Home extends Component{
    constructor(props) {
        super(props);
    }

    render() {
      return(
        <div style={{height:300,margin:20}}>
          <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div style={{height:500,width:"100%",backgroundImage:"url(/assets/img/ny.jpg)"}}></div>
            <div style={{height:500,width:"100%",backgroundImage:"url(/assets/img/la.jpg)"}}></div>
            <div style={{height:500,width:"100%",backgroundImage:"url(/assets/img/chicago.jpg)"}}></div>
          </React_Bootstrap_Carousel>
        </div>
      )
    }
}