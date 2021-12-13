import styles from './Categories.module.css'

const Categories = () => {

  return (
    <div className={styles.container}>
      <div className={styles.item}>Hats</div>
      <div className={styles.item}>Shoes</div>
      <div className={styles.item}>Jackets</div>
      <div className={styles.item}>Sports</div>
      <div className={styles.item}>Jewelry</div>
    </div>)
}

export default Categories;
