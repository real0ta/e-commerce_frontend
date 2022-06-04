import styles from "./CartItem.module.css";

type Props = {
  amount: number;
  image: {
    data: [];
  };
  id: string;
  name: string;
  price: number;
};
const CartItem = ({ amount, image, id, name, price }: Props) => (
  <article className={styles.product}>
    <img
      src={`data:image/png;base64,${btoa(
        String.fromCharCode(...new Uint8Array(image.data))
      )}`}
      alt={name}
    />
    <div className={styles.info}>
      <p>
        {amount}X{price}$
      </p>
    </div>
  </article>
);

export default CartItem;
