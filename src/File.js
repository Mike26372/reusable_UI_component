import React, { Component } from 'react';

class File extends Component {

  constructor() {
    super();
    this.state = {
      inFocus: false
    }
    this.handleFocus = this.handleFocus.bind(this);
  }
  handleFocus() {
    let newFocusState = !this.state.inFocus;
    this.setState({
      inFocus: newFocusState
    });
  }
  render() {
    let {props} = this;
    let {item, level} = props;
    let nextLevel = level + 1;
    let offset = level * 10;

    let focusStyle = '';

    if (this.state.inFocus) {
      focusStyle = 'focus-file';
    }

    let itemStyle = `has-text-left file-style`;
    let lineStyle = `spacing ${focusStyle}`;

    return (
      <div className={itemStyle} style={{'margin-left': `${offset}px`}} onClick={this.handleFocus}>
        <span className={lineStyle}>
          <span className="icon-sprite placeholder"></span>
          <span className="icon-sprite list"></span>
          <span>{item.name}</span>
        </span>
      </div>
    );
  }
}

export default File;