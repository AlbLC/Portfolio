import React, { Component } from 'react'
export default class resume extends Component {
  render() {
    return (
        <>
  {/* resume
    ================================================== */}
  <section id="resume" className="s-resume target-section">
    <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">Formación</h3>
      </div>
      <div className="column large-9 tab-12">
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Full Stack Web Developer</h4>
            <p className="resume-block__header-meta">
              <span>The Bridge Digital Talent Accelerator</span>
              <span className="resume-block__header-date">
                Agosto 2022  
              </span>
            </p>
          </div>
          <p>
          El BootCamp de Full Stack Web Developer en The Bridge, es un curso intensivo de 4 meses donde he trabajado en diferentes proyectos, tanto a nivel individual como en equipo. 
          En estos 4 meses he aprendido a usar distintas tecnologías y herramientas para el desarrollo web. La experiencia hacia el estudiante en un BootCamp se enfoca, no solo en adquirir los conocimientos necesarios, 
          sino en estar preparado para trabajar en el sector.
          </p>
        </div>{" "}
        {/* end resume-block */}
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Microelectrónica nivel L2 avanzado</h4>
            <p className="resume-block__header-meta">
              <span>Avacom</span>
              <span className="resume-block__header-date">
                Abril 2018
              </span>
            </p>
          </div>
          <p>
          Máster avanzado en la microelectrónica de dispositivos móviles. 
            Donde desarrolle y aplique la reparación de componentes y circuitos de dimensiones microscópicas.
          </p>
        </div>{" "}
        {/* end resume-block */}
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Técnico en Explotación de
Sistemas Informáticos
</h4>
            <p className="resume-block__header-meta">
              <span>IES Padre Suarez</span>
              <span className="resume-block__header-date">
                Junio 2008
              </span>
            </p>
          </div>
          <p>
          El técnico de sistemas es el responsable de instalar y configurar equipos 
          (hardware y software), ya sean informáticos o de telecomunicaciones,
           e integrarlos en un sistema de redes. 
          Se encarga de la instalación del sistema completo, 
          con todos sus componentes (ordenadores, periféricos, servidores, etc.).
            
          </p>
        </div>{" "}
      </div>
    </div>{" "}
    
    
    {/* s-resume__section */}
    <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">Experiencia</h3>
      </div>
      <div className="column large-9 tab-12">
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Dr.Chip</h4>
            <p className="resume-block__header-meta">
              <span>Tecnico informatico</span>
              <span className="resume-block__header-date">Marzo 2014 - Marzo 2020</span>
            </p>
          </div>
          <p>
          Trabaje tanto a nivel de software como a nivel de hardware. Diagnosticando problemas
           , reparando ordenadores, móviles, tablet, etc… , haciendo mantenimientos y actualizando
            todo tipo de equipos informáticos.
          </p>
        </div>{" "}
        {/* end resume-block */}
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Axesor</h4>
            <p className="resume-block__header-meta">
              <span>Gestor de datos</span>
              <span className="resume-block__header-date">Febrero 2013 - Febrero 2014</span>
            </p>
          </div>
          <p>
          Como gestor de datos, use y desarrolle bases de datos. Dando acceso a otros usuarios 
          y gestionando los datos que había.
          </p>
        </div>{" "}
        {/* end resume-block */}
      </div>
    </div>{" "}
    {/* s-resume__section */}
    <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">Skills</h3>
      </div>
      <div className="column large-9 tab-12">
        <div className="resume-block">
          <p>
            
          </p>
          <ul className="skill-bars-fat">
            <li>
              <div className="progress percent70" />
              <strong>Javascript</strong>
            </li>
            <li>
              <div className="progress percent70" />
              <strong>SQL</strong>
            </li>
            <li>
              <div className="progress percent60" />
              <strong>Express</strong>
            </li>
            <li>
              <div className="progress percent70" />
              <strong>Node.js</strong>
            </li>
            <li>
              <div className="progress percent75" />
              <strong>Docker</strong>
            </li>
            <li>
              <div className="progress percent80" />
              <strong>CSS</strong>
            </li>
            <li>
              <div className="progress percent80" />
              <strong>React</strong>
            </li>
          </ul>
        </div>{" "}
        {/* end resume-block */}
      </div>
    </div>{" "}
    {/* s-resume__section */}
  </section>{" "}
  {/* end s-resume */}
</>

    )
  }
}