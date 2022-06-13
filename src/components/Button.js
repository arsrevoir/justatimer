import styles from '../scss/Button.module.scss'
import '../scss/button-colors.scss'

const Button = ({ color, label, handler }) => {

  return(
    <div onClick={handler} className={`${styles.button} ${color}`}>
      <span>
        {label}
      </span>
    </div>
  )
}

export default Button