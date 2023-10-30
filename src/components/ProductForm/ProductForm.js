import styles from '../Product/Product.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = ( props ) => {
  return (
    <form>
      <OptionSize className={styles.sizes} setSize={props.setSize} currentSize={props.currentSize} sizes={props.sizes} name={props.name}/>
      <OptionColor prepareColorClassName={props.prepareColorClassName} setColor={props.setColor} currentColor={props.currentColor} colors={props.colors} />
      <Button className={styles.button} onClick={props.addToCart}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
};

export default ProductForm;