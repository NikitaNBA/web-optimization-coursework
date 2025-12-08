import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigation } from '../../hooks/useNavigation'
import styles from './Navigation.module.css'

const Navigation = () => {
  const { menuItems, currentPage, isMobileMenuOpen, handlePageChange } = useNavigation()

  return (
    <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ''}`}>
      <ul className={styles.navList}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <Link
              to={item.href}
              className={`${styles.navLink} ${
                currentPage === item.href ? styles.active : ''
              }`}
              onClick={handlePageChange}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation