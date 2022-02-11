import React, { Component } from 'react';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import Button from 'components/Button/Button';
import axios from 'axios';

import { TailSpin } from 'react-loader-spinner';

axios.defaults.baseURL = 'https://pixabay.com/api';

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    query: '',
    loading: false,
  };

  getImages = async query => {
    const { currentPage } = this.state;

    this.setState(() => ({
      loading: true,
    }));

    const response = await axios
      .get(
        `?q=${query}&page=${currentPage}&key=25630141-c60d9086e05d3bfd94790a09d&image_type=photo&orientation=horizontal&per_page=12`
      )
      .catch(error => console.error(error))
      .finally(() => {
        this.setState(() => ({
          loading: false,
        }));
      });

    this.setState(prevState => ({
      images: [...prevState.images, ...response.data.hits],
      currentPage: prevState.currentPage + 1,
      query,
    }));
  };

  formSubmit = async query => {
    await this.getImages(query);
  };

  loadMore = async event => {
    event.preventDefault();

    const { query } = this.state;

    await this.getImages(query);
  };

  render() {
    const { images, loading } = this.state;

    const renderingButton = images.length > 0 && !loading;

    return (
      <>
        <Searchbar submitForm={this.formSubmit} />

        {images && <ImageGallery images={images} />}

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
