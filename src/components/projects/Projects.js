import React from "react";
import "./projects.scss";
import WindowOptions from "../modalwindow/WindowOptions";
import ModalOptions from "../modalwindow/ModalOptions";

const Projects = ({ images, closeWindow, closeClick }) => {
  const { ie, date_admin, store, samal, samalWebbApp, qrapido, mindfulness } = images;
  const projectsArr = [
    {
      name: "Landing Page",
      thumbnail: `${samal}`,
      description: "Landing page personalizada para Samal Agro SA.",
      tecnologies: "React, Vercel",
      demo: "https://github.com/MaximilianoMino/SamalAgro",
      link: "https://www.samalagro.com/",
    },
    {
        name: "Single Page Aplication",
        thumbnail: `${samalWebbApp}`,
        description: "Web para promocionar productos del agro.",
        tecnologies: "REACT JS, CSS, FIREBASE",
        demo: "https://github.com/MaximilianoMino/samal-agro-feria",
        link: "https://samal-agro.web.app/",
      },
  
    {
        name: "Página web de Yoga y Mindfulness",
        thumbnail: `${mindfulness}`,
        description: "Web de yoga para practicantes donde puedan elegir y administrar sus hábitos diarios.",
        tecnologies: "TYPESCRIPT, REACT JS, HEROKU, MAILCHIP, VERCEL, REDUX, FIGMA, CLOUDINARY",
        demo: "https://github.com/MaximilianoMino/s5-09-m-typescript-react",
        link: "https://mindfulness-yoga.vercel.app/",
      },
      {
        name: "Q'rapido",
        thumbnail: `${qrapido}`,
        description: "Consiste en un sistema de control de turnos y avisos.",
        tecnologies: "REACT JS, CSS, RAILWAY, VERCEL, NODE JS",
        demo: "https://github.com/MaximilianoMino/ProyectoCoder",
        link: "https://qrapido.netlify.app/",
      }, 
    {
      name: "Tienda de camaras",
      thumbnail: `${store}`,
      description: "E-commerce de camaras y accesorios para camaras.",
      tecnologies: "REACT JS, SCSS, FIREBASE, GITHUB PAGES",
      demo: "https://github.com/MaximilianoMino/ProyectoCoder",
      link: "https://e-commerce-3ac50.web.app/",
    },  
    {
      name: "Administrador de citas",
      thumbnail: `${date_admin}`,
      description: "Web para administrar citas de una veterinaria",
      tecnologies: "REACT JS, SCSS, NETLIFY",
      demo: "https://github.com/MaximilianoMino/Administrador-de-citas",
      link: "https://doctorcolitas.netlify.app/",
    },
  ];
  return (
    <>
      {!closeWindow ? (
        <div className="projects-container">
          <div className="window">
            <div className="window-title">
              <div className="text-title">
                <img src={ie} alt="ie icon" />
                <p>Proyectos</p>
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
              {projectsArr.map((project) => {
                return (
                  <div className="project-cont">
                    <div className="project">
                      <img
                        className="project-img"
                        src={project.thumbnail}
                        alt={project.name}
                      />

                      <h1 className="project-name">{project.name}</h1>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <p className="project-tecn">{project.tecnologies}</p>
                      <div className="project-button">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          <button>Sitio</button>
                        </a>
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <button>Demo</button>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="modal-footer">
            <p>© Maximiliano Miño 2021</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Projects;
