import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setColor] = useState(props.colors[0]);
  const [currentSize, setSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  // const getPrice = () => {
  //   let addPrice = props.sizes.find('additionalPrice');

  //   return props.basePrice + addPrice;
  // }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          {/* <h2 className={styles.name}>Kodilla shirt</h2> */}
          <h2 className={styles.name}>{props.title}</h2>
          {/* <span className={styles.price}>Price: 20$</span> */}
          <span className={styles.price}>Price: {props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(item => <li key={item.name}><button type="button" className={clsx(item.name === currentSize && styles.active)} onClick={() => setSize(item.name)}>{item.name}</button></li>)}
              {/* <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li> */}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(item =>
                <li key={item.name}>
                  <button type="button" className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} onClick={() => setColor(item)} />
                </li>
              )}
              {/* {products.map(product => <Product key={product.id} {...product}/>)} */}
              {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}
            </ul>
          </div>
          <Button className={styles.button}>
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