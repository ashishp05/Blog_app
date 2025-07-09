import React, { Fragment, useContext } from 'react'
import Navbar from './Navbar'
import NotificationContext from '@/store/notification-context'
import Notification from '../notification/Notification'

const Layout = (props) => {
   const notificationCtx = useContext(NotificationContext)
    const active = notificationCtx.notification
  return (
    <Fragment>
    
<Navbar></Navbar>
      <main>{props.children}</main>
      <div className='notification'>
     {active && <Notification  title={active.title} message={active.message} status={active.status} /> }
        
        </div>    
        
    </Fragment>
  )
}

export default Layout