import styles from "./Card.module.css";

export default function Card({ children, title }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    )
}