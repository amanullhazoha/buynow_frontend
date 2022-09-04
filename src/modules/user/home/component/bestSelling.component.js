import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "../style/scss/best_selling.module.scss";
import { client, urlFor } from "../../../../lib/client";

const BestSelling = () => {
    const [ catagory, setCatagory ] = useState("womens");
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const query = `*[_type ==  "topMonthSellingProudcts"]`;

        client.fetch(query)
            .then(res => {
                setProducts(res);
            })
            .catch(err => {
                console.log(err);
            });

    }, []);

    return (
        <section id={classes.best_selling}>
            <Container>
                <div className={classes.header}>
                    <h2>Top Month Sellers</h2>
                    <ul className={classes.selling_catagory}>
                        <li className={`${catagory === "womens" ? "selling_catagory_active" : ""}`} onClick={() => setCatagory("womens")}>Womens</li>
                        <li className={`${catagory === "mens" ? "selling_catagory_active" : ""}`} onClick={() => setCatagory("mens")}>Mens</li>
                        <li className={`${catagory === "kids" ? "selling_catagory_active" : ""}`} onClick={() => setCatagory("kids")}>Kids</li>
                    </ul>
                </div>

                <Row>
                    {products.map(product => (
                        <Col lg={3} md={4} sm={6} className={`${classes.content} mb-4`} key={product._id}>
                            <figure>
                                <div className={classes.product_img}>
                                    <a href="-">
                                        <img 
                                            src={urlFor(product.thumbanails[0])} 
                                            alt="product" 
                                            className="img-fluid" 
                                            onMouseOver={(e) => e.target.src = urlFor(product.thumbanails[1])} 
                                            onMouseOut={e => e.target.src= urlFor(product.thumbanails[0])} 
                                        />
                                    </a>

                                    <ul>
                                        <li><i className="fa-solid fa-bag-shopping"></i></li>
                                        <li><i className="fa-solid fa-eye"></i></li>
                                        <li><i className="fa-solid fa-heart"></i></li>
                                    </ul>
                                </div>

                                <figcaption>
                                    <a href="-" className={classes.catagory}>{product.catagory}</a>
                                    <a href="-" className={classes.product_name}>{product.productName}</a>
                                    <p className={classes.price}>${product.price}</p>
                                    <button type="button">Add To Cart</button>
                                </figcaption>
                            </figure>
                        </Col>
                    ))}
                </Row>

                <div className={classes.load_more_btn}>
                    <button type="button">Discover More</button>
                </div>
            </Container>
        </section>
    );
}
 
export default BestSelling;