import React from 'react'
import styles from './styles.module.css'

const Button = ({ type, inverted, children }) => {
  return (
    <button
      className={styles[inverted ? 'inverted' : 'button']}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
