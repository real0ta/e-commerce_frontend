import FormInput from "../FormInput/FormInput";
import styles from "./LoginForm.module.css";
const LoginForm = () => {
    return (
        <div className={styles.container}>
            <h3>If you have account</h3>
            <form>
                <FormInput label="E-mail" name="email" inputType={"email"} />
                <FormInput label="Password" name="password" inputType="password" />
            </form>
            <button>Sign In</button>
        </div>
    );
};

export default LoginForm;
