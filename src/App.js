import { useState } from 'react'
import TimelineContext from './contexts/TimelineContext'
import Timer from './components/Timer'
import Timeline from './components/Timeline'
import styles from './scss/App.module.scss'

const App = () => {
  const [timeline, setTimeline] = useState([])  

  return(
    <div className={styles.containerWrapper}>
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