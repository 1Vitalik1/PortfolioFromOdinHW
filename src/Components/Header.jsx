import React from "react";
import classes from './Header.module.css'
import { Link } from "react-router-dom";

let onMenuShow = false;
const links = document.getElementsByClassName(classes.link);
const spliters = document.getElementsByClassName(classes.spliter);
const menuShow = () =>
{
    if(onMenuShow){
        onMenuShow = false;
        Array.from(links).forEach(link => link.style.display = 'none');
        Array.from(spliters).forEach(spliter => spliter.style.display = 'none'); 
    }
    else{
        onMenuShow = true;
        Array.from(links).forEach(link => link.style.display = 'block');
        Array.from(spliters).forEach(spliter => spliter.style.display = 'block');
    }
}

var mql = window.matchMedia("(orientation: portrait)");
mql.addListener(function(m) {
    if(m.matches) {
        onMenuShow = false;
        Array.from(links).forEach(link => link.style.display = 'none');
        Array.from(spliters).forEach(sp => sp.style.display = 'none');
    }
    else {
        onMenuShow = true;
        Array.from(spliters).forEach(sp => sp.style.display = 'none');
        Array.from(links).forEach(link => link.style.display = 'inline');
    }
});

const Header = () => {
    return (<div className={classes.header}>
        <div className={classes.label}>
            <Link id={classes.label} to={'/main'}>
                <div>Виталий Перфилов</div><div className={classes.fullLabel}><hr></hr>
                <div>C# Разработчик</div><hr></hr></div>
            </Link>
        </div>
        <button className={classes.openMenu} onClick={menuShow}>≡</button>
        <div className={classes.links}>
            <hr className={classes.spliter}></hr>
            <Link className={classes.link} to={'/main'}>Главная</Link>
            <Link className={classes.link} to={'/main'}>Портфолио</Link>
            <Link className={classes.link} to={'/main'}>Условия</Link>
            <Link className={classes.link} to={'/main'}>Контакты</Link>
            <Link className={classes.link} to={'/main'}>Блог</Link>
            <hr className={classes.spliter}></hr>
        </div>
        <div className={classes.contacts}>
            <div>
                {/*
                <div className={classes.icon}>🎮</div>
                <div className={classes.icon}>🌐</div>
                <div className={classes.icon}>👻</div>
                */}
            </div>
            <div>
                +7 930 ***-**-**
            </div>
        </div>
    </div>)
}

export default Header