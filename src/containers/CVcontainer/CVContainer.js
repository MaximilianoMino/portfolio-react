import React, { useState } from 'react'
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react';
import Curriculum from '../../components/curriculum/Curriculum';

const SkillsContainer = () => {

  const [openWindow, setOpenWindow] = useState(false);


  const { images, closeWindow, closeClick, setCloseWindow, setCurrentWindow, currentWindow } = useContext(DataContext)

  const { CV } = images;


  const openClick = () => {

    if (currentWindow !== 5) {
      setCurrentWindow(5);
    }
    setOpenWindow(true);
    setCloseWindow(false);

  }



  return (
    <div>
      <img src={CV} alt="curriculum" onClick={openClick} />
      <p>Curriculum</p>
      {
        (openWindow && currentWindow === 5) ?
          <Curriculum
            closeClick={closeClick}
            closeWindow={closeWindow}
            images={images}

          />
          : null}
    </div>
  )
}

export default SkillsContainer
