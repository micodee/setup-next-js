import styles from './layout.module.css'

export default function ComponentLayout({children}) {
 return (
  <div className={styles.container}>{children}</div>
 )
}