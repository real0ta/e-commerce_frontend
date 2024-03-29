import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import styles from "./LoginForm.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useSignInUserMutation } from "../../services/ecom";

const LoginForm = () => {
  const [signInUser, { isError, isSuccess }] = useSignInUserMutation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await signInUser({
      email,
      password,
    }).unwrap();

    if (isSuccess) navigate(-1);
  };
  return (
    <div className={styles.container}>
      <h3>If you have account</h3>
      {isError ? <p className={styles.error}>Wrong email or password</p> : null}
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
          label="E-mail"
          name="email"
          inputType={"email"}
          value={email}
          required
        />
        <FormInput
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
          label="Password"
          name="password"
          inputType="password"
          value={password}
          required
          minLength={8}
        />
        <Button>Sign In</Button>
      </form>
    </div>
  );
};

export default LoginForm;
