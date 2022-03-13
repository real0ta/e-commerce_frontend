import styles from "./FormInput.module.css";

interface Props {
    name: string;
    label: string;
    inputType: string;
}

const FormInput: React.FC<Props> = ({ label, inputType, name }) => {
    return (
        <>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} type={inputType} name={name} />
        </>
    );
};

export default FormInput;
