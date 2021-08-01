import React, { useState } from 'react';
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react';
import MyResume from '../../components/myresume/MyResume'
import styled from 'styled-components'

const MyResumeContainer = () => {

  const [openWindow, setOpenWindow] = useState(false);


  const { images, closeClick, closeWindow, currentWindow, setCurrentWindow, setCloseWindow } = useContext(DataContext);


  const { maxi_cuadrada } = images;

  const IMG = styled.img`
  width: 5rem;
  border-radius: 39% 45%;
  `

  const openClick = () => {

    if (currentWindow !== 1) {
      setCurrentWindow(1);
    }
    setOpenWindow(true);
    setCloseWindow(false);
  }

  return (
    <div>
      <IMG src={maxi_cuadrada} alt="my resume folder" onClick={openClick} />
      <p>Yo</p>
      {
        (openWindow && currentWindow === 1)
          ?
          <MyResume
            currenWindow={currentWindow}
            closeWindow={closeWindow}
            closeClick={closeClick}
            images={images}
          />
          :
          null}
    </div>
  )
}

export default MyResumeContainer
