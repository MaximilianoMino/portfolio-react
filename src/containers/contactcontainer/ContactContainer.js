import React from 'react'
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react';
import { useState } from 'react';
import Contact from '../../components/contact/Contact'
const ContactContainer = () => {

  const [openWindow, setOpenWindow] = useState(false);


  const { images, closeWindow, closeClick, setCloseWindow, setCurrentWindow, currentWindow } = useContext(DataContext)

  const { phone } = images;


  const openClick = () => {

    if (currentWindow !== 2) {
      setCurrentWindow(2);
    }
    setOpenWindow(true);
    setCloseWindow(false);

  }
  return (
    <div>
      <img src={phone} alt="contacto" onClick={openClick} />
      <p>Contacto</p>
      {
        (openWindow && currentWindow === 2) ?
          <Contact
            closeClick={closeClick}
            closeWindow={closeWindow}
            images={images}

          />
          : null}
    </div>
  )
}

export default ContactContainer
