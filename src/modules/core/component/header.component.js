import classes from "../style/scss/header.module.scss";
import HeaderTop from "./header_top.component";
import Navbar from "./navbar.component";

const Header = () => {
    return(
        <header id={classes.header}>
            <HeaderTop />
            <Navbar />
        </header>
    )
}

export default Header;