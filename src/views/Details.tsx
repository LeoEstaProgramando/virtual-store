import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from './Details.module.css'
import { useParams } from "react-router-dom";
import Hero from '../components/Hero.js';
import ProductCard from '../components/ProductCard.js';
import Thumbs from '../components/Thumbs.js';
import Description from '../components/Description.js';
import Checkout from '../components/Checkout.js';
import Product from '../interfaces/Product.js';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Details() {

  const { productId } = useParams();

  const [product, setProduct] = useState<Product>({
    id: "",
    title: "",
    price: 0,
    images: [],
    colors: [],
  });

  const [onsale, setOnSale] = useState<Product[]>([]);

  useEffect(() => {
    axios("/products.json")
      .then((res) => {
        const products: Array<Product> = res.data;
        const detailProduct: Product | undefined = products.find(
          (each) => each.id === productId
        );
        detailProduct && setProduct(detailProduct);
        const filterProducts: Array<Product> = products.filter(
          (each) => each.onsale
        );
        filterProducts.length > 0 && setOnSale(filterProducts);
      })
      .catch((err) => console.log(err));
  }, [productId]);


  return (
    <>
      <Header></Header>
      {!product && <Hero first="404" second="not found" />}
      <main>
        <div className={styles["details-container"]}>
          {product && (<div id="details" className={styles["columns-container"]}>
            <Thumbs product={product}></Thumbs>
            <Description product={product}></Description>
            <Checkout product={product}></Checkout>
          </div>)}
          <div className={styles["sales-block"]}>
            <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
            <div id="product-container" className={styles["product-container"]}>
              {onsale.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  color={product.colors[0]}
                  image={product.images[0]}></ProductCard>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
