import React from 'react';
import useStyles from '../../styles/global'

const Button = ({title, type, onClickHandler}) => {
  const styles = useStyles()
  return (
    <button className={type === "primary" ? styles.primaryBtn : styles.secondaryBtn} onClick={() => onClickHandler(type)}>{title}</button>
  )
}

export default Button