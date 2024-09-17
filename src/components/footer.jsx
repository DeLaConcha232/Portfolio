
import styles from '../styles/footer.module.css';
import SocialMedia from './SocialMedia';

export default function Footer() {
    return (
        <>
            <footer className={styles.container}>
                <form action="" className={styles.containerForms}>
                    <h1>Dejame un mensaje</h1>
                    <input type="text" placeholder="Nombre" className={styles.inputs}/>
                    <input type="text" placeholder="Correo" className={styles.inputs}/>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button type="submit">Enviar</button>
                </form>
                <article className={styles.containerInfo}>
                    <h1 className={styles.titleInfo}>Informacion de contacto</h1>
                    <SocialMedia />
                </article>
            </footer>
        </>
    )
}