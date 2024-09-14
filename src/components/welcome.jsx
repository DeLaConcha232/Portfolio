
import styles from '../styles/welcome.module.css';
import Image from 'next/image';
import SocialMedia from './SocialMedia';

export default function Welcome() {
    return (
        <>
            <main className={styles.container}>
                <article className={styles.containerall}>
                    <section className={styles.containerInfo}>
                        <section className={styles.containerImageProfile}>
                            <Image src="/" alt="UserICON" width={100} height={125} className={styles.imgProfile} />
                        </section>
                        <section className={styles.containerText}>
                            <h1 className={styles.name}>Diego Diaz De La Concha</h1>
                            <h2 className={styles.journey}>Software Engineering Student</h2>
                            <h3 className={styles.inspirations}>Inspirations</h3>
                        </section>
                    </section>
                    <SocialMedia />
                </article>
            </main>
        </>
    )
}