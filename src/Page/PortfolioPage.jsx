import React from "react";
import classes from "./PortfolioPage.module.css"
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
                    <div>

                    </div>
                    <div className={classes.title}>Инструменты</div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage