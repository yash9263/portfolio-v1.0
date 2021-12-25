import Link from 'next/link'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href='/' passHref>
        <a>
          <LogoWrapper>yashwant</LogoWrapper>
        </a>
      </Link>

      <Nav>
        <ul>
          <NavItem>
            <NavLink href="#">
              <div className='link-wrapper'>
                <span>about</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <div className='link-wrapper'>
                <span>work</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <div className='link-wrapper'>
                <span>projects</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" >
              <div className='link-wrapper'>
                <span>contact</span>
              </div>
            </NavLink>
          </NavItem>
        </ul>
      </Nav>
    </HeaderWrapper>
  )
}

export const HeaderWrapper = styled.header`
  min-height: calc(36px + (8px * 2));
  display: flex;
  align-items: center;
  padding: 8px 32px;
  justify-content: space-around;
  background: var(--color-light-background);
  color: var(--color-dark-text);
`

export const LogoWrapper = styled.span`
  font-family: var(--font-family-fredoka);
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
`

export const Nav = styled.nav`
  & > ul {
    display: flex;
    align-items: baseline;
    gap: 32px;
    gap: clamp(
      1.5rem,
      8vw - 2rem,
      5rem
    );
  }
`

export const NavItem = styled.li`

`

export const NavLink = styled.a`
  position: relative;
  cursor: pointer;
  .link-wrapper {
    padding: 8px 0;
    overflow: hidden;
  }
  span {
    position: relative;
    font-size: 1.125rem;
    font-weight: var(--font-weight-medium);
    letter-spacing: .05rem;

    &:after {
      position: absolute;
      left: 0;
      bottom: -8px;
      content: '';
      height: 2px;
      width: 100%;
      background: var(--color-dark-text);
      transform: translateX(-110%);
      transition: transform cubic-bezier(.6,0,.3,1) 400ms;
    }

  }
  &:hover span:after{
    transform: translateX(0%);
  }

`
export default Header
