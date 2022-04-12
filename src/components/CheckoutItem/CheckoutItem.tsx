import styles from "./CheckoutItem.module.css";

type Props = {
    price: number;
    name: string;
    image: string;
    amount: number;
};
const CheckoutItem = ({ price, image, amount, name }: Props) => {
    return (
        <article className={styles.item}>
            <img src={`http://localhost:3001/${image}`} alt={name} />
            <p>{price}$</p>
            <p>{amount}</p>
            <p>X</p>
        </article>
    );
};

export default CheckoutItem;
