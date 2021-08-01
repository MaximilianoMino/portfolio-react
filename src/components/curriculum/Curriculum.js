import React from 'react'
import WindowOptions from '../modalwindow/WindowOptions';
import ModalOptions from '../modalwindow/ModalOptions'
import './curriculum.scss'

const Curriculum = ({ images, closeWindow, minimizeWindow, maximizeWindow, closeClick }) => {
  const { CV } = images;

  return (
    <>
      {
        !closeWindow ?

          <div
            className=
            "word-container"
          >
            <div className="window">
              <div className="window-title">
                <div className="text-title">
                  <img src={CV} alt="folder icon" /><p >Curriculum - Wordpad</p>
                </div>
                <WindowOptions

                  closeClick={closeClick}
                  closeWindow={closeWindow}
                />
              </div>
              <div className="modal-options">
                <ModalOptions />
              </div>
              <div className="word-body">
                <div className="pdf-container">
                  <p>Click aqui para <a href="https://drive.google.com/file/d/1nXQqg9W6Xi7p-ZbSk6D35ww8_baylvFP/view?usp=sharing" target="_blank" rel="noreferrer"> descargar mi CV</a> en formato PDF.</p>
                </div>
                <div className="cv-container">
                  <header className="cv-header">
                    <p className="h-name">Maximiliano Miño</p>
                    <p className="h-age">26 años</p>
                    <p className="h-prof">Desarrollador Front-End</p>
                  </header>
                  <div className="cv-body">
                    <div className="education">
                      <h3>-- Educación --</h3>
                      <ul>
                        <li>2019-Act. -- Tecnicatura superior en redes e infraestructuras -- Dalmacio Velez Sarsfield.</li>
                        <li>2020 -- React intensivo -- Coder House</li>
                        <li>2021- Act. -- Programacion Backend -- Coder House</li>
                      </ul>
                    </div>
                    <div className="experience">
                      <h3>-- Experiencia --</h3>
                      <ul>
                        <li>Enero 2021 - Abril 2021 -- Desarrollador de software -- WEB CENTRIX </li>
                      </ul>
                    </div>
                    <div className="skills">
                      <h3>-- Habilidades --</h3>
                      <ul>
                        <li><strong>FRONTEND</strong> -- HTML - CSS/SCSS - JAVASCRIPT - REACT JS - ANGULAR JS - JQUERY - TYPESCRIPT --</li>
                        <li><strong>BACKEND</strong> -- NODE JS - C# - VB.NET --</li>
                        <li><strong>BASES DE DATOS</strong> -- MYSQL - POSTGRESSQL - MONGODB -- </li>
                        <li><strong>HERRAMIENTAS</strong> -- POSTMAN - JIRA - GITHUB - BITBUCKET - BEYOND COMPARE - SLACK - TELEGRAM - VSCODE - VSTUDIO 2019 - FIREBASE - AWS --</li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

            </div>


            <div className="modal-footer">
              <p>© Maximiliano Miño 2021</p>
            </div>
          </div> : null}
    </>
  )
}

export default Curriculum
