import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from "../style/scss/company.module.scss";

const Company = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 10,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
        },
        tablet: {
          breakpoint: { max: 1024, min: 767 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 2,
        }
    };

    return (
        <section id={classes.company}>
            <Container>
                <div className={classes.header}>
                    <h2>@Zoha</h2>
                    <p>The best thing about a monochrome colour scheme</p>
                </div>

                <Row>
                    <Col className={classes.content}>
                        <img src="assets/img/i01.webp" alt="img" className="img-fluid" />
                        <img src="assets/img/i01.webp" alt="img" className="img-fluid" />
                        <img src="assets/img/i01.webp" alt="img" className="img-fluid" />
                        <img src="assets/img/i01.webp" alt="img" className="img-fluid" />
                        <img src="assets/img/i01.webp" alt="img" className="img-fluid" />
                        <img src="assets/img/i01.webp" alt="img" className="img-fluid" />
                    </Col>
                </Row>

                <div className={classes.company_logo}>
                    <Carousel responsive={responsive} showDots={true} arrows={false}>
                        <div className={classes.item}>
                            <img src="assets/img/brand-1.png" alt="img" className="img-fluid" />
                        </div>

                        <div className={classes.item}>
                            <img src="assets/img/brand-2.webp" alt="img" className="img-fluid" />
                        </div>

                        <div className={classes.item}>
                            <img src="assets/img/brand-3.png" alt="img" className="img-fluid" />
                        </div>

                        <div className={classes.item}>                            
                            <img src="assets/img/brand-4.png" alt="img" className="img-fluid" />
                        </div>

                        <div className={classes.item}>                            
                            <img src="assets/img/brand-5.webp" alt="img" className="img-fluid" />
                        </div>

                        <div className={classes.item}>
                            <img src="assets/img/brand-6.png" alt="img" className="img-fluid" />
                        </div>

                        <div className={classes.item}>
                            <img src="assets/img/brand-7.png" alt="img" className="img-fluid" />
                        </div>
                    </Carousel>
                </div>
            </Container>
        </section>
    );
}
 
export default Company;