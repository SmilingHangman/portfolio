import React from 'react'
import classes from './Cogs.module.css'

export const Cogs = () => {
  return (
    <div className={classes.cogsWrapper}>
      <h2>A PERPETUAL</h2>
      <div className={classes.cogBox}>
        <div className={classes.cog1}></div>
        <div className={classes.cog2}></div>
      </div>
      <h2>WORK IN PROGRESS</h2>
    </div>
  )
}
