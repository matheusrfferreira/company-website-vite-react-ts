import React from 'react'
import { Routes, Route } from "react-router-dom"

import { Header, Footer } from '@components'
import { Home, AboutUs, Blog, ContactUs, NotFound, Services, OurProjects } from '@pages'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="our-projects" element={<OurProjects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
