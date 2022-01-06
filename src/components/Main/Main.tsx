import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Common/Button'
import Developer from '../SVGs/Developer'

const Main = () => {
  return (
    <Wrapper>
      <Heading>
        <Header>
          <Orbit/>
          <h1>Hi! I am<br/> Yashwant,</h1>
          <h3>a web developer</h3>
        </Header>
        <ButtonsWrapper>
          <Link href='#' passHref><Button>Let&apos;s talk</Button></Link>
          <Link href='#' passHref><Button primary showIcon>Resume</Button></Link>
        </ButtonsWrapper>
      </Heading>
      <SvgWrapper>
        <Developer/>
      </SvgWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.main`
  min-height: calc(100vh - (36px + (8px * 2)));
  background: var(--color-light-background);
  color: var(--color-dark-text);
  display: grid;
  place-items: center;
  grid-template-columns: 1.75fr 1.25fr;
  padding: 16px 32px;
`
export const Heading = styled.div``
export const Header = styled.header`
  position: relative;
  font-family: var(--font-family-fredoka);
  font-weight: var(--font-weight-normal);
  letter-spacing: 0.125rem;
  line-height: 1.25;
  margin: 24px 0;
  h1{
    font-size: calc(64 / 16 * 1rem);
    font-size: clamp(
      2.5rem,
      4vw + 1rem,
      4rem
    );
  }
  h3 {
    font-size: calc(48 / 16 * 1rem);
    font-size: clamp(
      2rem,
      3vw + 1rem,
      3.5rem
    );
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
`

export const Orbit = styled.div`
  --circle-size: 3rem;
  position: absolute;
  width: var(--circle-size);
  height: var(--circle-size);
  background: var(--color-dark-text);
  border-radius: 100%;
  transform: translateY(-100%);
  &:after {;
    content: '';
    position: absolute;
    width: calc(var(--circle-size) / 3);
    height: calc(var(--circle-size) / 3);
    background: var(--color-dark-text);
    border-radius: 100%;
    right: 0;
    transform: translate(100%, -100%);
  }
`
export const SvgWrapper = styled.div``

export default Main
