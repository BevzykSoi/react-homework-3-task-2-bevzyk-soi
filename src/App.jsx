import React, { Component } from 'react';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    query: '',
    loading: false,
  };

  async componentDidMount() {
    await this.getImages();
  }

  getImages = async () => {
    const response = await axios
      .get(
        '?q=forest&page=1&key=25630141-c60d9086e05d3bfd94790a09d&image_type=photo&orientation=horizontal&per_page=12'
      )
      .catch(error => console.error(error));
    
    this.setState(prevState => ({
      images: [...prevState.images, ...response.data.hits]
    }));
  };

  render() {
    const { images } = this.state;

    return images && <ImageGallery images={images} />;
  }
}
