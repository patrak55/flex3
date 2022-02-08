import styles from '../styles/Home.module.css'

const Navbar= () => {
    return ( 
<div>
<nav className={styles.navbar}>
       <div className={styles.container} >
        <div className={styles.logo} >FlexBox</div>
            <ul className={styles.nav} >
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
       </div>
   </nav>
</div>

     );
}
 
export default Navbar;