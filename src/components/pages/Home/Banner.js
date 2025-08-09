import { Link } from "react-router-dom";
import restaurantFoodImage from "./assets/restaurant-food.jpg";
import "./Banner.css";
import pages from "../../../utils/pages";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container grid">
        <div className="banner-info">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="button-primary" to={pages.get("bookings").path}>
            Reserve a table
          </Link>
        </div>
        <img
          className="banner-image"
          src={restaurantFoodImage}
          alt="Restaurant Food"
        />
      </div>
    </section>
  );
};

export default Banner;
