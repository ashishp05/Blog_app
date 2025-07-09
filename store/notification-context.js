import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: function (notifData) {},
  hideNotification: function () {},
});

export function NotificationProvider(props) {
    const [isNotification , setIsNotification] = useState() 

    useEffect(() =>{
        if(isNotification && isNotification.status != 'pending')
        {
            const timer = setTimeout(() =>{
                setIsNotification(null)
            },20000)

            return () =>{
                clearTimeout(timer)
            }
        }
    }, [isNotification])

    function showNotificationHandler(notifData){
        setIsNotification(notifData)

    }
    function hideNotificationHandler(){
        setIsNotification(null)
    }

    const context = {
        notification : isNotification ,
        showNotification : showNotificationHandler ,
        hideNotification : hideNotificationHandler ,
    }
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}
export default NotificationContext;
