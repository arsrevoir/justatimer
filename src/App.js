import { useState } from 'react'
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
            <Timer />
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App