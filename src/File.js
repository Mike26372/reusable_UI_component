import React, { Component } from 'react';

class File extends Component {
  render() {
    let {props} = this;
    let {item, level} = props;
    let nextLevel = level + 1;
    let offset = level * 10;

    return (
      <div className="has-text-left file-style" style={{'margin-left': `${offset}px`}}>
        <div className="icon-sprite placeholder"></div>
        <span className="icon-sprite list"></span>
        <span>{item.name}</span>
      </div>
    );
  }
}

export default File;