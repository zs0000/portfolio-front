import ProjectCard from '../ProjectCard/ProjectCard';
import s from './ProjectsComponent.module.css';
export default function ProjectsComponent() {
    const projects = [
        {
            title:"GeneLink",
            description:"Public Website for reptile enthusiasts and commercial breeders to track their lineage and create lineage trees, simplifying the process for breeders, and allowing consumers to follow along with ease. A whole lineage, in one link.",
            image:"",
            link:"",
        },
        {
            title:"RidOf",
            description:"A web application that allows users to sell their unwanted items, and buy items from other users. Users can create listings, and browse listings from other users. Users can also message other users, and leave reviews on other users.",
            image:"",
            link:"",
        },
        {
            title:"one more",
            description:"find a random project to put here",
            image:"",
            link:"",
        },
      ]
    

  return (
    <div className={s.container}>
        <div className={s.labelcontainer}>
            <span className={s.label}>
                Projects
            </span>
        </div>
        <div className={s.content}>
            {projects ? projects.map((project) => (
                <ProjectCard project={project} />
            )): <></>}
        </div>
    </div>
  )
}
