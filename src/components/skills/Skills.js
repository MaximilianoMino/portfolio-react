import React from 'react';
import './skills.scss';
import WindowOptions from '../modalwindow/WindowOptions';
import ModalOptions from '../modalwindow/ModalOptions'

const Skills = ({ images, closeWindow, closeClick }) => {

  const { notepad } = images;

  return (
    <>
      {
        !closeWindow ?

          <div
            className=
            "window-container"
          >
            <div className="window">
              <div className="window-title">
                <div className="text-title">
                  <img src={notepad} alt="folder icon" /><p >Skills - (C:)</p>
                </div>
                <WindowOptions

                  closeClick={closeClick}
                  closeWindow={closeWindow}
                />
              </div>
              <div className="modal-options">
                <ModalOptions />
              </div>
              <div className="skills-body">
                <div className="skills-container">
                  <h1 className="skills-header">Skills</h1>
                  <h3>Frontend</h3>
                  <ul>
                    <li>HTML</li>
                    <li>SCSS/CSS/Bootstrap</li>
                    <li>Javascript</li>
                    <li>React Js</li>
                    <li>AngularJS</li>
                    <li>Git</li>
                    <li>Jquery</li>
                    <li>Typescript</li>
                    <li>Debuggin</li>
                  </ul>
                  <h3>Backend</h3>
                  <ul>
                    <li>C#</li>
                    <li>Node Js</li>
                    <li>VB.net</li>
                  </ul>
                  <h3>Bases de datos</h3>
                  <ul>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>

                  <h1 className="skills-header">Herramientas</h1>
                  <ul>
                    <li>Postman</li>
                    <li>Jira</li>
                    <li>Github</li>
                    <li>Bitbucket</li>
                    <li>Beyond Compare</li>
                    <li>Slack</li>
                    <li>Telegram</li>
                    <li>VSCode</li>
                    <li>VStudio 2019</li>
                    <li>Firebase</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="modal-footer">
              <p>?? Maximiliano Mi??o 2021</p>
            </div>
          </div> : null}
    </>
  )
}

export default Skills
