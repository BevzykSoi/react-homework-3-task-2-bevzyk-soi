import React from 'react';
import styles from '../../App.module.css';

import propTypes from 'prop-types';

const ImageGalleryItem = ({ url, name, id }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img className={styles.ImageGalleryItemImage} src={url} alt={name} />
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
};

export default ImageGalleryItem;
