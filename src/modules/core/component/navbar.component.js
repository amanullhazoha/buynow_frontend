import { useRef, useState } from "react";
import { Container } from "react-bootstrap"
import classes from "../style/scss/navbar.module.scss";

const Navbar = () => {
    const [ toggler, setToggler ] = useState(false);

    const navbarRef = useRef();

    const handleToggler = () => {
        setToggler(prev => !prev);
        
        if (toggler) {
            document.querySelector("body").style.overflow = "visible";
        } else {
            document.querySelector("body").style.overflow = "hidden";
        }
    }

    const navbarSticky = () => {
        const sticky = navbarRef.current.offsetTop;
        console.log(sticky)
        
        if (window.pageYOffset >= (sticky + 30)) {
            navbarRef.current.classList.add("sticky");
        } else {
            navbarRef.current.classList.remove("sticky");
        }
    }

    window.onscroll = () => navbarSticky();

    return(
        <div className={classes.navbar} ref={navbarRef}>
            <Container className={classes.content}>
                <button type="button" className={classes.mobile_menu_btn} onClick={handleToggler} style={{ color: `${toggler ? "#ff6f61" : "#111111"}`}}>
                    <i className="fa-solid fa-bars"></i>
                </button>

                <ul className={`order-md-2 ${classes.nav} ${toggler && "active"}`}>
                    <li><a href="-">Home</a></li>
                    <li><a href="-">Shop</a></li>
                    <li><a href="-">Pages</a></li>
                    <li><a href="-">Blog</a></li>
                    <li><a href="-">Features</a></li>
                </ul>

                <a href="-" id={classes.logo} className="order-md-1">
                    <span>Buy<span className={classes.logo_color}>Now</span></span>
                </a>

                <ul className={`order-3 ${classes.navbar_icon}`}>
                    <li><i className="fa-solid fa-magnifying-glass"></i></li>
                    <li><i className="fa-solid fa-user"></i></li>
                    <li><i className="fa-solid fa-heart"></i></li>
                    <li><i className="fa-solid fa-bag-shopping"></i></li>
                </ul>
            </Container>
        </div>
    )
}

export default Navbar;