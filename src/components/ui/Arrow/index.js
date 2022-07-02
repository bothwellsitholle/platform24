import React, { useState } from 'react'
import classes from './index.module.css'
import { ReactComponent as Arrow } from '../../../assets/images/arrow.svg'
import useStyles from '../../styles/global'
import { Theme } from '../../styles/Theme'

const ArrowButton = () => {
  const [rotate, setRotate] = useState(false)
  const styles = useStyles()
  return (
    <button
      style={{ backgroundColor: Theme.charcoalGrey }}
      className={
        rotate
          ? `${styles.rotateBtn} ${classes.arrow_main_wrapper}`
          : styles.arrowMainWrapper
      }
      onClick={() => {
        setRotate((prev) => !prev)
      }}
    >
      <Arrow />
    </button>
  )
}

export default ArrowButton
