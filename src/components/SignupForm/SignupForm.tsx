import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import styles from "./SignupForm.module.css";
import instance from "../../utils/axios";
import Button from "../Button/Button";

const SignupForm = (): JSX.Element => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<string>();
    const [usernameError, setUsernameError] = useState<string>();
    const [response, setResponse] = useState<any>("");
    const [resError, setResError] = useState("");
    const validate = () => {
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
        setResError("");
        setResponse("");
        setPasswordError("");
        setUsernameError("");
        validate();

        if (!error) {
            try {
                const res = await instance.post("/user/", {
                    email,
                    username,
                    password: password1,
                });
                setResponse(res);
            } catch (er: any) {
                setResError("Could not register user");
            }
        }
    };

    return (
        <div className={styles.container}>
            <h3>If you don't have account</h3>
            {resError !== "" ? <p className={styles.error}>{resError} </p> : null}

            {response !== "" || response.status === 201 ? (
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
