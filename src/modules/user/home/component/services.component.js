import { Container, Row, Col } from "react-bootstrap"
import classes from "../style/scss/services.module.scss";

const Services = () => {
    return(
        <section id={classes.free_services}>
            <Container>
                <Row>
                    <Col className={classes.content}>
                        <div className={classes.service}>
                            <i className="fa-solid fa-truck-moving"></i>

                            <div className={classes.service_content}>
                                <h4>FREE SHIPPING</h4>
                                <p>From all orders over $100</p>
                            </div>
                        </div>

                        <div className={classes.service}>
                            <i className="fa-brands fa-bitcoin"></i>

                            <div className={classes.service_content}>
                                <h4>FREE RETURNS</h4>
                                <p>Return money within 30 days</p>
                            </div>
                        </div>

                        <div className={classes.service}>
                            <i className="fa-solid fa-vault"></i>

                            <div className={classes.service_content}>
                                <h4>SECURE SHOPPING</h4>
                                <p>You're in safe hands</p>
                            </div>
                        </div>

                        <div className={classes.service}>
                            <i className="fa-solid fa-box"></i>

                            <div className={classes.service_content}>
                                <h4>OVER 10,000 STYLES</h4>
                                <p>We have everything you need</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;