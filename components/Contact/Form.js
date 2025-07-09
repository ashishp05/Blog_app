import React, { useContext, useRef } from "react";
import classes from "./Form.module.css";
import NotificationContext from "@/store/notification-context";
const Form = () => {

    const refName = useRef()
    const refEmail = useRef()
    const refText = useRef()

    const NotificationCtx = useContext(NotificationContext)

    function formHandler(e) {
        e.preventDefault()
        const enteredName = refName.current.value;
        const enteredEmail = refName.current.value;
        const enteredText = refText.current.value;

        fetch("/api/contact" , {
            method : 'POST',
            body : JSON.stringify({
                name : enteredName ,
                email : enteredEmail ,
                text : enteredText
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(data => {

            NotificationCtx.showNotification({
                title : "Message Send!",
                message : "Message send successfully.",
                status :'success'
            })
            
            refName.current.value = "";
            refEmail.current.value = "";
            refText.current.value = "";
        }
        ).catch(err => {
             NotificationCtx.showNotification({
                title : "Message Failed!",
                message : "Error in Message.",
                status :'error'
            })
        })

    }
  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={formHandler}>
        <div className={classes.formField}>
          <label htmlFor="name" className={classes.formLabel}>
            Enter name :
          </label>
          <input
            type="text"
            name="name"
            className={classes.formInput}
            required
            ref={refName}
          />
        </div>
        <div className={classes.formField}>
          <label htmlFor="email" className={classes.formLabel}>
            Enter Email :
          </label>
          <input
            type="email"
            name="email"
            className={classes.formInput}
            required
            ref={refEmail}
          />
        </div>
        <div className={classes.formField}>
          <label htmlFor="text" className={classes.formLabel}>
            Enter your Message :
          </label>
          <textarea name="text" className={classes.formInput} ref={refText}></textarea>
        </div>
        <button type="submit" className={classes.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
