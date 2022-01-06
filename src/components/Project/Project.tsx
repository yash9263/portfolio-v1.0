import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import photogallery from '/public/photo-gallery.jpg'
import { GitHub, ExternalLink } from 'react-feather'
import { projects } from './data'
import { QUERIES } from '../../../libs/constants'

const Project = () => {
  return (
    <Wrapper>
      <Heading>Projects</Heading>
      <ProjectCards>
        <Card>
          <TitleWrapper>
            <Title>Photo gallery</Title>
          </TitleWrapper>
          <Layout>
            <Description>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus explicabo quibusdam ab.
              </Text>
              <Links>
                <Link href="#" passHref>
                  <a>
                    <ExternalLink />
                    <span>visit</span>
                  </a>
                </Link>
                <Link href="#" passHref>
                  <a>
                    <GitHub />
                    <span>github</span>
                  </a>
                </Link>
              </Links>
            </Description>
            <ImageWrapper>
              <Image src={photogallery} alt="image" layout="fill" />
            </ImageWrapper>
          </Layout>
        </Card>
      </ProjectCards>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
  min-height: 100vh;
  background: hsl(231, 48%, 80%);
  padding: 16px 80px;
`
export const Heading = styled.h1`
  font-family: var(--font-family-fredoka);
  font-weight: var(--font-weight-normal);
  font-size: 3rem;
  margin-bottom: 32px;
`
export const ProjectCards = styled.div``
export const Card = styled.div`
  position: relative;
  padding: 16px 24px;
  padding-top: 32px;
  border: 1px solid;
  border-radius: 6px;
  max-width: 480px;
  height: 260px;
  box-shadow: 8px 8px 0px 2px hsla(230, 33%, 21%, 0.9);
  transition: box-shadow 100ms ease-in;
`
export const TitleWrapper = styled.div`
  position: absolute;
  top: -32px;
  background: hsl(230, 33%, 21%);
  padding-bottom: 4px;
  padding-right: 4px;
  width: max-content;
  border-radius: 4px;
`
export const Title = styled.div`
  font-family: var(--font-family-fredoka);
  font-weight: var(--font-weight-normal);
  background: hsl(231, 48%, 80%);
  border-radius: 4px;
  font-size: 1.5rem;
  border: 1px solid;
  width: max-content;
  padding: 8px 16px;
`
export const Layout = styled.div`
  display: flex;
`
export const Description = styled.div``
export const Text = styled.p`
  padding: 16px 8px;
`

export const ImageWrapper = styled.div`
  position: relative;
  flex: 1 0 200px;
  height: 220px;
  margin-top: -8px;
`
export const NextImage = styled(Image)`
  object-fit: cover;
`

export const Links = styled.div`
  display: flex;
  gap: 16px;
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: underline;
    span {
      & > svg {
        width: 20px;
        transition: transform 100ms ease-in;
      }
    }
    &:hover span svg {
      transform: translateX(8%);
    }
    &:hover {
      text-decoration: none;
    }
  }
`
export default Project
