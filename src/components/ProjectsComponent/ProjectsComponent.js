import ProjectCard from '../ProjectCard/ProjectCard';
import s from './ProjectsComponent.module.css';
export default function ProjectsComponent() {
    const projects = [
        {
            title:"GeneLink",
            description:"Real-world Website for reptile enthusiasts and commercial breeders to track their lineage and create lineage trees, simplifying the process for breeders, and allowing consumers to follow along with ease. A whole lineage, in one link.",
            image:"",
            link:"",
        },
        {
            title:"Twitter Clone",
            description:"A 1 to 1 visual clone of Twitter in 2022. This project was to gauge my ability to recreate responsive layouts. It includes basic functionality such as posts, follows, likes, retweets, etc, all built using  React, Next.js, and TailwindCSS.",
            image:"",
            link:"https://twitter-proj-iota.vercel.app/home",
        },
        {
            title:"RidOf",
            description:"An example application that allows users to sell their unwanted items, and buy items from other users. Users can create listings, and browse listings from other users. Users can also message other users, and leave reviews on other users.",
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
                <ProjectCard key={project.title} project={project} />
            )): <></>}
        </div>
    </div>
  )
}
