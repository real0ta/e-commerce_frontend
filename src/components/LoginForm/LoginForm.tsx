import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import styles from "./LoginForm.module.css";
import instance from "../../utils/axios";
import { useDispatch } from "react-redux";
import { addAccessToken, addRefreshToken, Authenticate } from "../../features/user/userSlice";

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<boolean>();

    const dispatch = useDispatch();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        setError(false);
        e.preventDefault();
        try {
            const res = await instance.post("/user/login", {
                email: email,
                password: password,
            });
            dispatch(addAccessToken(res.data.accessToken));
            dispatch(addRefreshToken(res.data.refreshToken));
            dispatch(Authenticate(true));
        } catch (err: any) {
            setError(true);
        }
    };
    return (
        <div className={styles.container}>
            <h3>If you have account</h3>
            {error ? <p className={styles.error}>Wrong email or password</p> : null}
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
