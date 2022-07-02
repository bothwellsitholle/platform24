import React from 'react'
import { ReactComponent as Face } from '../../../assets/images/face.svg'
import classes from './index.module.css'

const Avatar = () => {
  return (
    <div className={classes.avatar_main_wrapper}>
      <Face />
    </div>
  )
}

export default Avatar
