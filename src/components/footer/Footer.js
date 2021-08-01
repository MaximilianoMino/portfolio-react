import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react';
import './footer.scss';
import StartMenu from '../startmenu/StartMenu'

const Footer = () => {

  const { images } = useContext(DataContext)

  const [hour, setHour] = useState();
  const [minutes, setMinutes] = useState();

  const [activeStart, setActiveStart] = useState(false);


  useEffect(() => {

    setInterval(() => {
      const d = new Date()
      setHour(d.getHours());
      setMinutes(d.getMinutes());

    }, 1000);
  }, [])


  const activateStart = () => {
    if (!activeStart) {
      setActiveStart(true);
    } else {
      setActiveStart(false);
    }
  }


  return (
    <>
      {
        activeStart
          ?
          <StartMenu />
          :
          null}
      <div className="startbar">
        <button onClick={activateStart} className="start-btn">Start</button>
        <div class="time-taskbar">
          <img src={images.timedate} className="time-icon" alt="calendar" /><span class="time-stamp">{`${hour}:${minutes}${(hour >= 13) ? "PM" : "AM"}`}</span>
        </div>

      </div>
    </>
  )
}

export default Footer
