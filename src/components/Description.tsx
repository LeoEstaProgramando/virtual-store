import ProductProp from '../interfaces/ProductProp'
import styles from './Description.module.css'

export default function Description({product}: ProductProp) {
  return (
    <div className={styles["product-description-block"]}>
      <h1 className={styles["product-title"]}>{product.title}</h1>
      <form className={styles["product-selector"]}>
        <fieldset className={styles["product-fieldset"]}>
          <label className={styles["product-label"]} htmlFor="color">Color</label>
          <select
            className={styles["product-select"]}
            typeof='text'
            aria-placeholder="Selecciona un color"
            id="color"
          >
            {product.colors.map((color, key) => (<option key={key} value={color}>{color}</option>))}
          </select>
        </fieldset>
      </form>
      <div className={styles["product-description"]}>
        <span className={styles["product-label"]}>Descripción</span>
        <p>
          {product.description}
        </p>
      </div>
    </div>
  )
}
