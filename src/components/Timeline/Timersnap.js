import { parseTime } from '../../lib/lib'
import styles from '../../scss/Timersnap.module.scss'


const Timersnap = ({ timersnap, timestamp, action }) => {
  let color
  if(action === 'started' || action === 'continued') {
    color = {
      dark: '#91AD9A',
      light: '#B4C3B3'
    }
  } else if(action === 'paused') {
    color = {
      dark: '#9199AD',
      light: '#B3B8C3'
    }
  } else if(action === 'stopped') {
    color = {
      dark: '#AD9191',
      light: '#C3B3B3'
    }
  }

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <div className={styles.timersnap}>
          <span style={{color: color.dark}}>
            {parseTime(timersnap)}
          </span>
        </div>
        <div className={styles.action}>
          <span style={{color: color.light}}>
            {action}
          </span>
        </div>
        <div className={styles.timestamp}>
          <span style={{color: color.dark}}>
            at {timestamp}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Timersnap