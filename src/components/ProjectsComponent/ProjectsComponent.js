import ProjectCard from '../ProjectCard/ProjectCard';
import s from './ProjectsComponent.module.css';
export default function ProjectsComponent() {
    const projects = [
        {
            title:"GeneLink [WiP]",
            description:"Real-world Website for reptile enthusiasts and commercial breeders to track their lineage and create lineage trees, simplifying the process for breeders, and allowing consumers to follow along with ease. A whole lineage, in one link. Planning on full release December or January 2024.",
            image:"",
            link:"https://mygenelinks.com",
        },
        {
            title:"Twitter Clone",
            description:"A 1 to 1 visual clone of Twitter in 2022. This project was to gauge my ability to recreate responsive layouts that are mobile friendly. It includes basic functionality such as posts, follows, likes, retweets, etc. Along the way I also learned about global state management, server-side authentication, and how to utilize cache to reduce page load times to near instant, and much more that is helping me build my first real-world application, GeneLink.",
            image:"",
            link:"https://twitter-proj-iota.vercel.app/home",
        },
        {
            title:"RidOf",
            description:"An example application inspired by OfferUp. I mainly built this project to teach me about image-storage, caching, LAMBDA functions, and the important backend fundamentals, such as storing data with complex relationships and practicing implementing production-grade procedures such as Row-level security since I am using Postgres. Includes the basics for an application of this type, allowing users to sell their unwanted items, and buy items from other users. Users can create listings, and browse listings from other users. Users can inquire about the listing by messaging the seller, and the seller can respond to the inquiry.",
            image:"",
            link:"https://rid-of-app.vercel.app/",
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
