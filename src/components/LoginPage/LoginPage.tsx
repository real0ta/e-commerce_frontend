import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
    return (
        <div className={styles.container}>
            <LoginForm />

            <SignupForm />
        </div>
    );
};

export default LoginPage;
