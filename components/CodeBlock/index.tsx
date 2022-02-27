import classnames from 'classnames'
import styles from './index.module.scss'

interface Props {
  children: React.ReactNode
}

const CodeBlock = ({ children }: Props) => {
  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeDots}>
        <span className={classnames(styles.dot, styles.dotRed)} />
        <span className={classnames(styles.dot, styles.dotOrange)} />
        <span className={classnames(styles.dot, styles.dotGreen)} />
      </div>
      <div className={styles.codeContent}>
        {children}
      </div>
    </div>
  )
}

export default CodeBlock