import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setColor] = useState(props.colors[0]);
  const [currentSize, setSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const price = useMemo(() => {
    const sizes = props.sizes.find(({ name }) => name === currentSize);
    let sum = props.basePrice + sizes.additionalPrice;
    return sum;
  }, [props.basePrice, props.sizes, currentSize]);

  const addToCart = e => {
    e.preventDefault();
    // Summary using object:
    // let summary = {
    //   Name: props.title,
    //   Price: props.basePrice,
    //   Size: currentSize,
    //   Color: currentColor,
    // };
    // console.log(summary);
    console.log(`Summary\n==============\nName: ${props.title}\nPrice: ${price}$\nSize: ${currentSize}\nColor: ${currentColor}`);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm addToCart={addToCart} setSize={setSize} setColor={setColor} currentColor={currentColor} currentSize={currentSize} prepareColorClassName={prepareColorClassName} colors={props.colors} sizes={props.sizes} />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  image: PropTypes.string,
  basePrice: PropTypes.number,
  price: PropTypes.number
}

export default Product;