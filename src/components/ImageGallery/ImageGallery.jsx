import React from 'react';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ data, modalFn }) => {
  return (
    <Gallery>
      {data.map(({ webformatURL, id, tags, largeImageURL }, index) => (
        <ImageGalleryItem
          webformatURL={webformatURL}
          key={id}
          index={index}
          tags={tags}
          largeImageURL={largeImageURL}
          modalFn={modalFn}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  modalFn: PropTypes.func.isRequired,
};

export default ImageGallery;
