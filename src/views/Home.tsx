import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import Product from '../interfaces/Product.js'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);
  const text = useSelector(store => store.products.text)

  useEffect(() => {
    axios.get("/products.json")
      .then((res) => {
        const filterData = res.data.filter((each) => each.title.toLowerCase().includes(text.toLowerCase()))
        setProducts(filterData)
      })
      .catch((err) => console.log(err));
  }, [text]);

  return (
    <>
      <Header></Header>
      <Hero first="tecnología" second="renovada"></Hero>
      <main className="w-full flex justify-center items-center p-[20px]">
        <div className="w-[1080px] flex flex-wrap justify-between" id="products">
          {products.map((product: Product) => (<ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            color={product.colors[0]}
            image={product.images[0]}
          />))}
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
