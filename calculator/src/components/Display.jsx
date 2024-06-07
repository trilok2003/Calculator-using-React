import styles from "./Display.module.css";
const Display = ({ dispalyValue }) => {
  return (
    <>
      <input
        type="text"
        className={styles.dispaly}
        value={dispalyValue}
        readOnly
      />
    </>
  );
};

export default Display;
