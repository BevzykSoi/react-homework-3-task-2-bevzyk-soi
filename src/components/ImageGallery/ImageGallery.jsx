import React from 'react';
import styles from '../../App.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import propTypes from 'prop-types';

const ImageGallery = ({ images, changeModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ tags, webformatURL, id, largeImageURL }) => (
        <ImageGalleryItem
          name={tags}
          url={webformatURL}
          key={id}
          bigUrl={largeImageURL}
          changeModal={changeModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.defaultProps = {
  images: [],
};

ImageGallery.propTypes = {
  images: propTypes.array,
  changeModal: propTypes.func.isRequired,
};

export default ImageGallery;
