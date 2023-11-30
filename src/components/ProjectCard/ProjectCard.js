import s from './ProjectCard.module.css';

export default function ProjectCard({project}) {


    if(!project) return <></>
  return (
    <div className={s.container}>
        <div className={s.content}>
            <div className={s.photocontainer}>
                
            </div>
            <div className={s.infocontainer}>
                <div className={s.titlecontainer}>
                    <span className={s.title}>
                        {project.title ? project.title : "Untitled"}
                    </span>
                </div>
                <div className={s.descriptioncontainer}>
                    <span className={s.description}>
                        {project.description ? project.description : "No description provided"}
                    </span>
            </div> 
        </div>
        </div>
    </div>
  )
}
