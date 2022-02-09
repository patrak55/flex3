import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Contact = () => {
    return ( 
<div>
<Head>
        <title>Contact page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Contact description" />
   </Head>

   <header className={styles.header}>
       <div className={styles.container}>
           <div>
               <h1>Contact</h1>
               <p>10 million cats and dogs get lost in the United States every year</p>           </div>
           <Image src="/images/myimg01.jpg" width="1000" height="667" alt="rcr" /> 

       </div>
   </header>
</div>
     );
}
 
export default Contact;