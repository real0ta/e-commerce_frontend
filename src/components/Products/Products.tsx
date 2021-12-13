import styles from './Products.module.css'
const Products = () => {
  return <div className={styles.container}>
    <div className={styles.item}>
      <div className={styles.img}>image</div>
      <div className={styles.info}>
        <p>name</p>
        <p>price</p>
      </div>
      <a href="#">See more</a>
    </div>
  </div>
}

export default Products
