import styles from './Button.module.css'
type Props = {
    children: string
}
const Button = ({ children }: Props) => {
    return <button className={styles.btn}>{children}</button>
}

export default Button
