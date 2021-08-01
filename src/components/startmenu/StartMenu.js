import React, { useState } from 'react'
import './startmenu.scss'
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react';
import OnGoingModal from '../ongoingmodal/OnGoingModal'
const StartMenu = () => {
  const [activeModal, setActiveModal] = useState(false);

  const menuIconOnClick = () => {
    if (!activeModal) {
      setActiveModal(true);
    }
  }

  console.log(activeModal)

  const { images } = useContext(DataContext)
  const { shutdown, logoff, run, find, help, update } = images;
  return (
    <>
      <div className="start-menu">
        <div className="title-container">
          <div className="title">Windows<span>98</span></div>
        </div>
        <ul>
          <li className="windows-update" onClick={menuIconOnClick} ><img src={update} alt="update" className="menu-icon update" />Windows Update</li>
          <hr />
          <li className="find" onClick={menuIconOnClick} ><img src={find} alt="find" className="menu-icon find" />Find</li>
          <li className="help" onClick={menuIconOnClick} ><img src={help} alt="help" className="menu-icon help" />Help</li>
          <li className="run" onClick={menuIconOnClick} ><img src={run} alt="run" className="menu-icon run" />Run...</li>
          <hr />
          <li className="log-off" onClick={menuIconOnClick}><img src={logoff} alt="logoff" className="menu-icon logoff" />Log Off</li>
          <li className="shut-down" onClick={menuIconOnClick}> <img src={shutdown} alt="shutdown" className="menu-icon shutdown" />Shut Down...</li>
        </ul>
      </div>
      {
        activeModal ?
          <div className="featureModal">
            <OnGoingModal
              setActiveModal={setActiveModal}
            />
          </div>
          : null
      }
    </>
  )
}

export default StartMenu
