import React from 'react'
import classes from './index.module.css'

const RoundButton = ({isChecked, value, children, onClick}) => {
  return (
    <div className={classes.round_btn_main_wrapper} onClick={onClick}>
    <button className={isChecked ? classes.active_round_btn:classes.inactive_round_btn }>
     {children} 
    </button>
    <span  className={classes.active_round_btn_title}>{value}</span>
    </div>
  )
}

export default RoundButton