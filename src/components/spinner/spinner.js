import React from 'react'
import styles from './spinner.module.css'
import './spinner.css'

export default function LoadingSpinner() {
  return (
    <div className={`${styles.container} spinner-container`}>
      <div className="loader" />
    </div>
  )
}
