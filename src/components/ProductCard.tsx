import { Link } from "react-router-dom"
import styles from "./ProductCard.module.css"
import Product from "../interfaces/ProductCard"

export default function ProductCard({ id, title, color, price, image }: Product) {


  return (
    <Link className={styles["product-card"]} to={"/details/" + id}>
      <img
        className={styles["product-img"]}
        src={image}
        alt="iPad Pro 12.9"
      />
      <div className={styles["product-info"]}>
        <span className={styles["product-title"]}>{title}</span>
        <span className={styles["product-description"]}>{color}</span>
        <div className={styles["product-price-block"]}>
          <span className={styles["product-price"]}>{price}</span>
          <span className={styles["product-discount"]}>50% Off</span>
        </div>
        <div className={styles["product-tax-policy"]}>
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </Link>
  )
}
