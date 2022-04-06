import React from "react";
import styles from "./FormInput.module.css";

interface Props {
    name: string;
    label: string;
    inputType: string;
    required?: boolean;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    value?: string;
}

const FormInput = ({
    label,
    inputType,
    name,
    ...otherProps
}: Props): JSX.Element => {
    return (
        <>
            <label className={styles.label}>{label}</label>
            <input
                {...otherProps}
                className={styles.input}
                type={inputType}
                name={name}
            />
        </>
    );
};

export default FormInput;
