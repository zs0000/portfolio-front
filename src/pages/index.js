import Image from 'next/image'
import { Inter } from 'next/font/google'
import s from '@/styles/home.module.css'
import Hero from '@/components/Hero/Hero'
import ProjectsComponent from '@/components/ProjectsComponent/ProjectsComponent'
import TechComponent from '@/components/TechComponent/TechComponent'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={s.content}>
      <Hero />
      <ProjectsComponent />
      <TechComponent />
      {/* Skills Component? */}
    </div>
  )
}
