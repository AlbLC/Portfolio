import React, { Component } from 'react'
export default class homes extends Component {
  render() {
    return (
        <>
  {/* hero
    ================================================== */}
  <section id="hero" className="s-hero target-section">
    <div className="s-hero__bg rellax" data-rellax-speed={-7} />
    <div className="row s-hero__content">
      <div className="column">
        <div className="s-hero__content-about">
          <h1>Alberto Lara.</h1>
          <h3>
            Soy un <span>Full Stack Web Developer</span>, con conocimientos en las {" "}
            <span>Tecnologías</span> mas demandas para el desarrollo de aplicaciones<span> Web. </span> 
            Sígueme y podrás{" "}
            <a className="smoothscroll" href="#about">
            descubrir{" "}
            </a>
            mucho más {" "}
            <a className="smoothscroll" href="#about">
            sobre mi
            </a>
            .
          </h3>
          <div className="s-hero__content-social">
          <a href="https://github.com/AlbLC">
              <i className="fab fa-github" aria-hidden="true" />
            </a>
          
          
            <a href="mailto:albertolaracaro@gmail.com">
              <i className="fab fa-google" aria-hidden="true" />
            </a>
          
          
           
            <a href="https://www.linkedin.com/in/alblara/">
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </a>
          
          
          <a href="https://api.whatsapp.com/send?phone=34600504481">
              <i className="fab fa-whatsapp" aria-hidden="true" />
            </a>
            
            <a href="tel:+34600504481">
              <i className="fas fa-phone-alt" aria-hidden="true" />
            </a>
        
          </div>
        </div>{" "}
        {/* end s-hero__content-about */}
      </div>
    </div>{" "}
    {/* s-hero__content */}
    <div className="s-hero__scroll">
      <a href="#about" className="s-hero__scroll-link smoothscroll">
        <span className="scroll-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}
          >
            <path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" />
          </svg>
        </span>
        <span className="scroll-text">Scroll Down</span>
      </a>
    </div>{" "}
    {/* s-hero__scroll */}
  </section>{" "}
  {/* end s-hero */}
</>

    )
  }
}