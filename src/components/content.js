import React, { Component } from 'react';


export default class Content extends Component {
  render() {
    return (
        <div className="absolute content-container">
            <p className="h1 title">{ this.props.data.title }</p>
            <p className="desciption">{ this.props.data.content }</p>
            <div className="button p2 h6 center">{ this.props.data.button }</div>
        </div>
    );
  }
}
