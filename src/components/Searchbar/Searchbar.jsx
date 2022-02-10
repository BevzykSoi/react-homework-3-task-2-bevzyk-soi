import styles from '../../App.module.css';

import propTypes from 'prop-types';
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  inputChange = event => {
    this.setState({ searchQuery: event.currentTarget.value });
  };

  onSubmit = event => {
      event.preventDefault();

      const { searchQuery } = this.state;
      
      this.props.submitForm(searchQuery);
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            value={searchQuery}
            onChange={this.inputChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  submitForm: propTypes.func.isRequired,
};

export default Searchbar;
