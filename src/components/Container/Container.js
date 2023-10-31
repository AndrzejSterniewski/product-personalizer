import styles from './Container.module.scss';
import PropTypes from 'prop-types';

const Container = (props) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.array
  }

export default Container;