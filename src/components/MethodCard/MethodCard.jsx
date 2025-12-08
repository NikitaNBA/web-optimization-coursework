import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MethodCard.module.css'

const MethodCard = ({ 
  title, 
  description, 
  link, 
  icon, 
  direction = 'next' 
}) => {
  const content = (
    <>
      {icon && <div className={styles.icon}>{icon}</div>}
      {direction === 'prev' && <img src="/icons/leftarrow.svg" alt="Предыдущая" className={styles.arrow} />}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {direction === 'next' && <img src="/icons/rightarrow.svg" alt="Следующая" className={styles.arrow} />}
    </>
  )

  return (
    <div className={styles.card}>
      {link ? (
        <Link to={link} className={styles.link}>
          {content}
        </Link>
      ) : (
        <div className={styles.content}>
          {content}
        </div>
      )}
    </div>
  )
}

export default MethodCard