import "./Home.css"
import Product from "./Product"
import { products, bgImage } from "../../productData/productData";
import { v4 as uuidv4 } from 'uuid';


function Home() {

    return (
        <div className="container" >

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner home__img">
                    <div className="carousel-item active">
                        <img src={bgImage.img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={bgImage.img2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={bgImage.img3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={bgImage.img4} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="row my-md-2 gx-3">
                <Product key={uuidv4()} data={products[0]} class="card col col-6" />
                <Product key={uuidv4()} data={products[1]} class="card col col-6" />

            </div>
            <div className="row my-md-2">
                <Product key={uuidv4()} data={products[2]} class="card col-6 col-md-4" />
                <Product key={uuidv4()} data={products[3]} class="card col-6 col-md-4" />
                <Product key={uuidv4()} data={products[4]} class="card col-md-4" />
            </div>

        </div>
    );
}

export default Home;