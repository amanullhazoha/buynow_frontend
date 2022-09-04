import { useState } from "react";
import { Container } from "react-bootstrap";
import classes from "../style/scss/footer_subscribe.module.scss";

const FooterSubscribe = () => {
    const [subscribe, setSubscribe] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(subscribe)
        setSubscribe("")
    }

    return(
        <Container className={classes.footer_subscribe}>
            <h3 className="text-center">Want style Ideas and Treats?</h3>

            <form id="footer_subscribe" className="text-center" onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter Email*" name="subscribe" value={subscribe} onChange={(e => setSubscribe(e.target.value))} />
                <button type="submit">Subscribe</button>
            </form>
        </Container>
    );
};

export default FooterSubscribe;