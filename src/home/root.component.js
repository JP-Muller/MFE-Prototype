import React from "react";
import "./home.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import cogwhitelogo from "../assets/cognisight-white.png";
import collabimg from "../assets/collaborative.png";
import qualityimg from "../assets/quality.png";
import transparentimg from "../assets/transparent.png";
import expertsimg from "../assets/experts.png";

const Landing = () => (
  <Router basename="/home">
    {/* <Route
      render={() => ( */}
        <div id="landing-master">
          <section id="parallax-1">
            <img src={cogwhitelogo} alt="White Mock Logo" />
            <h2>
              A <strong>RISK ADJUSTMENT PARTNER</strong> YOU CAN{" "}
              <strong>TRUST</strong>
            </h2>
            <div id="parallax-1-buttons"></div>
          </section>
          <section className="text-divider">
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              molestie et libero eu maximus. Aenean auctor sit amet massa nec
              vestibulum. Nam ac sodales magna. Praesent ullamcorper enim in
              tempor blandit. Vivamus aliquet, magna a varius ultricies, ex enim
              pulvinar eros, vel molestie odio purus id justo. Phasellus a
              mattis mauris. In posuere fermentum mauris nec volutpat. Phasellus
              gravida metus nec rhoncus eleifend. Vestibulum eget convallis
              purus. Quisque feugiat mauris eget nulla tristique fringilla.
            </p>
            <section id="descriptive-image-master">
              <div className="image-description-container">
                <img src={collabimg} alt="Collaborative" />
                <p>COLLABORATIVE</p>
              </div>
              <div className="image-description-container">
                <img src={qualityimg} alt="Quality Driven" />
                <p>QUALITY-DRIVEN</p>
              </div>
              <div className="image-description-container">
                <img src={transparentimg} alt="Transparency" />
                <p>TRANSPARENT</p>
              </div>
              <div className="image-description-container">
                <img src={expertsimg} alt="Industry Experts" />
                <p>INDUSTRY-EXPERTS</p>
              </div>
            </section>
            <button id="learn-more-button">
              LEARN MORE ABOUT COGNISIGHT{" "}
              <i className="fas fa-arrow-circle-right" />
            </button>
          </section>
          <section id="parallax-2"></section>
          <section className="text-divider">
            <p>
              Vivamus vulputate dolor ac dolor lacinia, vitae vehicula nunc
              eleifend. Vivamus in lacus mattis, vulputate turpis sit amet,
              rhoncus leo. Sed sit amet lectus eget magna fermentum hendrerit
              vulputate nec enim. Suspendisse fermentum arcu eu dui viverra
              gravida. Duis in euismod lorem, ac consectetur dolor. Nulla
              gravida orci non nibh ornare, ut porta purus dictum. Suspendisse
              sit amet ipsum at enim molestie iaculis at eu augue. In in
              interdum nulla, in porta sapien. Aenean consequat, arcu ac
              imperdiet sollicitudin, justo magna blandit lorem, at mattis dui
              urna eleifend dolor. Mauris accumsan placerat elit ut tristique.
            </p>
          </section>
          <section id="parallax-3"></section>
          <section className="text-divider">
            <p>
              Curabitur vehicula suscipit orci, at hendrerit nisl aliquet non.
              In hac habitasse platea dictumst. Phasellus efficitur erat luctus
              libero pulvinar varius. Mauris eget dictum velit. Aliquam laoreet
              nulla mauris, et malesuada tortor tristique sed. Nulla suscipit
              lacus ac mauris mollis, elementum ornare nulla tincidunt.
            </p>
          </section>
        </div>
      {/* )}
    /> */}
  </Router>
);

export default Landing;


