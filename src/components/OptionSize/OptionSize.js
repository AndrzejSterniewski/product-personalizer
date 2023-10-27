import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionSize = ( props ) => {
    <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map(item => <li key={item.name}><button type="button" className={clsx(item.name === props.currentSize && styles.active)} onClick={() => props.setSize(item.name)}>{item.name}</button></li>)}
        </ul>
      </div>
}

export default OptionSize;