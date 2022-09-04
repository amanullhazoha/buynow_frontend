import classes from "../style/scss/footer.module.scss";
import FooterBottom from "./footer_bottom.component";
import FooterMenu from "./footer_menu.component";
import FooterSubscribe from "./footer_subscribe.component";

const Footer = () => {
    return(
        <footer id={classes.footer} style={{ backgroundImage: "url(./assets/img/footer_bg.webp)" }}>
            <FooterSubscribe />
            <FooterMenu />
            <FooterBottom />
        </footer>
    );
};

export default Footer;