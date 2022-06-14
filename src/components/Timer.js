import { useState, useEffect, useRef } from 'react'
import TimeContext from '../contexts/TimeContext'
import StatusContext from '../contexts/StatusContext'
import Clock from './Timer/Clock'
import Controls from './Timer/Controls'
import styles from '../scss/Timer.module.scss'

const Timer = () => {
  const [time, setTime] = useState([0, 0, 0])
  const [status, setStatus] = useState(0)
  const didMount = useRef(false)

  useEffect(() => {
    let lcStatus = localStorage.getItem('status')
    let lcTime = localStorage.getItem('time')

    if(lcStatus) setStatus(JSON.parse(lcStatus))
    if(lcTime) setTime(JSON.parse(lcTime))
  }, [])

  useEffect(() => {
    if(didMount.current) {
      localStorage.setItem('status', status)
      localStorage.setItem('time', JSON.stringify(time))
    }
  }, [status, time])

  return(
    <div ref={didMount} className={styles.containerWrapper}>
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