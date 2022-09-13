import React, { Component } from 'react'
export default class footer extends Component {
  render() {
    return (
      <>
  {/* footer
    ================================================== */}
  <footer className="s-footer">
    <div className="row">
      <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
        <ul className="s-footer__social">
          
          <li>
            <a href="https://github.com/AlbLC">
              <i className="fab fa-github" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="mailto:albertolaracaro@gmail.com">
              <i className="fab fa-google" aria-hidden="true" />
            </a>
          </li>
          
           <li>
            <a href="https://www.linkedin.com/in/alblara/">
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </a>
          </li>
          <li>
          <a href="https://api.whatsapp.com/send?phone=34600504481">
              <i className="fab fa-whatsapp" aria-hidden="true" />
            </a>
          </li>
          <li>
          <a href="tel:+34600504481">
              <i className="fas fa-phone-alt" aria-hidden="true" />
            </a>
            </li>
        </ul>
      </div>
      <div className="column large-7 medium-6 w-1000-stack ss-copyright">
        <span>© Copyright 2022</span>
        <span>
          Design by <a href="">Alberto Lara</a>
        </span>
      </div>
      <div className="ss-go-top">
      <a className="smoothscroll" title="Back to Top" href="#top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z" />
        </svg>
      </a>
    </div>
    </div>
    {" "}
    {/* end ss-go-top */}
   


  
  
  {/* <div className="s-hero__scroll">
      <a href="#top" className="s-hero__scroll-link smoothscroll">
        <span className="scroll-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}
          >
            <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"/>
          </svg>
        </span>
        <span className="scroll-text">Scroll UP</span>
      </a>
    </div>{" "} */}
</footer>
</>

    )
  }
}