import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = ( props ) => {
  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map(item => <li key={item.name}><button type="button" className={clsx(item.name === props.currentSize && styles.active)} onClick={() => props.setSize(item.name)}>{item.name}</button></li>)}
        </ul>
      </div>
      <OptionSize className={styles.sizes} onClick={props.setSize} setSize={props.setSize} currentSize={props.currentSize} sizes={props.sizes} name={props.name}/>
      
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
      <OptionColor prepareColorClassName={props.prepareColorClassName} setColor={props.setColor} currentColor={props.currentColor} colors={props.colors} onClick={props.onClick} />
      <Button className={styles.button} onClick={props.addToCart}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
};

export default ProductForm;