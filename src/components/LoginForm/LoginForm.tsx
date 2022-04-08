import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import styles from "./LoginForm.module.css";
import instance from "../../utils/axios";
const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [response, setResponse] = useState<object>();
    const [error, setError] = useState<boolean>();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        setError(false);
        e.preventDefault();
        try {
            const res = await instance.post("/user/login", {
                email: email,
                password: password,
            });
            setResponse(res);
        } catch (err: any) {
            setError(true);
        }
    };
    return (
        <div className={styles.container}>
            <h3>If you have account</h3>
            {error ? <p className={styles.error}>Could not login</p> : null}
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
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default LoginForm;
