import Head from 'next/head'
import StyledLink from 'src/components/StyledLink'


export default function Home() {
  return (
    <>
      <Head>
        <title>Next Demo | Products</title>
      </Head>
      <h1>Products</h1>
      <StyledLink href="/" forwardedAs="/">
        Home
      </StyledLink>
    </>
  )
}