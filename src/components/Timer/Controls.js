import { useState, useContext } from 'react'
import StatusContext from '../../contexts/StatusContext'
import Button from '../Button'
import styles from '../../scss/Controls.module.scss'

const Controls = () => {
  const [status, setStatus] = useContext(StatusContext)

  const handleStart = () => {
    setStatus(1)
  }
  const handleStop = () => {
    setStatus(0)
  }

  const handlePause = () => {
    if(status === 1) {
      setStatus(2)
    } else if(status === 2) {
      setStatus(1)
    }
  }

  let actionButton
  if(status === 0) {
    actionButton = <Button handler={handleStart} color='green' label='Start' />
  } else if(status === 1 || status === 2) {
    actionButton = <Button handler={handleStop} color='red' label='Stop' />
  }

  let pauseButton 
  if(status === 1 || status === 0) {
    pauseButton = <Button handler={handlePause} color='gray' label='Pause' />
  } else if(status === 2) {
    pauseButton = <Button handler={handlePause} color='gray' label='Continue' />
  }

  return(
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        {actionButton}
        {pauseButton}
      </div>
    </div>
  )
}

export default Controls