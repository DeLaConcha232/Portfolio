
import styles from '../styles/page.module.css'
import Welcome from '../components/welcome';
import Proyects from '../components/proyects';
import Skills from '../components/skills';
import Carousel from '../components/carousel';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import IconsTecnologies from '../components/iconsTecnologies';
import Image from 'next/image';

export default function inicio() {
  return (
    <>
      <main className={styles.container}>
        <article className={styles.containerNav}>
          <Navbar />
        </article>
        <Welcome />
        <article className={styles.containerProyects}>
          <IconsTecnologies />
        </article>
        <Skills />
        <article className={styles.containerCarousel}>
          <Carousel />
        </article>
        <article className={styles.containerCVV}>
          <Image src="/assets/curriculum Actulizado_page-0001.jpg" alt="CVV" width={550} height={100}/>
        </article>
        <article className={styles.containerFooter}>
          <Footer />
        </article>
      </main>
    </>
  )
}