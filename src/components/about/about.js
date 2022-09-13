import React, { Component } from 'react'
export default class about extends Component {
  render() {
    return (
      <>
        {/* about
    ================================================== */}
        <section id="about" className="s-about target-section">
          <div className="row">
            <div className="column large-3 tab-12">
              <img className="s-about__pic" src="images/avatars/albertdj.jpg" alt="" />
            </div>
            <div className="column large-9 tab-12 s-about__content">
              <h3>About Me</h3>
              <p>
              Soy un apasionado de la creación y la tecnología. Una persona curiosa y siempre abierto a nuevos retos. Y ahora, tras reinventarme, he encontrado en la programación lo que buscaba.
                <br></br>
                He finalizado el BootCamp de Full Stack Web Developer en The Bridge, un curso intensivo de 4 meses donde he trabajado en diferentes proyectos, tanto a nivel individual como en equipo. En estos 4 meses he aprendido a usar distintas tecnologías y herramientas para el desarrollo web. La experiencia hacia el estudiante en un BootCamp se enfoca, no solo en adquirir los conocimientos necesarios, sino en estar preparado para trabajar en el sector.
              </p>
              <hr />
              <div className="row s-about__content-bottom">
                <div className="column w-1000-stack">
                  <h3>Contacto</h3>
                  <p>
                    Alberto Lara <br />
                    
                    <a href="tel:+34600504481">+34600504481</a> <br />
                    <a href="mailto:#0">albertolaracaro@gmail.com</a>
                  </p>
                </div>
                <div className="column w-1000-stack">
                  <a href="https://drive.google.com/file/d/1u24ht-0NwAVaGyr7wEGKXp7uHcybUX3S/view?usp=sharing" className="btn btn--download">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      style={{
                        fill: "rgba(0, 0, 0, 1)",
                        transform: "",
                        msFilter: ""
                      }}
                    >
                      <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
                      <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
                    </svg>
                    Descargar CV
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end row */}
        </section>{" "}
        {/* end s-about */}
      </>

    )
  }
}