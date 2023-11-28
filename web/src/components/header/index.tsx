

import styles from "./styles.module.css";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <p>home</p>
        <p>cart</p>
        <p>shop<span>0</span></p>
      </div>
    </div>
  )
}