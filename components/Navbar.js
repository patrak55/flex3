import styles from '../styles/Home.module.css'
import Link from "next/link"


const Navbar= () => {
    return ( 
<div>
<nav className={styles.navbar}>
       <div className={styles.container} >
        <div className={styles.logo} >FurryTag</div>
            <ul className={styles.nav} >
                <li>
                    <Link href="/"><a href="#">Home</a></Link>
                </li>
                <li>
                <Link href="/about"><a href="#">About</a></Link>
                </li>
                <li>
                <Link href="/contact"><a href="#">Contact</a></Link>
                </li>
                <li>
                <Link href="/dog"><a href="#">Dog</a></Link>
                </li>
                <li>
                <Link href="/mathis"><a href="#">Mathis</a></Link>
                </li>
    
            </ul>
       </div>
   </nav>
</div>

     );
}
 
export default Navbar;