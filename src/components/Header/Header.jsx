import React from 'react'
import { useNavigation } from '../../hooks/useNavigation'
import Navigation from '../Navigation/Navigation'
import styles from './Header.module.css'

const Header = () => {
  const { handleMobileMenuToggle, isMobileMenuOpen } = useNavigation()

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>Оптимизация веб-ресурсов</h1>
        <p className={styles.headerSubtitle}>
          Современные методы ускорения загрузки страниц
        </p>
      </div>
      
      <button 
        className={styles.mobileMenuBtn}
        onClick={handleMobileMenuToggle}
        aria-label="Открыть меню"
        aria-expanded={isMobileMenuOpen}
      >
        ☰ Меню
      </button>
      
      <Navigation />
    </header>
  )
}

export default Header