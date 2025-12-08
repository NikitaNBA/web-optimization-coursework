import React from 'react'
import styles from './CodeExample.module.css'

const CodeExample = ({ title, code, type = 'good' }) => {
  return (
    <div className={`${styles.example} ${styles[type]}`}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <pre className={styles.code}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default CodeExample