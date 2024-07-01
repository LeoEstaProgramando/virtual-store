import CartCard from '../components/CartCard'
import CartResume from '../components/CartResume'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { useState, useEffect } from 'react'
import Product from '../interfaces/Product'
import { useDispatch } from 'react-redux'
import { calculateTotal } from '../store/actions/products'

export default function Cart() {

  const [productsOnCart, setProductsOnCart] = useState([]);
  
  const dispatch = useDispatch();


  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const products = JSON.parse(localStorage.getItem("cart"));
      setProductsOnCart(products);
      dispatch(calculateTotal({products: products}))
    } else {
      setProductsOnCart([])
      dispatch(calculateTotal({products: []}))
    }
  }, [productsOnCart]);

  return (
    <>
      <Header></Header>
      <Hero first="Mi" second="Carrito"></Hero>
      <main className='flex flex-row'>
        <section>
          {productsOnCart.map((product: Product) => (<CartCard product={product} key={product.id}></CartCard>))}
        </section>
        <CartResume></CartResume>
      </main >
      <Footer></Footer>
    </>
  )
}
