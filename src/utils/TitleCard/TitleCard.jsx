import styles from "../../components/Header/header.module.css";
import GradientButton from "../GradientButton/GradientButton";
function TitleCard({ title, spotlight, tags, desc, className, href }) {
  return (
    <div className={`${styles.content} ${className}`}>
      <div>{spotlight}</div>
      <h2 className={styles.titleName}>{title}</h2>

      <div className={styles.highlights}>
        {tags.map((item, index) => {
          return (
            <div className={styles.tags} key={index}>
              {item}
            </div>
          );
        })}
      </div>
      <GradientButton href={href} />
      <p>{desc}</p>
    </div>
  );
}
export default TitleCard;
