import Image from 'next/image'
import Link from 'next/link'
import { projects } from './data'

const Project = () => {
  return (
    <div>
      <h1>Project</h1>
      <div>
        {projects.map(project => (<div key={project.heading}>
          <Image src={project.image} width={48} height={60} alt={project.heading}/>
          <h2>{project.heading}</h2>
          <p>{project.desc}</p>
          <div><Link href={project.link}>visit</Link><Link href={project.github}>github</Link></div>
        </div>))}
      </div>
    </div>
  )
}

export default Project
