import Image from 'next/image';
import s from './EducationComponent.module.css';

export default function EducationComponent() {
  return (
    <div className={s.container}>
        <div className={s.content}>
          <div className={s.item}>
            <div className={s.photocontainer}>
              <Image src={'https://utfs.io/f/3a48db4e-9537-437a-8ee1-4ce8d51f96b3-cbe4xv.SVG.png'} width={80} height={80} className={s.photo} />
            </div>
            <div className={s.infocontainer}>
            <div className={s.title}>
              <span className={s.titletext}>
                University of Washington
              </span>
            </div>
            <div className={s.subtext}>
              <span className={s.subtexttext}>
                B.S. in Computer Science and Systems
              </span>
            </div>
            <div className={s.subtext}>
              <span className={s.subtexttext}>
                Est. Grad. Dec. 2024
              </span>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}
