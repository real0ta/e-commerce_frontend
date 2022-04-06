import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import styles from "./SignupForm.module.css";
import instance from "../../utils/axios";

const SignupForm = (): JSX.Element => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");
    const [response, setResponse] = useState<any>();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError("");
        if (password1 !== password2) {
            setError("Passwords don't match");
        }
        try {
            const res = await instance.post("/user/", {
                email,
                username,
                password: password1,
            });
            setResponse(res.status);
        } catch (er: any) {
            console.log(er.response);
        }
    };

    return (
        <div className={styles.container}>
            <h3>If you don't have account</h3>
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
                <FormInput
                    required
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        setPassword1(e.currentTarget.value)
                    }
                    value={password1}
                    name="password"
                    label="Password"
                    inputType="password"
                />
                <FormInput
                    required
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        setPassword2(e.currentTarget.value)
                    }
                    value={password2}
                    name="password"
                    label="Password"
                    inputType="password"
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
