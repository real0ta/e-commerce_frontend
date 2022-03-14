import FormInput from "../FormInput/FormInput";
import styles from "./SignupForm.module.css";
const SignupForm = () => {
  return (
    <div className={styles.container}>
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
