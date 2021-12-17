import Link from 'next/link'
import styled from 'styled-components'
import Developer from '../SVGs/Developer'

const Main = () => {
  return (
    <Wrapper>
      <Heading>
        <h1>Hi! I am Yashwant</h1>
        <h3>developer</h3>
        <Link href='#'>get in touch</Link>
      </Heading>
      <SvgWrapper>
        <Developer/>
      </SvgWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.main`
  background: var(--color-dark-background);
  color: var(--color-light-text);
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  `
export const Heading = styled.header`
  h1{
    font-family: var(--font-family-fredoka);
    font-size: calc(64 / 16 * 1rem);
    font-size: clamp(
      2.5rem,
      4vw + 1rem,
      4rem
    );
    font-weight: var(--font-weight-normal);
  }
  h3 {
    font-size: calc(24 / 16 * 1rem);
  }
`
export const SvgWrapper = styled.div``

export default Main
