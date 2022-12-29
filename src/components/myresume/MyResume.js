import React from 'react'
import WindowOptions from '../modalwindow/WindowOptions';
import ModalOptions from '../modalwindow/ModalOptions'
import './myresume.scss'

const MyResume = ({ closeWindow, images }) => {


  const { sky, maxi_cuadrada, computer, colorunderline, experience, calendar, profesion } = images;


  return (
    <>
      {!closeWindow ?
        <div
          className=
          "myresume-container"
        >
          <div className="myresume-window">
            <div className="window-title">
              <div className="text-title">
                <img src={maxi_cuadrada} alt="paint icon" /><p>Maximiliano Miño </p>
              </div>
              <WindowOptions

              />
            </div>
            <div className="modal-options">
              <ModalOptions />
            </div>
            <div className="myresume-modal-body">
              <aside className="myresume-aside">
                <img className="computer" src={computer} alt={computer} />
                <h2>Sobre Mi</h2>
                <img src={sky} alt={sky} />
                <img className="colorunderline" src={colorunderline} alt={colorunderline} />
              </aside>
              <div className="icons-side">
                <div className="myresume-social">
                  <img src={maxi_cuadrada} alt="" className="myresume-social-icon" />
                  <p>Maximiliano Miño</p>
                </div>
                <div className="myresume-social">
                  <img src={calendar} alt="" className="myresume-social-icon" />
                  <p>27 años</p>
                </div>
                <div className="myresume-social">
                  <img src={experience} alt="" className="myresume-social-icon" />
                  <p>Junior Dev</p>
                </div>
                <div className="myresume-social">
                  <img src={profesion} alt="" className="myresume-social-icon" />
                  <p>Fullstack Dev</p>
                </div>
              </div>
            </div>
          </div>


          <div className="modal-footer">
            <p>© Maximiliano Miño 2021</p>
          </div>
        </div>
        : null}
    </>
  )
}

export default MyResume
