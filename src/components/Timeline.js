import {useContext } from 'react'
import TimelineContext from '../contexts/TimelineContext'
import Timersnap from './Timeline/Timersnap'
import styles from '../scss/Timeline.module.scss'

const Timeline = () => {
  const [timeline, setTimeline] = useContext(TimelineContext)

  return(
    <>
      {timeline.length > 0 && (
        <div className={styles.containerWrapper}>
          <div className={styles.container}>
            {timeline.map((timersnap, index) => {
              return <Timersnap key={index} timersnap={timersnap.timersnap} timestamp={timersnap.timestamp} action={timersnap.action}/>
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default Timeline

