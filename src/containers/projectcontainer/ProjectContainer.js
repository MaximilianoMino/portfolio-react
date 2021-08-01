import React, { useState } from 'react'
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react';
import Projects from '../../components/projects/Projects'


const ProjectContainer = () => {

  const [openWindow, setOpenWindow] = useState(false);


  const { images, closeWindow, closeClick, setCloseWindow, setCurrentWindow, currentWindow } = useContext(DataContext)

  const { ie } = images;


  const openClick = () => {

    if (currentWindow !== 4) {
      setCurrentWindow(4);
    }
    setOpenWindow(true);
    setCloseWindow(false);

  }



  return (
    <div>
      <img src={ie} alt="proyectos" onClick={openClick} />
      <p>Proyectos</p>
      {
        (openWindow && currentWindow === 4) ?
          <Projects
            closeClick={closeClick}
            closeWindow={closeWindow}
            images={images}

          />
          : null}
    </div>
  )
}

export default ProjectContainer
