import React, { useState, useEffect } from 'react';
import { Cont } from './Cont';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';
import { Rings } from 'react-loader-spinner';

export default function App() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [showLoader, setShowLoader] = useState(false);


  useEffect(() => {
    if (searchQuery !== '') {
      fetch(
        `https://pixabay.com/api/?key=34889854-1af62613b01e34ca3c220e7a9&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const newData = data.hits;
          setShowLoader(false);
          setData(data => {
            if (page === 1) {
              return newData;
            }
            return [...data, ...newData];
          });
        });
    }
  }, [searchQuery, page]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setData([]);
  };

  const loadMore = () => {
    setShowLoader(true);
    setPage(prevPage => prevPage + 1);
  };

  const openLargeImage = linkImg => {
    setModalImage(linkImg);
    setShowModal(true);
  };

  return (
    <Cont as="div" p={0}>
      {showModal && (
        <Modal closeFn={() => setShowModal(false)} loader={setShowLoader}>
          <img src={modalImage} alt="modal" />
        </Modal>
      )}
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      <ImageGallery
        searchQuery={searchQuery}
        page={page}
        data={data}
        modalFn={openLargeImage}
        loader={setShowLoader}
      ></ImageGallery>

      {data.length >= 12 && (
        <Cont
          as="div"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          pt={30}
          pb={30}
        >
          {showLoader && (
            <Rings
              visible={true}
              height="80"
              width="80"
              radius="6"
              ariaLabel="rings-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
            />
          )}
          <Button onClick={loadMore}></Button>
        </Cont>
      )}
    </Cont>
  );
}
