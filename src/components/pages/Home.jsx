import { Link } from "react-router-dom";
import leftImg from "../../assets/images/img1.jpg";
import rightImg from "../../assets/images/img6.jpg";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-banner">
        <div
          className="hero-side"
          style={{ backgroundImage: `url(${leftImg})` }}
        ></div>

        <div className="hero-center">
          <h1>REGALRENT</h1>
          <div className="divider"></div>
          <p className="tagline">RENT • WEAR • REPEAT</p>
        </div>

        <div
          className="hero-side"
          style={{ backgroundImage: `url(${rightImg})` }}
        ></div>
      </section>

      {/* OVERLAY SECTION */}
      <section className="hero-overlay">
        <div className="overlay-content">
          <h3>Outfits on Rent, Memories Permanent</h3>
          <p>
            Rent premium outfits for weddings, parties & special occasions.
            Look stunning without buying expensive clothes.
          </p>

          <div className="overlay-buttons">
            <Link to="/category/western">Western →</Link>
            <Link to="/category/ethnic">Ethnic →</Link>
            <Link to="/category/accessories" className="primary">
              Accessories →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
