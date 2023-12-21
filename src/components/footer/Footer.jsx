import { Container } from "react-bootstrap";
import { ReactComponent as Logotipas } from "../svg/logo.svg";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="container text-center text-lg-start bg-body-tertiary text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <Logotipas></Logotipas>
          <span className="logotype">Recipedia</span>
        </div>
      </section>

      <section className="container">
        <div className="text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">Menu</h5>
              <p>
                <a href="#" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Recipe
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Community
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  About Us
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">Categories</h5>
              <p>
                <a href="#!" className="text-reset">
                  Breakfast
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Lunch
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Dinner
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Dessert
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Drink
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">Social</h5>
              <p>
                <a href="#!" className="text-reset">
                  Instagram
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Twitter
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  YouTube
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Facebook
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Sign up for our newsletter
              </h6>
              <div></div>
              <input
                className="m-1 "
                type="email"
                placeholder="Your Email Address"
              ></input>
              <button type="submit" className="submit-button mt-3">
                <p className="mt-3">Submit</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 copy">
        © 2023 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://www.youtube.com/watch?v=CVsbTCdTyAM"
        >
          PRESS ME IF YOU DARE
        </a>
      </div>
    </footer>
  );
};
export default Footer;
