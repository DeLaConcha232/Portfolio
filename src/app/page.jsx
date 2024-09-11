
import styles from '../styles/page.module.css'
import Welcome from '../components/welcome';
import Proyects from '../components/proyects';
import Skills from '../components/skills';
import Carousel from '../components/carousel';


export default function inicio(params) {
  return (
    <>
      <main>
        <Welcome />
        <article className={styles.containerProyects}>
          <Proyects />
          <Proyects />
          <Proyects />
          <Proyects />
        </article>
        <Skills />
        <article className={styles.containerCarousel}>
          <Carousel />
        </article>
      </main>
    </>
  )
}