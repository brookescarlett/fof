import React, { Component } from 'react';


export default class Content extends Component {
  render() {
    return (
      <div className="fixed top-0 left-0 fixed content-container">
            <p className="h1 mb0 title">{ this.props.data.title }</p>
            <p className="description">{ this.props.data.content }</p>
            <p className="button p2 center">{ this.props.data.button }</p>
        </div>
    );
  }
}
