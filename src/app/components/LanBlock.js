
import styles from './LanBlock.module.css'




const LanBlock = (props) => {



  return (
    <div className={styles.lanblock} >
      <div className={styles.lanimg}>
        <div className={styles.cut}>

        </div>
        <div className={styles.undercut} >

        </div>
        <div  className={styles.exte}>
          {props.ext}
        </div>
      </div>
      <div style={{color:'white' ,  fontWeight:'400' , marginTop:'10px'}}>{props.lan}</div>
       
    </div>
  )
}


export default LanBlock ;