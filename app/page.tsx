import Contact from '@/components/Contact'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div >
      <Home />
      <Services />
      <Projects />
      <Contact/>

    </div>
  )
}

export default page