import styles from './SideCard.module.css';
export default function SideCard({data: {image, title}}) {
  return (
    <>
        <div className={styles.card}>
      <img src={image} alt={title}></img>
      <p>{title}</p>
    </div>
    <hr/>
    </>
  )
}
