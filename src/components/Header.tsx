import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import NavBar from './NavBar'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { captureText } from '../store/actions/products';

export default function Header() {
  
  const text = useRef();
  const dispatch = useDispatch();
  const setText = () => {
    dispatch(captureText({
      text: text.current?.value
    }))
  }

  const location = useLocation();
  const pathname = location.pathname;

  const textStore = useSelector(store => store.products.text)

  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <Link to="/" className={styles["header-logo"]}>
          <img
            className={styles["header-logo-img"]}
            src="/tiendamia-logo.svg"
            width="218"
            alt="Logo store"
          />
        </Link>
        <form className={styles["header-form"]}>
          {pathname === "/" && (<input
            className={styles["header-input"]}
            type="text"
            placeholder="Search"
            id="search"
            ref={text}
            defaultValue={textStore}
            onChange={setText}
          />)}
        </form>
        <ul className={styles["header-social"]}>
          <li id="facebook" className={styles["header-li"]}>
            <Link className={styles["header-a"]} to="https://facebook.com">
              <img
                className={styles["header-social-img"]}
                src="/facebook.png"
              />
            </Link>
          </li>
          <li id="instagram" className={styles["header-li"]}>
            <Link className={styles["header-a"]} to="https://instagram.com">
              <img
                className={styles["header-social-img"]}
                src="/instagram.png"
              />
            </Link>
          </li>
          <li id="cart" className={styles["header-li"]}>
            <Link className={styles["header-a"]} to="/cart">
              <img
                className={styles["header-social-img"]}
                src="/plane.png"
              />
            </Link>
          </li>
        </ul>
      </div>
      <NavBar></NavBar>
    </header>
  )
}
