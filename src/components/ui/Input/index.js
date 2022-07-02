import React from 'react'
import classes from './index.module.css'

const Input = ({ value, type, placeholder, title, icon, handleChange }) => {
  const [isFocused, setIsFocused] = React.useState(false)
  const styles = isFocused ? classes.focused_input : classes.blur_input
  return (
    <div className={classes.input_wrapper}>
      <p>{title}</p>
      <div
        className={styles}
        onFocus={(e) => setIsFocused(e)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          type={type ? type : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
        {icon}
      </div>
    </div>
  )
}

export default Input
