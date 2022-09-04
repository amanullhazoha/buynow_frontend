import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from "../style/scss/banner.module.scss";

const Banner = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 10000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 700 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      }

    return(
        <section id={classes.banner}>
            <div className={classes.banner_bg} style={{ backgroundImage: "url(assets/img/banner_bg.jpg)"}}>
                <p className="text-center">GET 20% SALE WITH COUPONE CODE ZOHA25</p>
            </div>

            <Carousel responsive={responsive} className={classes.banner_carousel}>
                <a href='-'>
                    <figure>
                        <img src="assets/img/home1-banner-carousels-1.webp" alt="img" className="img-fluid" />

                        <figcaption>
                            <h3>Womens</h3>
                            
                            <button type='button'>
                                <span>Shop Womens</span> 
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </button>
                        </figcaption>
                    </figure>
                </a>

                <a href='-'>
                    <figure>
                        <img src="assets/img/home1-banner-carousels-2.webp" alt="img" className="img-fluid" />

                        <figcaption>
                            <h3>Mens</h3>
                            
                            <button type='button'>
                                <span>Shop Mens</span> 
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </button>
                        </figcaption>
                    </figure>
                </a>

                <a href='-'>
                    <figure>
                        <img src="assets/img/home1-banner-carousels-3.webp" alt="img" className="img-fluid" />

                        <figcaption>
                            <h3>Kids</h3>
                            
                            <button type='button'>
                                <span>Shop Kids</span> 
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </button>
                        </figcaption>
                    </figure>
                </a>
            </Carousel>     
        </section>
    );
};

export default Banner;