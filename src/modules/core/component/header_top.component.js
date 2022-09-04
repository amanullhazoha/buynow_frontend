import { useState } from "react";
import { Container } from "react-bootstrap"
import classes from "../style/scss/headertop.module.scss";

const HeaderTop = () => {
    const [ currancy, setCurrancy ] = useState("USD");
    const [ language, setLanguage ] = useState("English");

    return(
        <div className={classes.header_top}>
            <Container className={classes.content}>
                <div className={classes.header_top_left}>
                    <ul className={classes.shipping}>
                        <li><i className="fa-solid fa-truck-moving"></i></li>
                        <li>FREE SHIPPING OVER $100</li>
                    </ul>

                    <ul className={classes.dropdown}>
                        <li>{currancy} <i className="fa-solid fa-caret-down"></i>
                            <ul className={classes.nested}>
                                <li onClick={() =>setCurrancy("USD")}>USD</li>
                                <li onClick={() =>setCurrancy("EUR")}>EUR</li>
                            </ul>
                        </li>

                        <li>{language} <i className="fa-solid fa-caret-down"></i>
                            <ul className={classes.nested}>
                                <li onClick={() => setLanguage("English")}>English</li>
                                <li onClick={() => setLanguage("Franch")}>Franch</li>
                                <li onClick={() => setLanguage("Germany")}>Germany</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className={classes.header_top_right}>
                    <ul className={classes.header_top_menu}>
                        <li><a href="-" >Shipping</a></li>
                        <li><a href="-" >FAQ</a></li>
                        <li><a href="-" >Contact</a></li>
                    </ul>

                    <ul className={classes.socail_menu}>
                        <li><a href="-"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="-"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="-"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="-"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                </div>   
            </Container>
        </div>
    );
};

export default HeaderTop;