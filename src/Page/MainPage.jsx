import React from "react";
import classes from "./MainPage.module.css";
const MainPage = () => {
    return(
        <div className="Main">
            <div className={classes.infoBlock}>
                <div className={classes.infoText}>
                    <h2>Разработка C# WPF приложений<br></br> для ОС Windows с современным дизайном</h2>
                    <h4>Меня завут Перфилов Виталий, я C# разработчик. Я создаю адаптивные windows приложения на фреймворке wpf.</h4>
                </div>
                <div className={classes.infoImage}>
                </div>
            </div>
        </div>
    )
}

export default MainPage;