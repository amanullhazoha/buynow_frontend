import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from "../style/scss/client_review.module.scss";

const ClientReview = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 767 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1
        }
    };

    return(
        <section id={classes.client_review}>
            <Container>
                <div className={classes.header}>
                    <h5>WHAT BUYERS SAY</h5>
                    <h2>Latest Buyers Reviews</h2>
                </div>

                <Row>
                    <Col>
                        <Carousel responsive={responsive} showDots={true} arrows={false}>
                            <div className={classes.content}>
                                <div className={classes.review}>
                                    <img src="assets/img/home1-testi-3.webp" alt="img" className="img-fluid" />

                                    <div className={classes.review_info}>
                                        <p className={classes.product_catagory}>Shoes</p>
                                        <p className={classes.product_name}>Low Top Sheakers</p>
                                        <span className={classes.review_star}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                    </div>
                                </div>

                                <p className={classes.review_message}>
                                    God every fill great replenish darkness unto.
                                    Very open. Likeness their that light. Given
                                    under image to. Subdue of shall cattle day
                                    fish form saw spirit and given stars, us you
                                    whales may, land, saw fill unto.
                                </p>
                                <div className={classes.review_publish}>
                                    <span className="testi-customer">Jane Jefferson, </span> 
                                    <span className="testi-date">29 May 2019</span>
                                </div>
                            </div>

                            <div className={classes.content}>
                                <div className={classes.review}>
                                    <img src="assets/img/home1-testi-3.webp" alt="img" className="img-fluid" />

                                    <div className={classes.review_info}>
                                        <p className={classes.product_catagory}>Shoes</p>
                                        <p className={classes.product_name}>Low Top Sheakers</p>
                                        <span className={classes.review_star}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                    </div>
                                </div>

                                <p className={classes.review_message}>
                                    God every fill great replenish darkness unto.
                                    Very open. Likeness their that light. Given
                                    under image to. Subdue of shall cattle day
                                    fish form saw spirit and given stars, us you
                                    whales may, land, saw fill unto.
                                </p>
                                <div className={classes.review_publish}>
                                    <span className="testi-customer">Jane Jefferson, </span> 
                                    <span className="testi-date">29 May 2019</span>
                                </div>
                            </div>  

                            <div className={classes.content}>
                                <div className={classes.review}>
                                    <img src="assets/img/home1-testi-3.webp" alt="img" className="img-fluid" />

                                    <div className={classes.review_info}>
                                        <p className={classes.product_catagory}>Shoes</p>
                                        <p className={classes.product_name}>Low Top Sheakers</p>
                                        <span className={classes.review_star}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                    </div>
                                </div>

                                <p className={classes.review_message}>
                                    God every fill great replenish darkness unto.
                                    Very open. Likeness their that light. Given
                                    under image to. Subdue of shall cattle day
                                    fish form saw spirit and given stars, us you
                                    whales may, land, saw fill unto.
                                </p>
                                <div className={classes.review_publish}>
                                    <span className="testi-customer">Jane Jefferson, </span> 
                                    <span className="testi-date">29 May 2019</span>
                                </div>
                            </div>  

                            <div className={classes.content}>
                                <div className={classes.review}>
                                    <img src="assets/img/home1-testi-3.webp" alt="img" className="img-fluid" />

                                    <div className={classes.review_info}>
                                        <p className={classes.product_catagory}>Shoes</p>
                                        <p className={classes.product_name}>Low Top Sheakers</p>
                                        <span className={classes.review_star}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                    </div>
                                </div>

                                <p className={classes.review_message}>
                                    God every fill great replenish darkness unto.
                                    Very open. Likeness their that light. Given
                                    under image to. Subdue of shall cattle day
                                    fish form saw spirit and given stars, us you
                                    whales may, land, saw fill unto.
                                </p>
                                <div className={classes.review_publish}>
                                    <span className="testi-customer">Jane Jefferson, </span> 
                                    <span className="testi-date">29 May 2019</span>
                                </div>
                            </div>  
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ClientReview;