import Image from 'next/image'
import s from './Hero.module.css'
import EducationComponent from '../EducationComponent/EducationComponent'
import Link from 'next/link'
import Linkedin from '@/icons/LinkedIn'
import Github from '@/icons/Github'

export default function Hero({darkMode}) {
  return (
    <div className={darkMode? s.darkcontainer : s.container}>
        <div>
            <div className={s.bannercontainer}>
                <Image src={'https://utfs.io/f/0314cb10-b034-43f7-9eee-910d43b2bf4d-fxr4f5.svg'} fill style={{objectFit:'cover'}}  />
            </div>
            <div className={s.middlecontainer}>
            <div className='relative '>
            <div className={s.photocontainer}>
                <Image src={'https://utfs.io/f/6719ff46-3132-4676-97ea-fe3321eff2aa-ai0x54.jpg'} fill style={{objectFit:'cover'}} className={darkMode ? s.darkphoto :  s.photo} />
            </div>
            </div>
            <div className={s.infocontainer}>
            <div className={s.namecontainer}>
                <span className={s.name}>
                    Zachary Sanchez
                    
                </span>
                <span className='tracking-tight text-gray-500 font-semibold'>
                    (Zach)
                </span>
                
            </div>
            <div className={s.links}>
                <div className={s.link}>
                <Link href='https://linkedin.com/in/zachsanchez'>
                    <Linkedin/>
                </Link>
                </div>
                <div className={s.link}>
                <Link href='https://github.com/zs0000'>
                    <Github/>
                </Link>
                </div>
            </div>
            </div>
            </div>
            <div className={s.bottomcontainer}>
               
            </div>
        </div>
    </div>
  )
}
