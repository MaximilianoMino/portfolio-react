import React, { useState } from 'react'
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react';
import Skills from '../../components/skills/Skills'

const SkillsContainer = () => {

  const [openWindow, setOpenWindow] = useState(false);


  const { images, closeWindow, closeClick, setCloseWindow, setCurrentWindow, currentWindow } = useContext(DataContext)

  const { notepad } = images;


  const openClick = () => {

    if (currentWindow !== 3) {
      setCurrentWindow(3);
    }
    setOpenWindow(true);
    setCloseWindow(false);

  }



  return (
    <div>
      <img src={notepad} alt="contacto" onClick={openClick} />
      <p>Skills</p>
      {
        (openWindow && currentWindow === 3) ?
          <Skills
            closeClick={closeClick}
            closeWindow={closeWindow}
            images={images}

          />
          : null}
    </div>
  )
}

export default SkillsContainer
