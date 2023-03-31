import styles from "../styles/alert.module.css";
import { clsx } from "clsx";

export default function Alert() {
  return (
    <div
      className="clsx({
            [styles.success] : type === 'success', [styles.error] : type === 'error'"
    ></div>
  );
}
