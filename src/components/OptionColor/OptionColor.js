import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionColor = ( props ) => {
    <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map(item =>
            <li key={item}>
              <button type="button" className={clsx(props.prepareColorClassName(item), item === props.currentColor && styles.active)} onClick={() => props.setColor(item)} />
            </li>
          )}
        </ul>
      </div>
}

export default OptionColor;