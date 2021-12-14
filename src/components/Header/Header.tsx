import Link from 'next/link'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href='/' passHref>
        <a>
          <LogoWrapper>Y</LogoWrapper>
        </a>
      </Link>

      <Nav>
        <ul>
          <NavItem>
            <NavLink href="#">about</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">project</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">contact</NavLink>
          </NavItem>
        </ul>
      </Nav>
    </HeaderWrapper>
  )
}

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 8px 32px;
  justify-content: space-around;
  background: var(--color-dark-background);
  color: var(--color-light-text);
`

export const LogoWrapper = styled.div``

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

export const NavLink = styled(Link)`

`
export default Header
