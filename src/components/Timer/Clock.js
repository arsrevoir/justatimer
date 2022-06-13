import { useState, useEffect, useContext } from 'react'
import TimeContext from '../../contexts/TimeContext'
import StatusContext from '../../contexts/StatusContext'
import styles from '../../scss/Clock.module.scss'

const Clock = () => {
  const [time, setTime] = useContext(TimeContext)
  const [status, setStatus] = useContext(StatusContext)

  const incrementTime = (timeArr) => {
    if(timeArr[2] !== 59) {
      return [timeArr[0], timeArr[1], timeArr[2]+1]
    } else {
      if(timeArr[1] !== 59) {
        return [timeArr[0], timeArr[1]+1, 0]
      } else {
        return [timeArr[0]+1, 0, 0]
      }
    }
  }

  useEffect(() => {
    let interval
    if(status === 1) {
      interval = setInterval(() => {
        setTime(incrementTime(time))
      }, 1000)
    }

    return () => {
      if(status === 1) clearInterval(interval)
    }
  })

  useEffect(() => {
    if(status === 0) setTime([0,0,0])
  }, [status])

  let parseTime = (time) => {
    return [
      time[0], 
      time[1] < 10 ? `0${time[1]}` : time[1], 
      time[2] < 10 ? `0${time[2]}` : time[2]
    ].join(':')
  }

  return(
    <div className={styles.container}>
      <span className={styles.time}>{parseTime(time)}</span>
    </div>
  )
}

export default Clock