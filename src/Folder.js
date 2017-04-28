import React, { Component } from 'react';
import File from './File.js';

class Folder extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      inFocus: false
    }
    this.handleExpansionClick = this.handleExpansionClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleExpansionClick() {
    let newVisibility = !this.state.visible;
    this.setState({
      visible: newVisibility
    });
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
    let {children, type, isPrivate} = item;
    let nextLevel = level + 1;
    let offset = level * 10;

    let visibility;
    if (!this.state.visible) {
      visibility = {display: "none"};
    } else {
      visibility = {display: "inline"};
    }

    let expansionIcon;

    if (!this.state.visible) {
      expansionIcon = 'plus';
    } else {
      expansionIcon = 'minus';
    }

    let folderType = `folder`;
    if (isPrivate) {
      folderType = 'private-folder';
    }
    let focusStyle = '';

    if (this.state.inFocus) {
      focusStyle = 'focus-file';
    }

    let itemStyle = `has-text-left file-style`;
    let expansionStyle = `icon-sprite ${expansionIcon}`;
    let folderStyle = `icon-sprite ${folderType}`;
    let lineStyle = `spacing ${focusStyle}`;

    return (
      <div className={itemStyle}
           style={{'margin-left': `${offset}px`}}
           >
        <span className={lineStyle}>
          <span className={expansionStyle} onClick={this.handleExpansionClick}></span>
          <span className={folderStyle}></span>
          <span>{item.name}</span>
        </span>
        <ul style={visibility}>
          {
            children.map(item => {
              return item.type === 'folder' ? <li><Folder item={item} level={nextLevel}/></li> : <li><File item={item} level={nextLevel}/></li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Folder;