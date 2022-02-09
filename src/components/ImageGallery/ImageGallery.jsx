import React from 'react';
import styles from '../../App.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import propTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ tags, webformatURL, id }) => (
        <ImageGalleryItem name={tags} url={webformatURL} key={id} />
      ))}
    </ul>
  );
};

ImageGallery.defaultProps = {
  images: [],
};

ImageGallery.propTypes = {
  images: propTypes.array,
};

export default ImageGallery;
