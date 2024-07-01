import ProductProp from '../interfaces/ProductProp';
import styles from './Thumbs.module.css'
import { useState, useEffect } from "react";

export default function Thumbs({ product }: ProductProp) {

  const [thumb, setThumb] = useState(product.images[0]);
  
  useEffect(() => {
    setThumb(product.images[0])
  }, [product.id]);
  
  return (
    <section className={styles["product-images-block"]}>
      <div className={styles["product-images"]}>
        {product.images.map((image, key) => (
          <img
            key={key}
            className={styles["mini-img"]}
            src={image}
            alt={product.title}
            onClick={() => setThumb(image)}
          />
        ))}

      </div>
      <img
        className={styles["big-img"]}
        id="big-img"
        src={thumb}
        alt={product.title}
      />
    </section>
  )
}
