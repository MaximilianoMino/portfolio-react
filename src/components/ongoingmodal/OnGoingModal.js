import React, { useState } from 'react'
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react';
import './ongoingmodal.scss'

const OnGoingModal = ({ setActiveModal }) => {

  const [closeWindowModal, setCloseWindowModal] = useState(false)
  const { images } = useContext(DataContext)

  const { close, warning } = images;

  const onGoingCloseClick = () => {
    setCloseWindowModal(true)
    setActiveModal(false)
  }

  return (
    <>
      {!closeWindowModal
        ?
        <div className="ongoing-container">
          <div className="ongoing-modal">
            <p>Por implementar</p>
            <div className="w-options-container">
              <div className="w-option" >
                <img src={close} alt="Close" onClick={onGoingCloseClick} />
              </div>
            </div>
          </div>
          <div className="ongoing-body">
            <img src={warning} alt="warning" /> <p>Lo que estas buscando aún se esta creando</p>
            <button onClick={onGoingCloseClick}>OK</button>
          </div>
        </div>
        : null
      }
    </>
  )
}

export default OnGoingModal
