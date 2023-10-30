import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = ( props ) => {
  return (
    <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map(item => <li key={item.name}><button type="button" className={clsx(item.name === props.currentSize && styles.active)} onClick={() => props.setSize(item.name)}>{item.name}</button></li>)}
        </ul>
      </div>
  )
}

OptionSize.propTypes = {
  name: PropTypes.string,
  currentSize: PropTypes.string
}

export default OptionSize;