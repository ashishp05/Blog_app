import { useContext } from 'react';
import classes from './Notification.module.css';
import NotificationContext from '@/store/notification-context';
function Notification(props) {
  const { title, message, status } = props;

  const notCtx = useContext(NotificationContext)
  

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;
  function removeNotification(){
    notCtx.hideNotification()
  }
  return (
    <div className={activeClasses} onClick={removeNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;