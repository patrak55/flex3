import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Contact = () => {
    return ( 
<div>
<Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="new description" />
   </Head>

   <header className={styles.header}>
       <div className={styles.container}>
           <div>
               <h1>Contact</h1>
               <p>Monitor team productivity and performance via automated tools: take screenshots and screen recordings, log team activity levels, monitor app and web use, and a lot more…</p>
           </div>
           <Image src="/images/myimg01.jpg" width="1000" height="667" alt="rcr" /> 

       </div>
   </header>
</div>
     );
}
 
export default Contact;