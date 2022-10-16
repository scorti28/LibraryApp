import React from 'react';
import "./About.css";
import aboutImg from "../../images/about.jpg";

export const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>Despre noi</h2>
        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Despre BookLand</h2>
            <p className='fs-17'>De adaugat ceva aici</p>
            <p className='fs-17'>De adaugat ceva aiciiii</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
