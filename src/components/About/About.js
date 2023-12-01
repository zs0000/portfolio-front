import React from 'react'
import s from "./About.module.css"
export default function About() {
  return (
    <div className={s.container}>
        <div className={s.labelcontainer}>
            <span className={s.label}>
                About
            </span>
        </div>
        <div className={s.content}>
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
  )
}


{/*
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
*/}