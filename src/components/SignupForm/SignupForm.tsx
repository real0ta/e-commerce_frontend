import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import styles from "./SignupForm.module.css";
import Button from "../Button/Button";
import { useSignUpUserMutation } from "../../services/ecom";

const SignupForm = (): JSX.Element => {
  const [signUpUser, { isError, isSuccess }] = useSignUpUserMutation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [validationError, setError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>();
  const [usernameError, setUsernameError] = useState<string>();

  const validate = () => {
    // Reset errors
    setPasswordError("");
    setUsernameError("");
    setError(false);
    setPasswordError(undefined);
    setUsernameError(undefined);

    if (password1 !== password2) {
      setPasswordError("Passwords don't match");
      setError(true);
    }
    if (username.includes(" ")) {
      setUsernameError("Username can't contain empty spaces");
      setError(true);
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    validate();

    if (!validationError) {
      signUpUser({
        email,
        username,
        password: password1,
      });
    }
  };

  return (
    <div className={styles.container}>
      <h3>If you don't have account</h3>
      {isError ? (
        <p className={styles.error}>Could not register user </p>
      ) : null}

      {isSuccess ? (
        <p className={styles.success}>Account was succesfully created </p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
          value={email}
          name="email"
          label="E-mail"
          inputType="email"
        />
        <FormInput
          required
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setUsername(e.currentTarget.value)
          }
          value={username}
          name="username"
          label="Username"
          inputType="text"
        />
        {usernameError ? <p className={styles.error}>{usernameError}</p> : null}
        <FormInput
          required
          minLength={8}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setPassword1(e.currentTarget.value)
          }
          value={password1}
          name="password"
          label="Password"
          inputType="password"
        />

        {passwordError ? <p className={styles.error}>{passwordError}</p> : null}
        <FormInput
          required
          minLength={8}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setPassword2(e.currentTarget.value)
          }
          value={password2}
          name="password"
          label="Password"
          inputType="password"
        />

        {passwordError ? <p className={styles.error}>{passwordError}</p> : null}
        <Button>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
