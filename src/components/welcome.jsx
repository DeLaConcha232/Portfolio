
import styles from '../styles/welcome.module.css';
import Image from 'next/image';
import SocialMedia from './SocialMedia';

export default function Welcome() {
    return (
        <>
            <main className={styles.container}>
                <article className={styles.containerInfo}>
                    <section>
                        <Image src="" alt="UserICON" />
                    </section>
                    <section>
                        <h1>Diego Diaz De La Concha</h1>
                        <h2>Software Engineering Student</h2>
                        <h3>Inspirations</h3>
                    </section>
                </article>
                {/* <article className={styles.containerSocialmedia}>
                    <Image src="" alt="github" />
                    <Image src="" alt="Linkedin" />
                    <Image src="" alt="Figma" />
                    <Image src="" alt="Gmail" />
                </article> */}
                <article>
                    <SocialMedia />
                </article>
            </main>
        </>
    )
}