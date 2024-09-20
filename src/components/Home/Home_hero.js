import React from 'react'
import "./Home_hero.scss"
import { navigate } from "gatsby"
import ImageOne from "../../assests/images/homepage/heroImageOne.svg"

function HomeHero() {
  const handleClickService = () => {
    navigate('/our-services'); // Navigate to About page
  };
  const handleClickQuote = () => {
    navigate('/contact'); // Navigate to About page
  };
  return (
    <section className="banner-section">
      <div className="content-hide">
        <h1>Transforming Ideas into Exceptional Digital Experiences</h1>
        <p>Enabling to take flight through Precision Digital Engineering and end-to-end VC support.</p>
        <button className="connect-button-btn1" onClick={handleClickService}>Our Services</button>
        <button className="connect-button-btn2" onClick={handleClickQuote}>Get a Quote</button>
      </div>
      <div className="image-container">
        <img
          src={ImageOne}
          alt="Team collaboration"
        />
      </div>
    </section>
  )
}

export default HomeHero