import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import classes from "../style/scss/get_offer.module.scss";
import { client } from "../../../../lib/client";

const GetOffer = () => {
    const [ bgImage, setBgImage ] = useState(0);
    const [ eventStart, setEventStart ] = useState(0);
    const [ time, setTime ] = useState({ days: 0, hours: 0, min: 0, sec: 0});

    const bgImageArray = ["assets/img/home1-deal-carousel-b1.jpg", "assets/img/home_2_slider_2.jpg"];

    const handleDecrement = () => {
        if(bgImage > 0) setBgImage(prev => prev -1);
    };

    const handleIncrement = () => {
        if(bgImage < bgImageArray.length -1) setBgImage(prev => prev + 1);
    };

    useEffect(() => {
        const query = `*[_type ==  "discountEvent"]`;

        client.fetch(query)
            .then(res => {
                setEventStart(res[0].startAt);
                console.log(res[0].startAt);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const startDate = new Date(eventStart).getTime();
        const today = new Date().getTime();

        let millisec = startDate - today;

        const interval = setInterval(() => {
            if(millisec > 1000) {
                millisec -= 1000;

                const days = Math.floor((millisec / (1000 * 60 * 60 * 24)));
                const hours = Math.floor((millisec % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                const min = Math.floor((millisec % (1000 * 60 * 60) / (1000 * 60)));
                const sec = Math.floor((millisec % (1000 * 60) / 1000));

                setTime({ days, hours, min, sec });
            } else {
                setTime(null);
            }

        }, 1000)

        return () => clearInterval(interval);

    }, [eventStart]);

    return(
        <Container fluid id={classes.get_offer} style={{backgroundImage: `url(${bgImageArray[bgImage]})`}}>
            <Row>
                <Col md={6} className="offset-md-6">
                    <div className={classes.content}>
                        <h2>Get -50% From <br/> Summer Collection</h2>

                        {time ? <div className="count_down">
                            <div>
                                <span>{time?.days}</span>
                                <span>Day</span>
                            </div>

                            <div>
                                <span>{time?.hours}</span>
                                <span>Hour</span>
                            </div>

                            <div>
                                <span>{time?.min}</span>
                                <span>Min</span>
                            </div>

                            <div>
                                <span>{time?.sec}</span>
                                <span>Sec</span>
                            </div>
                        
                        </div> : <div>Offer Open</div>}

                        <a href=""> 
                            Shop Now
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </Col>
            </Row>

            <button type="button" className={`${classes.button_left} ${classes.angle}`} onClick={handleDecrement}>
                <i className="fa-solid fa-angle-left"></i>
            </button>
            
            <button type="button" className={`${classes.button_right} ${classes.angle}`} onClick={handleIncrement}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </Container>
    );
};

export default GetOffer;