import Image from 'next/image'
import s from './Hero.module.css'

export default function Hero() {
  return (
    <div className={s.container}>
        <div>
            <div className={s.bannercontainer}>
                <Image src={'https://utfs.io/f/0314cb10-b034-43f7-9eee-910d43b2bf4d-fxr4f5.svg'} fill style={{objectFit:'cover'}}  />
            </div>
            <div className={s.middlecontainer}>
            <div className='relative '>
            <div className={s.photocontainer}>
                <Image src={'https://utfs.io/f/6719ff46-3132-4676-97ea-fe3321eff2aa-ai0x54.jpg'} fill style={{objectFit:'cover'}} className={s.photo} />
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
                {/* Relevant links */}
            </div>
            </div>
            </div>
            <div className={s.bottomcontainer}>
            <div className={s.biocontainer}>
                <div className={s.bio}>
                    <span>
                    Software Developer with an obsession for learning and a passion for design and user experience. Currently in my third year at the University of Washington pursuing a B.S. in Computer Science. My journey in coding started with hosting servers on games like RuneScape and Garry's mod, leading me to explore later explore programming as a whole. In the past few years I have been exploring and mastering Web Development (frontend and backend) within the JavaScript ecosystem, utilizing popular tools such as React and Next.js.

                    </span>
                    <span className=''>
                    I am eager for new avenues for growth and am on the lookout for a summer internship in 2025 and/or a full-time position for the 2025/26 period. Feel free to browse my projects, and don't hesitate to reach out to me for collaboration, opportunities, or just a chat about tech!
                    </span>
                
           
                
                
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
