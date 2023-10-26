import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';

const Product = props => {

  const [currentColor, setColor] = useState(props.colors[0]);
  const [currentSize, setSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = () => {
    const result = props.sizes.find(({ name }) => name === currentSize);
    let sum = props.basePrice + result.additionalPrice;
    console.log('additionalPrice:' + result.additionalPrice);
    console.log('sum:' + sum);
    return sum;
  }

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
    console.log(`Summary\n==============\nName: ${props.title}\nPrice: ${getPrice()}$\nSize: ${currentSize}\nColor: ${currentColor}`);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
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
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  basePrice: PropTypes.number
}

export default Product;