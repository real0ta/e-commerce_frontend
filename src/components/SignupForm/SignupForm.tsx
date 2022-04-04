import FormInput from "../FormInput/FormInput";
import styles from "./SignupForm.module.css";
const SignupForm = () => {
    return (
        <div className={styles.container}>
            <h3>If you don't have account</h3>
            <form>
                <FormInput name="email" label="E-mail" inputType="email" />
                <FormInput name="password" label="Password" inputType="password" />
                <FormInput name="password" label="Password" inputType="password" />
            </form>
            <button>Sign Up</button>
        </div>
    );
};

export default SignupForm;
