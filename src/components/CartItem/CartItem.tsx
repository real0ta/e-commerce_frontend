import styles from "./CartItem.module.css";

type Props = {
    amount: number;
    image: string;
    id: string;
    name: string;
    price: number;
};
const CartItem = ({ amount, image, id, name, price }: Props) => (
    <article className={styles.product}>
        <img src={`http://localhost:3001/${image}`} alt={name} />
        <div className={styles.info}>
            <p>
                {amount}X{price}$
            </p>
        </div>
    </article>
);

export default CartItem;
