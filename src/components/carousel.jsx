
'use client';
import React, { useState } from "react";
import styles from '../styles/carousel.module.css'; // Importar los estilos desde el archivo CSS
import Image from "next/image";

const images = [
  "/assets/background-3.jpg",
  "/assets/background-3.jpg",
  "/assets/background-3.jpg",
  "/assets/background-3.jpg",
  "/assets/background-3.jpg"
];

const ImageCarousel = () => {
  // Usamos el estado para manejar la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <main className={styles.carouselContainer}>
      {/* Imagen grande seleccionada */}
      <article className={styles.selectedImageContainer}>
        <Image 
        src={selectedImage} 
        alt="Selected" 
        className={styles.selectedImage} 
        width={600}
        height={400}
        decoding="async"
        />
      </article>

      {/* Carrusel pequeño abajo */}
      <article className={styles.carousel}>
        {images.map((image, index) => (
          <section
            key={index}
            className={`${styles.thumbnail} ${selectedImage === image ? styles.active : ''}`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
            src={image} 
            alt={`Thumbnail ${index + 1}`} 
            className={styles.thumbnailImage} 
            width={100}
            height={100}
            decoding="async"
            />
          </section>
        ))}
      </article>
    </main>
  );
};

export default ImageCarousel;
