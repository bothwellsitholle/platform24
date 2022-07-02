import React from 'react'
import classes from './index.module.css'
import { Theme } from '../../styles/Theme'
import useStyles from '../../styles/global'
import { Arrow, Avatar, SpaceDivider } from '../../ui/'

const Welcome = ({ showBlogHandler }) => {
  const styles = useStyles()
  return (
    <div
      className={classes.left_content_wrapper}
      style={{ backgroundColor: Theme.yellow }}
    >
      <Avatar />
      <SpaceDivider marginVertical={100} />
      <div className={classes.left_panel_content}>
        <h1 className={styles.title}>Front-end challenge!</h1>
        <p className={styles.subtitle}>
          This is a design that you will need to code up and impress us.
        </p>
        <SpaceDivider marginVertical={40} />
        <div onClick={() => showBlogHandler()}>
          <Arrow />
        </div>
      </div>
    </div>
  )
}

export default Welcome
