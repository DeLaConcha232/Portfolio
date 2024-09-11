import styles from '../styles/skills.module.css'

export default function Skills() {
    return (
        <>
            <main className={styles.container}>
                <article className={styles.skills}>
                    <ul className={styles.list}>
                        <h1>HardSkills</h1>
                        <li>---</li>
                        <li>---</li>
                        <li>---</li>
                        <li>---</li>
                        <li>---</li>
                    </ul>
                </article>
                <article className={styles.skills}>
                    <ul className={styles.list}>
                        <h1>SoftSkills</h1>
                        <li>---</li>
                        <li>---</li>
                        <li>---</li>
                        <li>---</li>
                        <li>---</li>
                    </ul>
                </article>
            </main>
        </>
    )
}