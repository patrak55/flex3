import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <div>
<Navbar />
   

 

    <header className={styles.header}>
       <div className={styles.container}>
           <div>
               <h1>Time tracking software 2</h1>
               <p>Monitor team productivity and performance via automated tools: take screenshots and screen recordings, log team activity levels, monitor app and web use, and a lot more…</p>
           </div>
           <img  src="images/myimg01.jpg" alt="" />

       </div>
   </header>

    <section className={styles.boxes} >
    <div className={styles.container}>
        <div className={styles.box} >
            <h2><i class="fab fa-app-store"></i>Service 1 </h2>
             <p>Monitor team productivity and performance via automated tools: take screenshots and screen recordings, log team activity levels</p>
        </div>
        <div className={styles.box} >
            <h2><i class="fab fa-app-store"></i>Service 1 </h2>
            <p>Monitor team productivity and performance via automated tools: take screenshots and screen recordings, log team activity levels</p>
       </div>
       <div className={styles.box} >
        <h2><i class="fab fa-app-store"></i>Service 1 </h2>
        <p>Monitor team productivity and performance via automated tools: take screenshots and screen recordings, log team activity levels</p>
   </div>
    </div>

</section>

    </div>
  )
}
