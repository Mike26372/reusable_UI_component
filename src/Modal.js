import React, { Component } from 'react';
import folderStructure from './folderStructure.js';
import Folder from './Folder.js';
import File from './File.js';

class Modal extends Component {
  render() {
    return (
      <div className="modal is-active">
        <div className=""></div>
        <div className="card modal-card ethos-card">
          <header className="modal-card-head">
            <p className="modal-card-title has-text-left">Title</p>
            <button className="delete"></button>
          </header>
          <section className="modal-card-head folder-label">
            <input id="label-input" className="input" type="text" placeholder="Label"/>
          </section>
          <section className="modal-card-body">
            <ul>
              {
                folderStructure.map(item => {
                  return item.type === 'folder' ? <li><Folder item={item} level={1}/></li> : <li><File item={item} level={1}/></li>
                })
              }
            </ul>
          </section>
          <footer className="modal-card-foot ethos-footer">
            <a className="button is-pulled-left ethos-link">Link</a>
            <a className="button is-info is-pulled-right">Normal</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default Modal;