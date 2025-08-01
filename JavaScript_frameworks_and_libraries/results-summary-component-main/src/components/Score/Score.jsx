import styles from './Score.module.scss'

export default function Score({ score }) {
    return (
        <div className={styles.scoreCircle}>
            <div style={{ position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)' 
                        }}>
                <h1 className={styles.scoreText}>{score}</h1>
                <p className={styles.limit}>of 100</p>
            </div>
        </div>
    )
}