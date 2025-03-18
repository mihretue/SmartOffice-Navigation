import React from 'react'
import Header from "../../components/ui/header"
import Footer from '../../components/ui/Footer'
import DirectorMessage from "../../components/ui/directorMessage"

function home() {
  return (
    <div>
      <Header/>
      <DirectorMessage/>
      <Footer/>
    </div>
  )
}

export default home
