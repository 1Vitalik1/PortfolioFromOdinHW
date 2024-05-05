import React from "react";
import classes from './NotFoundPage.module.css'
import { Link } from "react-router-dom";
const NotFoundPage = () => {
    return(
        <div className={classes.NotFoundPage}>
            <div className={classes.Center}>
                <div>Хм... Такой страницы не существует</div>
                <div>Page not found 404</div><br></br>
                <div className={classes.button}><Link className={classes.link} to={'/main'}><div>Вернуться на главную</div></Link></div>
            </div>
        </div>
    );
}

export default NotFoundPage;