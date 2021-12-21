import Link from 'next/link'
import styled from 'styled-components'
import Chilling from '../SVGs/Chiling'

const Contact = () => {
  return (
    <Wrapper>
      <Chilling/>
      <div>
        <h2>I&apos;m always open for a chat.</h2>
        <p>
          <span>
            <Link href='mailto:yashwant8530@gmail.com'>
              email me
            </Link> at yashwant8530@gmail.com
          </span>
          <span> or dm me on social media.</span>
        </p>
        <div><Link href='#'>twitter</Link><Link href='#'>linkedin</Link></div>
      </div>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
  background: var(--color-light-background);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
`

export default Contact
