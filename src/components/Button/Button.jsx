import styles from '../../App.module.css';

import propTypes from 'prop-types';

const Button = ({ onLoadMore }) => {
  return (
    <div className={styles.ButtonWrapper}>
      <button className={styles.Button} type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onLoadMore: propTypes.func.isRequired,
};

export default Button;
