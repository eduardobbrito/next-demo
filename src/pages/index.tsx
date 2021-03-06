// pages folder can only be at root, or inside /src
import Head from 'next/head'
import styled from 'styled-components'
import Presentation from 'src/components/Presentation'

const Title = styled.h1` // var must begin with uppercase
  color: var(--zeedog-green);   // install vscode-styled-components extension
  text-align: center;
  margin: 2rem 0;
  span {
    color: var(--zeenow-blue);
    display: block;               // by Julien Poissonnier
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
      <Title>next.js<span>com styled-components e Typescript</span></Title>
      <Presentation />
    </>
  )
}
