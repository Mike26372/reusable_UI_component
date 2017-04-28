import React, { Component } from 'react';
import File from './File.js';

class Folder extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
    this.handleExpansionClick = this.handleExpansionClick.bind(this);
  }

  componentDidMount() {

  }

  handleExpansionClick() {
    console.log('Expansion clicked');
    let newVisibility = !this.state.visible
    this.setState({
      visible: newVisibility
    })
  }

  render() {
    let {props} = this;
    let {item, level} = props;
    let {children, type, isPrivate} = item;
    console.log(item);
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
    if (type) {

    }

    if (isPrivate) {
      folderType = 'private-folder';
    }

    let expansionStyle = `icon-sprite ${expansionIcon}`;
    let folderStyle = `icon-sprite ${folderType}`;

    return (
      <div className="has-text-left file-style" style={{'margin-left': `${offset}px`}}>
        <span className={expansionStyle} onClick={this.handleExpansionClick}></span>
        <span className={folderStyle}></span>
        <span>{item.name}</span>
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