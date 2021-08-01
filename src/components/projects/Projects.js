import React from 'react';
import './projects.scss';
import WindowOptions from '../modalwindow/WindowOptions';
import ModalOptions from '../modalwindow/ModalOptions'

const Projects = ({ images, closeWindow, closeClick }) => {
  const { ie, date_admin, store, old_portfolio, cursame } = images;

  const projectsArr = [{
    name: "Portfolio anterior",
    thumbnail: `${old_portfolio}`,
    description: "Portfolio web sobre lo que venia haciendo hasta ese momento",
    tecnologies: "HTML, CSS3, BOOTSTRAP, JAVASCRIPT, NETLIFY",
    link: "https://maximinopage.netlify.app/"

  }, {
    name: "Administrador de citas",
    thumbnail: `${date_admin}`,
    description: "Web para administrar citas de una veterinaria",
    tecnologies: "REACT JS, SCSS, NETLIFY",
    link: "https://doctorcolitas.netlify.app/"
  },
  {
    name: "Pagina de cursos",
    thumbnail: `${cursame}`,
    description: "Web basica para agregar cursos a un carrito de compras",
    tecnologies: "HTML, CSS3, JAVASCRIPT, NETLIFY",
    link: "https://cursame.netlify.app/"
  },
  {
    name: "Tienda de camaras",
    thumbnail: `${store}`,
    description: "E-commerce de camaras y accesorios para camaras.",
    tecnologies: "REACT JS(HOOKS), SCSS, FIREBASE, GITHUB PAGES",
    link: "https://e-commerce-3ac50.web.app/"
  }
  ]


  return (
    <>
      {
        !closeWindow ?

          <div
            className=
            "projects-container"
          >
            <div className="window">
              <div className="window-title">
                <div className="text-title">
                  <img src={ie} alt="ie icon" /><p>Proyectos</p>
                </div>
                <WindowOptions
                  closeClick={closeClick}
                  closeWindow={closeWindow}
                />
              </div>
              <div className="modal-options">
                <ModalOptions />
              </div>
              <div className="project-body">
                {projectsArr.map(project => {
                  return (
                    <div className="project-cont">
                      <div className="project">
                        <img className="project-img" src={project.thumbnail} alt={project.name} />

                        <h1 className="project-name">{project.name}</h1>
                        <p className="project-description">{project.description}</p>
                        <p className="project-tecn">{project.tecnologies}</p>
                        <div className="project-button">
                          <a href={project.link} target="_blank" rel="noreferrer"><button>Sitio</button></a></div>
                      </div>

                    </div>)
                })}

              </div>
            </div>


            <div className="modal-footer">
              <p>© Maximiliano Miño 2021</p>
            </div>
          </div> : null}
    </>
  )
}

export default Projects
