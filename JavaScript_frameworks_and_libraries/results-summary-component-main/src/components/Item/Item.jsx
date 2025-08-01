import styles from './Item.module.scss';

export default function Item({ icon, category, score }) {
    const item = `${styles.item} ${styles[category.toLowerCase()]}`

    return (
        <div className={item}>
            <div style={{ display: 'flex', gap: '.5rem' }}>
                <img src={icon} alt="icon item" />
                <h3 className="item__category">{category}</h3>
            </div>
            <p className={styles.limit}>
                <span className={styles.score}>{score}</span> / 100
            </p>
        </div>
    )
}