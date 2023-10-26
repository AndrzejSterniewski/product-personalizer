import styles from '../Product/Product.module.scss';
import Button from '../Button/Button';
import clsx from 'clsx';

const ProductForm = ( props, addToCart, setSize, currentSize, setColor, currentColor, prepareColorClassName ) => {
    return (
<form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(item => <li key={item.name}><button type="button" className={clsx(item.name === currentSize && styles.active)} onClick={() => setSize(item.name)}>{item.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(item =>
                <li key={item}>
                  <button type="button" className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} onClick={() => setColor(item)} />
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button} onClick={addToCart}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
};

export default ProductForm;