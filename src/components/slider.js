import React, {Component} from 'react'
import Flickity from 'react-flickity-component'

import img from '../images/alejandra.jpg'

var flickityOptions = { "freeScroll": false, "contain": true, "prevNextButtons": true, "pageDots": false }


export default class Slider extends Component {
    render(){
        return(
            <div className="slider my4">
                <Flickity options={flickityOptions}>
                    <div class="carousel-cell" style={{backgroundImage: `url(${img})`}}></div>
                    <div class="carousel-cell" style={{backgroundImage: `url(${img})`}}></div>
                    <div class="carousel-cell" style={{backgroundImage: `url(${img})`}}></div>
                </Flickity>
            </div>
        )
    }
}
