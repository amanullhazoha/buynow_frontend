import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import classes from "../style/scss/footer_menu.module.scss";

const FooterMenu = () => {
    const menuRef1 = useRef();
    const menuRef2 = useRef();
    const menuRef3 = useRef();
    const menuRef4 = useRef();

    const handleToggler = (ref) => {
        const classList = ref.current.classList;
        const classArray = [];

        classList.forEach(e => classArray.push(e));
        
        if (!classArray.includes("active_footer_menu")) {
            ref.current.classList.add("active_footer_menu");
        } else {
            ref.current.classList.remove("active_footer_menu");
        };
    };

    return(
        <div className={classes.footer_menu}>
            <Container>
                <Row>
                    <Col md={3}>
                        <a href="-" id={classes.logo} className="order-md-1">
                            <span>Buy<span className={classes.logo_color}>Now</span></span>
                        </a>

                        <ul className={classes.footer_menu_socail_icon}>
                            <li><a href="-"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="-"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="-"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="-"><i className="fa-brands fa-pinterest-p"></i></a></li>
                        </ul>
                    </Col>

                    <Col md={9} className={classes.content}>
                        <div className={classes.menu}>
                            <div className={classes.header} onClick={() => handleToggler(menuRef1)}>
                                <h4>SUPPORT</h4>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>

                            <ul className={classes.menu_list} ref={menuRef1}>
                                <li><a href="-">Contact Us</a></li>
                                <li><a href="-">FAQs</a></li>
                                <li><a href="-">Size Guide</a></li>
                                <li><a href="-">Shipping & Return</a></li>
                            </ul>
                        </div>

                        <div className={classes.menu}>
                            <div className={classes.header} onClick={() => handleToggler(menuRef2)}>
                                <h4>SHOP</h4>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>

                            <ul className={classes.menu_list} ref={menuRef2}>
                                <li><a href="-">Men’s Shopping</a></li>
                                <li><a href="-">Women’s Shopping</a></li>
                                <li><a href="-">Kids’ Shopping</a></li>
                                <li><a href="-">Discounts</a></li>
                            </ul>
                        </div>

                        <div className={classes.menu}>
                            <div className={classes.header} onClick={() => handleToggler(menuRef3)}>
                                <h4>COMPANY</h4>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>

                            <ul className={classes.menu_list} ref={menuRef3}>
                                <li><a href="-">Our Story</a></li>
                                <li><a href="-">Careers</a></li>
                                <li><a href="-">Terms & Conditions</a></li>
                                <li><a href="-">Privacy & Cookie policy</a></li>
                            </ul>
                        </div>

                        <div className={classes.menu}>
                            <div className={classes.header} onClick={() => handleToggler(menuRef4)}>
                                <h4>CONTACT</h4>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>

                            <ul className={classes.menu_list} ref={menuRef4}>
                                <li>1-888-923-8044</li>
                                <li>1-888-923-8055</li>
                                <li>help@allbirds.com</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterMenu;