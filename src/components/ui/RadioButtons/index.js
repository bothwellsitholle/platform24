import React from 'react'
import classes from './index.module.css'
import RoundButton from '../RoundButton'

const RadioButtons = ({ handleChange, options, title, value }) => {

  return (
    <div className={classes.input_wrapper}>
      <p>{title}</p>
      <div className={classes.active_input}>
        {options.map((option) => (
          <RoundButton
            key={option.name}
            isChecked={value === option.name}
            onClick={() => handleChange(option.name)}
            value={option.name}
          >
            {value === option.name ? option.checkedIcon : option.unCheckedIcon}
          </RoundButton>
        ))}
      </div>
    </div>
  )
}

export default RadioButtons
