import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <div>
      some svg
      </div>
      <AboutText>
        <h1>about me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officiis deleniti accusamus nesciunt sint ducimus porro eos voluptas culpa. Neque nostrum doloremque mollitia ipsa qui voluptatum architecto culpa amet quibusdam.</p>
      </AboutText>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const AboutText = styled.div`
  h1 {
    font-size: clamp(2rem, 3vw + 1rem, 3rem);
  }
`

export default About
