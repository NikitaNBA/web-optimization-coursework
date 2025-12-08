import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          © 2025 Белорусский государственный технологический университет. Все права защищены.
        </p>
        <p className={styles.footerText}>
          Материалы по оптимизации скорости загрузки веб-страниц.
        </p>
      </div>
    </footer>
  )
}

export default Footer