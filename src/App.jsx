import React, { Component } from 'react';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    loading: false,
  };

  getImages = async query => {
    const { currentPage } = this.state;

    const response = await axios
      .get(
        `?q=${query}&page=${currentPage}&key=25630141-c60d9086e05d3bfd94790a09d&image_type=photo&orientation=horizontal&per_page=12`
      )
      .catch(error => console.error(error));

    this.setState(prevState => ({
      images: [...response.data.hits],
    }));
  };

  formSubmit = async query => {
    await this.getImages(query);

    // this.setState({
    //   currentPage: 1,
    //   images: [],
    // });
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <Searchbar submitForm={this.formSubmit} />

        {images && <ImageGallery images={images} />}
      </>
    );
  }
}
