import React from 'react';
import styles from '../../App.module.css';

import propTypes from 'prop-types';

const ImageGalleryItem = ({ url, name, bigUrl, changeModal }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemImage}
        src={url}
        alt={name}
        onClick={() => changeModal(bigUrl, name)}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  url: '',
  name: '',
};

ImageGalleryItem.propTypes = {
  url: propTypes.string,
  name: propTypes.string,
  bigUrl: propTypes.string.isRequired,
  changeModal: propTypes.func.isRequired,
};

export default ImageGalleryItem;
