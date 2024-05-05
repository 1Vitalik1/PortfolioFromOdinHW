import React from "react";
import classes from "./PortfolioPage.module.css"
import { Link } from "react-router-dom";
let PortfolioPage = () => {
    return(
        <div className={classes.portfolioBlock}>
            <div className={classes.personInfo}>
                <div className={classes.subPersonInfo}>
                    <div>
                        <img src="https://sun9-79.userapi.com/impg/RfmTcA_xUhDMNBWTw57wdELdEaRfYoqxvsQpnw/Sc3s7ya0f_k.jpg?size=500x500&quality=95&sign=c1bfdf7111eaf3adbd9d40f03d64cc38&type=album"></img>
                    </div>
                    <div>
                        <h2>Виталий<br></br>Перфилов</h2>
                        <h3>Касимов, 18 лет</h3>
                    </div>
                    <div>
                        <div className={classes.points}>
                            <div>
                                <h1>4</h1>
                            </div>
                            <div>
                                <p>Работа с C# </p>
                            </div>
                        </div>
                        <div className={classes.points}>
                            <div>
                                <h1>2</h1>
                            </div>
                            <div>
                                <p>Дизайн Figma</p>
                            </div>
                        </div>
                        <div className={classes.points}>
                            <div>
                                <h1>1</h1>
                            </div>
                            <div>
                                <p>WPF Интерфейсы</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.globalInfo}>
                <div><h1>WPF UI/UX DESIGNER</h1></div>
                <div className={classes.subBlocks}>
                    <div className={classes.title}>Способности</div>
                    <div className={classes.skills}>
                        <div className={classes.skill}>
                            <div className={classes.skillTitle}>
                                <div>C# form</div>
                                <div>9/10</div>
                            </div>
                            <progress value="9" max="10"></progress>
                        </div>
                        <div className={classes.skill}>
                            <div className={classes.skillTitle}>
                                <div>C# WPF</div>
                                <div>8/10</div>
                            </div>
                            <progress value="8" max="10"></progress>
                        </div>
                        <div className={classes.skill}>
                            <div className={classes.skillTitle}>
                                <div>C# UWP</div>
                                <div>6/10</div>
                            </div>
                            <progress value="6" max="10"></progress>
                        </div>
                        <div className={classes.skill}>
                            <div className={classes.skillTitle}>
                                <div>C# Console</div>
                                <div>9/10</div>
                            </div>
                            <progress value="9" max="10"></progress>
                        </div>
                        <div>Меня завут Перфилов Виталий, я C# разработчик. Я создаю адаптивные windows приложения на фреймворке wpf, а также Windows Form. Все мои работы вы можете посмотреть на профиле GitHub. Если вас заинтересовали мои работы, то с радостью приму заказ на создания программного обеспечения любой сложности</div>
                        <Link className={classes.link}>Контакты</Link>
                    </div>
                    <div className={classes.title}>Инструменты</div>
                    <div className={classes.tools}>
                        <h3>VisualStudio</h3>
                        <h3>VisualStudioCode</h3>
                        <h3>Figma</h3>
                        <h3>Lunacy</h3>
                        <h3>Microsoft Visio</h3>
                        <h3>AllFusion</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage