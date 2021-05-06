import { useState } from 'react'
import styled from 'styled-components'
import StyledLink from 'src/components/StyledLink'

const Nav = styled.nav`
  padding: 1rem 0;
  margin: -1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--white);
  ul {
    list-style: none;
    margin-left: 1rem;
    margin-top: 4px;
    li {
      margin: 0 .25rem;
      .active {
        border-bottom: 1px solid var(--zeenow-blue);
      }
    }
  }
`

const Navbar = props => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <Nav className="flex justify-center align-items-center">
        <h1>Next Demo</h1>
        <ul className="flex justify-center align-items-center">
          <li>
            <StyledLink href="/" forwardedAs="/" activeClassName="active">
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/ssr-example" forwardedAs="/ssr-example" activeClassName="active">
              SSR
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/products" forwardedAs="/products" activeClassName="active">
              Produtos
            </StyledLink>
          </li>
        </ul>
      </Nav>
    </>
  )
}

export default Navbar
