import styles from '../styles/skills.module.css'

export default function Skills() {
    return (
        <>
            <main className={styles.container}>
                <article className={styles.containerLists}>
                    <section className={styles.skills}>
                        <ul className={styles.list}>
                            <h1>HardSkills</h1>
                            <li className={styles.pointList}>Graphic Designer</li>
                            <li className={styles.pointList}>Photo/Video Edition</li>
                            <br />
                            <hr />
                            <br />
                            <li className={styles.pointList}>HTML</li>
                            <li className={styles.pointList}>CSS</li>
                            <li className={styles.pointList}>JavaScript</li>
                            <li className={styles.pointList}>React</li>
                            <li className={styles.pointList}>SQL</li>
                            <li className={styles.pointList}>computer networks</li>
                            <br />
                            <hr />
                            <br />
                            <li className={styles.pointList}>English B2</li>
                            <li className={styles.pointList}>Spanish native</li>
                        </ul>
                    </section>
                    <section className={styles.skills}>
                        <ul className={styles.list}>
                            <h1>SoftSkills</h1>
                            <li className={styles.pointList}>Efective Speaking and writing communication </li>
                            <li className={styles.pointList}>TeamWork</li>
                            <li className={styles.pointList}>Leadership</li>
                            <li className={styles.pointList}>Empathy and Sociability</li>
                            <li className={styles.pointList}>Curiosity and Creative</li>
                            <li className={styles.pointList}>Adaptability and Fellowship</li>
                            <li className={styles.pointList}>Problem Resolutions</li>
                        </ul>
                    </section>
                </article>
            </main>
        </>
    )
}