import React, { createContext, useState } from "react";
import { useEffect } from "react";
import phone from "../assets/images/phone.png";
import folder from "../assets/images/folder.png";
import logo from "../assets/images/logo.png";
import settings from "../assets/images/settings.png";
import proyectos from "../assets/images/proyectos.png";
import timedate from "../assets/images/time&date.png";
import enlarge from "../assets/images/enlarge.png";
import minimize from "../assets/images/minimize.png";
import close from "../assets/images/close.png";
import mail from "../assets/images/mail.png";
import CV from "../assets/images/CV.png";
import linkedinLogo from "../assets/images/linkedinLogo.png";
import githubLogo from "../assets/images/githubLogo.png";
import maxi_cuadrada from "../assets/images/maxi_cuadrada.png";
import paint from "../assets/images/paint.png";
import sky from "../assets/images/sky.jpg";
import computer from "../assets/images/computer.png";
import colorunderline from "../assets/images/colorunderline.jpg";
import experience from "../assets/images/experience.png";
import calendar from "../assets/images/calendar.png";
import profesion from "../assets/images/profesion.png";
import notepad from "../assets/images/notepad.png";
import ie from "../assets/images/ie.png";
import shutdown from "../assets/images/shutdown.png";
import logoff from "../assets/images/logoff.png";
import run from "../assets/images/run.png";
import help from "../assets/images/help.png";
import find from "../assets/images/find.png";
import update from "../assets/images/update.png";
import cursame from "../assets/projects/cursame.png";
import date_admin from "../assets/projects/date_admin.png";
import store from "../assets/projects/store.png";
import samal from "../assets/projects/samal.png";
import mindfulness from "../assets/projects/mindfulness.png";
import qrapido from "../assets/projects/qrapido.png";
import samalWebbApp from "../assets/projects/samalwebap.jpeg";
import warning from "../assets/images/warning.png";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [images, setImages] = useState({});
  const [currentWindow, setCurrentWindow] = useState(0);
  const [closeWindow, setCloseWindow] = useState(false);

  useEffect(() => {
    setImages({
      phone,
      logo,
      folder,
      settings,
      proyectos,
      timedate,
      enlarge,
      minimize,
      close,
      mail,
      CV,
      linkedinLogo,
      githubLogo,
      maxi_cuadrada,
      paint,
      sky,
      computer,
      colorunderline,
      experience,
      calendar,
      profesion,
      notepad,
      ie,
      shutdown,
      warning,
      cursame,
      logoff,
      run,
      help,
      find,
      update,
      samal,
      store,
      date_admin,
      samalWebbApp,
      mindfulness,
      qrapido
    });
  }, []);

  const closeClick = () => {
    setCloseWindow(true);
    setCurrentWindow(0);
  };

  console.log("openwindow: " + currentWindow);
  return (
    <DataContext.Provider
      value={{
        images,
        currentWindow,
        setCurrentWindow,
        closeClick,
        closeWindow,
        setCloseWindow,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
