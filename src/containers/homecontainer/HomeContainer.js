import React from 'react'
import { DataProvider } from '../../context/DataContext'
import Footer from '../../components/footer/Footer';
import Home from '../../components/home/Home'


const HomeContainer = () => {





  return (
    <DataProvider>
      <Home />
      <Footer />
    </DataProvider>
  )
}

export default HomeContainer
