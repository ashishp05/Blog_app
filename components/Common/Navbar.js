import React from 'react'
import classes from "./Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Link href={"/"} className={classes.logo}>
         <Image src={"/images/ashish.jpg"} alt='image-logo' width={35} height={40} className={classes.image}/>
         <span className={classes.logo_text} >Blogs</span>
      </Link>
      <div  className={classes.nav_items}>
         <Link href={"/posts"} className={classes.nav_link}>Posts</Link>
         <Link href={"/contact"} className={classes.nav_link}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar