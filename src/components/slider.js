import React, {Component} from 'react'
import Flickity from 'react-flickity-component'

import maya from '../images/maya.jpg'
import alejandra from '../images/alejandra.jpg'
import julia from '../images/julia.jpg'

var flickityOptions = { "freeScroll": false, "contain": true, "prevNextButtons": true, "pageDots": false }


export default class Slider extends Component {

    componentDidMount = () => {
        this.flkty.on('change', () => {
            this.props.changeDisplay(this.flkty.selectedIndex)
            console.log(`current index is ${this.flkty.selectedIndex}`)
        })
    }

    render(){
        console.log(this.props.data.imageUrl)
        return(
            <div className="slider my4">
                <Flickity options={flickityOptions} flickityRef={c => this.flkty = c}>
                    <div class="carousel-cell" style={{ backgroundImage: `url(${maya})`}}></div>
                    <div class="carousel-cell" style={{backgroundImage: `url(${alejandra})`}}></div>
                    <div class="carousel-cell" style={{backgroundImage: `url(${julia})`}}></div>
                </Flickity>
            </div>
        )
    }
}
