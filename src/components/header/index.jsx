import React from "react";
import { title } from "../utils/data";
import style from './header.module.css';

console.log(style);
const Header = ()=>{
    return (
        <header className={style.header}>
            <span className={style.title}>{title}</span>
        </header>
    )
}

export default Header;