import React from "react";
import classes from "./ContactsPage.module.css"
const ContactsPage = () => {
    return(
        <div className={classes.body}>
            <div className={classes.leftBlock}>
                <h1>Контакты</h1>
                <h3>Чтобы связаться со мной вы можете выбрать удобный для вас способ ниже. </h3>
                <br></br>
                <h3>Address</h3>
                <h4>Kasimov.FakeStreet.96</h4>
                <h3>E-Mail</h3>
                <h4>Perfi@gmail.con</h4>
                <h3>Phone</h3>
                <h4>7 930 ***-***-**</h4>
            </div>
            <div className={classes.rightBlock}>
                <div className={classes.form}>
                    <h1>Контактная форма</h1>
                    <input placeholder="Ваше имя"></input>
                    <input placeholder="Ваша фамилия"></input>
                    <input placeholder="Тема"></input>
                    <input placeholder="Сообщение"></input>
                    <button>Отправить</button>
                </div>
                </div>
        </div>
    )
}

export default ContactsPage