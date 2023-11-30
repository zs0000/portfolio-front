import s from './TechComponent.module.css';
export default function TechComponent() {
    const techs = [
    {
        category:"Languages",
        items:[
            'Java',
            'JavaScript',
            'TypeScript',
            'Python',
            'HTML/CSS'
        ]
    },
    {
        category:"Frameworks",
        items:[
            'React',
            'Next.js',
            'Express',
            'Node.js',
            'TailwindCSS',
        ]
    },
    {
        category:'Tools',
        items:[
            'Git',
            'GitHub',
            'VSCode',
            'Postman',
            'IntelliJ',
            'MySQL',
            'PostgreSQL',
            'Supabase',
            'Amazon S3',
        ]
    }

    ]
  return (
    <div className={s.container}>
        <div className={s.content}>
            {techs ? techs.map((tech) => (
                <div key={tech.category} className={s.techcontainer}>
                    <div className={s.categorycontainer}>
                        <span className={s.category}>
                            {tech.category}
                        </span>
                    </div>
                    <div className={s.itemscontainer}>
                        {tech.items.map((item) => (
                            <div key={item} className={s.itemcontainer}>
                                <span className={s.item}>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )): <></>}
        </div>
    </div>
  )
}

