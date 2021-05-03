// pages folder can only be at root, or inside /src
import Head from 'next/head'
import styled from 'styled-components'

import StyledLink from 'src/components/StyledLink'

const Title = styled.h1` // var must begin with uppercase
  color: var(--zeenow-blue);
  span {
    color: var(--zeedog-green); // install vscode-styled-components by Julien Poissonnier
    display: block;
  }
`

const LinksContainer = styled.div`
  display: flex;
  justify-content; center;
  align-items: center;
  flex-direction: column;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Demo | Home</title>
      </Head>
      <Title>Hello World with TS!<span>Com styled-components</span></Title>
      <LinksContainer>
        <StyledLink href="/products" forwardedAs="/products">
          Produtos
        </StyledLink>
        <StyledLink href="/ssr-example" forwardedAs="/ssr-example">
          SSR Example
        </StyledLink>
      </LinksContainer>
    </>
  )
}
