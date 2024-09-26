
"use client";
import Image from 'next/image';
import styles from '../styles/footer.module.css';
import SocialMedia from './SocialMedia';
import { Button } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

export function TextArea() {
  const variants = ["underlined"];

  return (
    <div className="w-full grid grid-cols-12 gap-4">
      {variants.map((variant) => (
        <Textarea
          key={variant}
          variant={variant}
          label="Message"
          labelPlacement="outside"
          placeholder="Enter your description"
          className="col-span-12 md:col-span-6 mb-10 md:mb-0"
        />
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <footer className={styles.container}>
        <article className={styles.containerInfo}>
          <h1 className={styles.titleInfo}>Informacion de contacto</h1>
          <a href="/assets/curriculum Actulizado.pdf" download="CVV_DiegoDiaz.pdf">
            <Button color="primary" variant="ghost" size='lg'>
              Descargar Curriculum
            </Button>
          </a>
        </article>
        <article className={styles.containerInfo}>
          <h1 className={styles.titleInfo}>Formas de Contacto</h1>
          <SocialMedia />
        </article>
      </footer>
    </>
  )
}


