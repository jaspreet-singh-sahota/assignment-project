import React from 'react'
import styles from './styles.module.css'

const Button = ({ type, inverted, children }) => {
  return (
    <div>
      <button
        className={ styles[inverted ? 'inverted' : 'button']}
        type={type}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
