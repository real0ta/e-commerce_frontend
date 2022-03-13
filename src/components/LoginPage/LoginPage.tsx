import LoginForm from "../LoginForm/LoginForm";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
    return (
        <div className={styles.container}>
            <LoginForm />
            <div className={styles.registration}>registration form</div>
        </div>
    );
};

export default LoginPage;
