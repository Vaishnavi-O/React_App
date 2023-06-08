import React from "react";
import CName from "../utils/data";
import style from './footer.module.css';

const Footer = ()=>{
    return (
        <footer className={style.footer}>
            Footer for {CName}. Made with React
        </footer>
    )
}

export default Footer;