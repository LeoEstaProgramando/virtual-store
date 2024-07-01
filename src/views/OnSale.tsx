import styles from './OnSale.module.css'
import Footer from "../components/Footer";
import Header from "../components/Header";
import OnSaleCard from "../components/OnSaleCard";
import products from "../assets/products.js";
import { useState } from 'react';


export default function OnSale() {

  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(4);

  const onsaleProducts = products.filter(product => product.onsale === true);

  function prevProduct() {
    if (from >= 1 && to <= onsaleProducts.length + 1) {
      setFrom(from - 1);
      setTo(to - 1);
    }
  }

  function nextProduct() {
    if (from >= 0 && to <= onsaleProducts.length) {
      setFrom(from + 1);
      setTo(to + 1);
    }
  }

  return (
    <>
      <Header></Header>
      <main>
        <button onClick={prevProduct}>Anterior</button>
        <div className={styles["product-container"]} id="products">
          {onsaleProducts.slice(from, to).map(product => (<OnSaleCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            color={product.colors[0]}
            image={product.images[0]}
          />))}
        </div>
        <button onClick={nextProduct}>Siguiente</button>

      </main>
      <Footer></Footer>
    </>
  )
}
