import Image from 'next/image'
import { Inter } from 'next/font/google'
import s from '@/styles/home.module.css'
import Hero from '@/components/Hero/Hero'
import ProjectsComponent from '@/components/ProjectsComponent/ProjectsComponent'
import TechComponent from '@/components/TechComponent/TechComponent'
import About from '@/components/About/About'
import EducationComponent from '@/components/EducationComponent/EducationComponent'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [enabledDarkMode, setEnabledDarkMode] = useState(false)


  return (
    <div className={s.content}>
      {/*
      <div className={s.buttoncontainer}>
        <button className={s.button} onClick={() => setEnabledDarkMode(!enabledDarkMode)}>
          {enabledDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      */}
      <Hero darkMode={enabledDarkMode} />
      <EducationComponent darkMode={enabledDarkMode} />
      <About darkMode={enabledDarkMode} />
      <ProjectsComponent darkMode={enabledDarkMode} />
      <TechComponent darkMode={enabledDarkMode} />
      {/* Skills Component? */}
    </div>
  )
}
