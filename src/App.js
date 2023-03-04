import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import NavBar from './Components/NavBar/NavBar'
import Page1 from './Components/ContentPages/Page1'
import Page2 from './Components/ContentPages/Page2'
import Page3 from './Components/ContentPages/Page3'
import Notify from './Components/Notification bar/Notify'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <LandingPage/>
      <Page1 />
      <Page2 />
      <Page3 />
      <Notify />
      <Footer />
    </>
  )
}

export default App