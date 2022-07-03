import React, { useState }from 'react'
import classes from './index.module.css'

const RoundButton = ({ isChecked, value, children, onClickHandler}) => {
  return (
    <>
    <button className={`${isChecked ? classes.active_round_btn:classes.inactive_round_btn} ${classes.round_btn_main_wrapper}` } onClick={onClickHandler}>
     {children} 
    </button>
    <span  className={classes.active_round_btn_title}>{value}</span>
    </>
  )
}

export default RoundButton