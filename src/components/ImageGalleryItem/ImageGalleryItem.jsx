import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, modalFn }) => {
  const handleClick = e => {
    modalFn(e.target.attributes[2].value);
  };

  return (
    <GalleryItem>
      <GalleryItemImg
        src={webformatURL}
        alt={tags}
        onClick={handleClick}
        data-large={largeImageURL}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  modalFn: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
