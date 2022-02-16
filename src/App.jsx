import React, { Component } from 'react';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import axios from 'axios';

import { TailSpin } from 'react-loader-spinner';

axios.defaults.baseURL = 'https://pixabay.com/api';

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    query: '',
    loading: false,
    showModal: false,
    currentImage: "",
    currentDesc: "",
  };

  loadImages = async (searchQuery, page) => {
    this.setState({
      loading: true,
    });

    const response = await axios
      .get(
        `?q=${searchQuery}&page=${page}&key=25630141-c60d9086e05d3bfd94790a09d&image_type=photo&orientation=horizontal&per_page=12`
      )
      .catch(error => console.error(error))
      .finally(() => {
        this.setState({
          loading: false,
        });
      });

    this.setState({ currentPage: page, query: searchQuery });

    return response.data.hits;
  };

  formSubmit = async query => {
    // To show loader on the top of the page
    this.setState({ images: [] });

    const photos = await this.loadImages(query, 1);
    this.setState({ images: photos });
  };

  loadMore = async event => {
    event.preventDefault();

    const { query, currentPage } = this.state;

    const photos = await this.loadImages(query, currentPage + 1);
    this.setState(prevState => ({
      images: [...prevState.images, ...photos],
    }));
  };

  toggleModal = (bigUrl, name) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      currentImage: bigUrl,
      currentDesc: name,
    }));
  };

  render() {
    const { images, loading, query, showModal, currentImage, currentDesc } = this.state;

    const renderingButton = query && images.length > 0 && !loading;

    return (
      <>
        {showModal && (
          <Modal
            largeImageURL={currentImage}
            desc={currentDesc}
            onClose={this.toggleModal}
          />
        )}

        <Searchbar submitForm={this.formSubmit} />

        {query && (
          <ImageGallery images={images} changeModal={this.toggleModal} />
        )}

        {loading && (
          <TailSpin
            heigth="100"
            width="100"
            color="#ce0b0b"
            ariaLabel="loading"
            wrapperClass="loader"
          />
        )}

        {renderingButton && <Button onLoadMore={this.loadMore} />}
      </>
    );
  }
}
