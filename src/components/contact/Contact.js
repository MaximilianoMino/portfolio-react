import WindowOptions from '../modalwindow/WindowOptions';
import ModalOptions from '../modalwindow/ModalOptions'
import './contact.scss'

const Contact = ({ images, closeWindow, closeClick }) => {


  const { phone, mail, linkedinLogo, githubLogo, folder, CV } = images;

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
                  <img src={phone} alt="folder icon" /><p >Contact - (C:)</p>
                </div>
                <WindowOptions

                  closeClick={closeClick}
                  closeWindow={closeWindow}
                />
              </div>
              <div className="modal-options">
                <ModalOptions />
              </div>
              <div className="modal-body">
                <a href="mailto:maximiliano.mino323@gmail.com" target="_blank" rel="noopener noreferrer">
                  <div className="social">
                    <img src={mail} alt="Mail" className="social-icon" />
                    <p>Mail</p>
                  </div>
                </a>
                <a href="https://drive.google.com/file/d/1tf42nxzwf_nEmG1isfcHmw5YkSgy8zmA/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <div className="social">
                    <img src={CV} alt="Logo CV" className="social-icon" />
                    <p>CV</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/maximiliano-mi%C3%B1o-4876221a9/" target="_blank" rel="noopener noreferrer">
                  <div className="social">
                    <img src={folder} alt="Mail" className="social-icon" />
                    <i><img className="icon" src={linkedinLogo} alt="Logo Linkedin" /></i>
                    <p>Linkedin</p>
                  </div>
                </a>
                <a href="https://github.com/MaximilianoMino" target="_blank" rel="noopener noreferrer">
                  <div className="social">
                    <img src={folder} alt="Mail" className="social-icon" /><i><img className="icon" src={githubLogo} alt="Logo Github" /></i>
                    <p>GitHub</p>
                  </div></a>
              </div>
            </div>


            <div className="modal-footer">
              <p>© Maximiliano Miño 2021</p>
            </div>
          </div> : null}

    </>
  )
}

export default Contact
