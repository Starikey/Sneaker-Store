import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import ProductsContext from "../contexts/ProductsContext";

const FeaturedItems = () => {
  const { products } = useContext(ProductsContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  let deviceType = "desktop";

  return (
    <section className="featuredItems container">
      <h2>Featured items</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((prod) => {
          return (
            <div className="item" key={prod.id}>
              <Link to={`/single/${prod.id}`}>
                <img className="product_image" src={prod.img} alt="product_image" height="250px" style={{borderRadius: "5px"}} />
                <h3>{prod.name}</h3>
                <p style={{color: "#282626"}}>${prod.price}</p>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default FeaturedItems;
