import styles from '../styles/OutOfResolution.module.sass'

const OutOfResolution = () => {
  return (
    <div className={styles.outOfResolution}>
        <p>Resolução indísponivel</p>
        <p>Projeto desenvolvido para as seguintes resoluções:</p>
        <br></br>
        <p>1366 x 768</p>
        <p>1920 x 1080</p>
  </div>
  )
}

export default OutOfResolution