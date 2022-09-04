import { Col, Container, Row } from "react-bootstrap";
import classes from "../style/scss/collection.module.scss";

const Collection = () => {
    return(
        <section id={classes.collection}>
            <Container>
                <div className={classes.header}>
                    <h5>NEW COLLECTION</h5>
                    <h2>Best Picks 2021</h2>
                    <p>A conscious collection made entirely from food crop waste, recycled cotton, other more sustainable materials.</p>
                </div>

                <Row>
                    <Col lg={4} md={6} className="mb-4">
                        <div className={classes.content}>
                            <div className={`${classes.inner_content} ${classes.small}`} style={{backgroundImage: `url(assets/img/home1-banner-grid-2.jpg)`}}>
                                <div>
                                    <h4>Bags Collection</h4>
                                    <button type="button">
                                        <span>Shop Now</span>
                                        <i className="fa-solid fa-arrow-right-long"></i>
                                    </button>
                                </div>
                            </div>
                            <a href="-" className={classes.link}></a>
                        </div>
                    </Col>

                    <Col lg={8} md={6} className="mb-4">
                        <div className={classes.content}>
                            <div className={`${classes.inner_content}`} style={{backgroundImage: `url(assets/img/home1-banner-grid-1.jpg)`}}>
                                <div>
                                    <h4>Bags Collection</h4>
                                    <button type="button">
                                        <span>Shop Now</span>
                                        <i className="fa-solid fa-arrow-right-long"></i>
                                    </button>
                                </div>
                            </div>
                            <a href="-" className={classes.link}></a>
                        </div>
                    </Col>

                    <Col lg={8} md={6} className="mb-lg-0 mb-md-0 mb-4" >
                        <div className={classes.content}>
                            <div className={`${classes.inner_content}`} style={{backgroundImage: `url(assets/img/home1-banner-grid-3.jpg)`}}>
                                <div>
                                    <h4>Bags Collection</h4>
                                    <button type="button">
                                        <span>Shop Now</span>
                                        <i className="fa-solid fa-arrow-right-long"></i>
                                    </button>
                                </div>
                            </div>
                            <a href="-" className={classes.link}></a>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className={classes.content}>
                            <div className={`${classes.inner_content} ${classes.small}`} style={{backgroundImage: `url(assets/img/home1-banner-grid-6.jpg)`}}>
                                <div>
                                    <h4>Bags Collection</h4>
                                    <button type="button">
                                        <span>Shop Now</span>
                                        <i className="fa-solid fa-arrow-right-long"></i>
                                    </button>
                                </div>
                            </div>
                            <a href="-" className={classes.link}></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Collection;