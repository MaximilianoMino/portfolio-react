import React from 'react'
import './modalwindow.scss';
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react';

const WindowOptions = () => {


  const { images, closeClick } = useContext(DataContext);


  const { close } = images;
  return (
    <>
      <div className="w-options-container">

        <div className="w-option" >
          <img src={close} alt="Close" onClick={closeClick} />
        </div>
      </div>
    </>
  )
}

export default WindowOptions
