import { Container } from "react-bootstrap";
import classes from "../style/scss/footer_bottom.module.scss";

const FooterBottom = () => {
    return (
        <div className={classes.footer_bottom}>
            <Container className={classes.content}>
                <p>&copy; 2021 All rights reserved.</p>
                
                <div className={classes.footer_img}>
                    <img src="assets/img/icons_payment.png" alt="payment" />
                </div> 
            </Container>
        </div>
    );
}
 
export default FooterBottom;