import styled from 'styled-components'
import { default as AboutSvg } from '../SVGs/About'

const About = () => {
  return (
    <Wrapper>
      <SvgWrapper>
        <AboutSvg />
      </SvgWrapper>
      <AboutText>
        <h1>about me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officiis deleniti accusamus nesciunt sint ducimus porro eos voluptas culpa. Neque nostrum doloremque mollitia ipsa qui voluptatum architecto culpa amet quibusdam.</p>
      </AboutText>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  background: var(--color-light-background);
  color: var(--color-dark-text);
`
export const ImageWrapper = styled.div`
  width: 400px;
  border-radius: 50%;
  border: 1px solid;
  img{
    width: 100%;
  }
`
export const AboutText = styled.div`
  h1 {
    font-size: clamp(2rem, 3vw + 1rem, 3rem);
  }
`

export const SvgWrapper = styled.div``
export default About
