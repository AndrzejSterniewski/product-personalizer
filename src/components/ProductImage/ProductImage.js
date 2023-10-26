import styles from '../Product/Product.module.scss';

const ProductImage = ( props, { currentColor } ) => {
    return (
        <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
    )
}

export default ProductImage;