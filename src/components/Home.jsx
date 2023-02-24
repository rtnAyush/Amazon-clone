import "./Home.css"
import Product from "./Product"
import { products, bgImage } from "../productData/productData";

function Home() {
    return (
        <div className="container-fluid p-0 mt-5" >
            <div id="bg-carousel" className="carousel slide">
                <div className="carousel-inner home-img">
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
                <button className="carousel-control-prev carousel-btn" type="button" data-bs-target="#bg-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next carousel-btn" type="button" data-bs-target="#bg-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container" style={{ marginTop: "-350px" }}>
                <div className="d-flex justify-content-between flex-grow-1">
                    <Product key={Math.random()} data={products[0]} />
                    <Product key={Math.random() * 2} data={products[1]} />
                </div>
                <div className="row">
                    <Product key={Math.random() * 3} data={products[2]} />
                    <Product key={Math.random() * 4} data={products[3]} />
                    <Product key={Math.random() * 5} data={products[4]} />
                </div>
            </div>

        </div>
    );
}

export default Home;