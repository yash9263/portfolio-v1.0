import styled from 'styled-components'
import { ChevronRight } from 'react-feather'
interface ButtonProps {
  children: React.ReactNode
  primary?: boolean
  showIcon?: boolean
}

const Button = ({ children, primary, showIcon }: ButtonProps) => {
  return (
    <ButtonWrapper primary={primary}>
      <span>{children}</span>
      {showIcon && <ChevronRight/>}
    </ButtonWrapper>
  )
}

export const ButtonWrapper = styled.button<{primary?: boolean}>`
  background: ${props => props.primary ? 'var(--color-light-background)' : 'var(--color-dark-background)'};
  color: ${props => props.primary ? 'var(--color-dark-text)' : 'var(--color-light-text)'};
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 24px;
  font-size: 1.125rem;
  border: 2px solid var(--color-dark-text);
  border-radius: 8px;
  cursor: pointer;

  span {
    font-weight: var(--font-weight-medium);
  }

  & > svg {
    stroke-width: 3.5px;
    width: 18px;
    transform: translateY(8%);
  }
`

export default Button
