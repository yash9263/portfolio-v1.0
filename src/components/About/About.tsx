import styled from 'styled-components'
import { default as AboutSvg } from '../SVGs/About'

const About = () => {
  return (
    <Wrapper>
      <SvgWrapper>
        <AboutSvg />
      </SvgWrapper>
      <AboutText>
        <Text>
          <Title>
            <h1>About me</h1>
            <span></span>
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            officiis deleniti accusamus nesciunt sint ducimus porro eos voluptas
            culpa. Neque nostrum doloremque mollitia ipsa qui voluptatum
            architecto culpa amet quibusdam.
          </p>
          <ul>
            <li>javascript</li>
            <li>typescript</li>
            <li>React</li>
          </ul>
        </Text>
      </AboutText>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
  --blue-bg: hsl(231, 48%, 89%);
  --blue-dark: hsl(231, 48%, 80%);
  /* display: flex; */
  display: grid;
  grid-template-rows: repeat(6, 60px);
  grid-template-columns: repeat(8, 1fr);
  gap: 12px 24px;
  background: linear-gradient(
    calc(180deg - 10deg),
    var(--blue-bg) 0%,
    var(--blue-bg) 49.99%,
    var(--blue-dark) 50%,
    var(--blue-dark) 100%
  );
  color: var(--color-dark-text);
  padding: 16px 80px;
  padding-bottom: 100px;
`
export const SvgWrapper = styled.div`
  max-width: 400px;
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: -1;
  & > svg {
    max-height: 100%;
  }
`
export const AboutText = styled.div`
  flex: 1;
  align-self: end;
  grid-column: 4 / -1;
  grid-row: 2 / -2;
`
export const Text = styled.div`
  background: var(--color-dark-background);
  color: var(--color-light-text);
  padding: 24px 32px;
  border-radius: 4px;
  max-width: 70ch;
  margin: 0 auto;
  box-shadow: ;
`
export const Title = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  h1 {
    font-weight: 500;
    font-size: 1.5rem;
    /* border-bottom: 1px solid; */
  }
  span {
    height: 1px;
    width: 200px;
    background: hsla(231, 48%, 89%, 0.4);
  }
`
export default About
