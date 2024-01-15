import styles from './Layout.module.css';


export default function Layout({children}) {
  return (
   <>
    <header className={styles.header}>
        <h2>
            Book App
        </h2>

    </header>
        {children}
    <footer className={styles.footer}>
        <h3>
            Developed By Hamed Mahjoobi
        </h3>
    </footer>
   </>
  )
}
