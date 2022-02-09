import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const About = () => {
    return ( 

<div>

   <Head>
        <title>About Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="About description" />
   </Head>

   <header className={styles.header}>
       <div className={styles.container}>
           <div>
               <h1>About</h1>
               <p>10 million cats and dogs get lost in the United States every year</p>          </div>
           <Image src="/images/myimg01.jpg" width="1000" height="667" alt="rcr" /> 

       </div>
   </header>

   <section className={styles.boxes} >
    <div className={styles.container}>
        <div className={styles.box} >
            <h2><i className="fab fa-app-store"></i>Service 1 </h2>
             <p>Monitor team productivity and performance via automated tools: take screenshots and screen recordings, log team activity levels</p>
        </div>
        <div className={styles.box} >
            <h2><i className="fab fa-app-store"></i>Service 1 </h2>
            <p>Monitor team productivity and performance via automated tools: take screenshots and screen recordings, log team activity levels</p>
       </div>
       <div className={styles.box} >
        <h2><i className="fab fa-app-store"></i>Service 1 </h2>
        <p>Monitor team productivity and performance via automated tools: take screenshots and screen recordings, log team activity levels</p>
   </div>
    </div>

</section>


</div>

     );
}
 
export default About;