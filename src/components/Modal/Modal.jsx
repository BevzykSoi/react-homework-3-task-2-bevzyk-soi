import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from '../../App.module.css';
import propTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnKeyDown);
  }

  closeOnKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  closeOnBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.closeOnBackdrop}>
        <div className={styles.Modal}>
          <img src={this.props.largeImageURL} alt={this.props.desc} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.defaultProps = {
  largeImageURL: '',
  desc: '',
};

Modal.propTypes = {
  largeImageURL: propTypes.string,
  desc: propTypes.string,
};
