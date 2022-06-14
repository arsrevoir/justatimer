import { useState, useEffect, useRef } from 'react'
import TimelineContext from './contexts/TimelineContext'
import Timer from './components/Timer'
import Timeline from './components/Timeline'
import styles from './scss/App.module.scss'

const App = () => {
  const [timeline, setTimeline] = useState([])  
  const didMount = useRef(false)

  useEffect(() => {
    setTimeline(JSON.parse(localStorage.getItem('timeline')))
  }, [])

  useEffect(() => {
    if(didMount.current) {
      localStorage.setItem('timeline', JSON.stringify(timeline))
    }
  }, [timeline])

  return(
    <div ref={didMount} className={styles.containerWrapper}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <TimelineContext.Provider value={[timeline, setTimeline]}>
              <Timer />
              <Timeline />
            </TimelineContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App