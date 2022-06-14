import { useContext } from 'react'
import TimeContext from '../../contexts/TimeContext'
import StatusContext from '../../contexts/StatusContext'
import TimelineContext from '../../contexts/TimelineContext'
import Button from '../Button'
import styles from '../../scss/Controls.module.scss'
import { getCurrentTime } from '../../lib/lib'

const Controls = () => {
  const [time, setTime] = useContext(TimeContext)
  const [status, setStatus] = useContext(StatusContext)
  const [timeline, setTimeline] = useContext(TimelineContext)

  const handleStart = () => {
    setStatus(1)
    setTimeline([{'timersnap': time, 'timestamp': getCurrentTime(), 'action': 'started'}])
  }
  const handleStop = () => {
    setStatus(0)
    setTimeline([...timeline, {'timersnap': time, 'timestamp': getCurrentTime(), 'action': 'stopped'}])
  }

  const handlePause = () => {
    if(status === 1) {
      setStatus(2)
      setTimeline([...timeline, {'timersnap': time, 'timestamp': getCurrentTime(), 'action': 'paused'}])
    } else if(status === 2) {
      setStatus(1)
      setTimeline([...timeline, {'timersnap': time, 'timestamp': getCurrentTime(), 'action': 'continued'}])
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