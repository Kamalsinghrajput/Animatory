import styles from "./GradientButton.module.css";
import images from "../../constants/images";
import { FaRegPlayCircle } from "react-icons/fa";

export default function GradientButton({ href, text }) {
  return (
    <a href={href} target="_blank" className={styles.gradientButton}>
      <img className={styles.button} src={images.button} alt="" />
      <div className={styles.watchnow}>
        Watch now <FaRegPlayCircle />
      </div>
    </a>
  );
}
