import { useState } from 'react'
import TimeContext from '../contexts/TimeContext'
import StatusContext from '../contexts/StatusContext'
import Clock from './Timer/Clock'
import Controls from './Timer/Controls'
import styles from '../scss/Timer.module.scss'

const Timer = () => {
  const [time, setTime] = useState([0, 0, 0])
  const [status, setStatus] = useState(0)

  return(
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <TimeContext.Provider value={[time, setTime]}>
          <StatusContext.Provider value={[status, setStatus]}>
            <Clock />
            <Controls />
          </StatusContext.Provider>
        </TimeContext.Provider>
      </div>
    </div>
  )
}

export default Timer