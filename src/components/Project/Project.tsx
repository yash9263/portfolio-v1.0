import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { projects } from './data'
import { QUERIES } from '../../../libs/constants'

const Project = () => {
  return (
    <Wrapper>
      <ProjectsWrapper>
        {projects.map(project => (
          <ProjectWrapper key={project.heading}>
            <ImageWrapper>
              <ProjectImage src={project.image} alt={project.heading} layout='fill'/>
            </ImageWrapper>
            <Description>
              <h2>{project.heading}</h2>
              <p>{project.desc}</p>
              <div><Link href={project.link}>visit</Link><Link href={project.github}>github</Link></div>
            </Description>
          </ProjectWrapper>
        ))}
      </ProjectsWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.section``
export const ProjectsWrapper = styled.div`
  display: flex;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
  }
`

export const ProjectWrapper = styled.div`
  position: relative;
  height: 420px;
`

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const ProjectImage = styled(Image)`
  object-fit: cover;
`
export const Description = styled.div`
  position: relative;
  color: var(--color-light-text);
`
export default Project
