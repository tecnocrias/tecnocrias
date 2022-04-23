import styles from './styles.module.scss'

export const Card = props => {
  return (
    <a href="#">
      <div className={styles.card}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </a>
  )
}
