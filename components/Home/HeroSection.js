import Image from 'next/image'
import React from 'react'
import classes from "./HeroSection.module.css"
const HeroSection = () => {
  return (
    <div className={classes.container}>
        <div className={classes.main}>
            <div className={classes.image}>
                <Image src="/images/ashish.jpg" alt='my-profile-pic' width={250} height={250}  />
            </div>
            <div className={classes.details}>
                <h2 className={classes.name}>Hi , I`m Aashish</h2>
                <p className={classes.skills}>Web Developer | React.js | Next.js | Node.js | MERN</p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection