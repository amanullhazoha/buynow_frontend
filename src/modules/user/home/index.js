import Banner from "./component/banner.component";
import BestSelling from "./component/bestSelling.component";
import ClientReview from "./component/clientReview.component";
import Collection from "./component/collection.component";
import Company from "./component/company.component";
import GetOffer from "./component/getOffer.component";
import Services from "./component/services.component";

const Home = () => {
    return(
        <>
            <Banner />
            <Services />
            <Collection />
            <BestSelling />
            <GetOffer />
            <ClientReview />
            <Company />
        </>
    );
};

export default Home;