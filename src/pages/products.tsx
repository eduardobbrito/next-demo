import { GetStaticProps } from 'next'
import Head from 'next/head'
import StyledLink from 'src/components/StyledLink'
import api from 'src/services/api'


export default function Home({ productsData }) {
  return (
    <>
      <Head>
        <title>Next Demo | Products</title>
      </Head>
      <h1>Products</h1>
      <StyledLink href="/" forwardedAs="/">
        Home
      </StyledLink>
      <ul>
        {productsData.map(prod => (
          <li>{prod.name}</li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await api
    .get('catalog_system/pub/products/search?fq=C:2000094/4005284')
    .then(res => res.data)
  // console.log(products)
  const productsData = products.map(prod => {
    const params = {
      id: prod.productId,
      name: prod.productName,
      slug: prod.linkText,
      link: prod.link
    }
    return params
  })
  return {
    props: {
      productsData
    },
    // revalidate: 60 * 60 * 24,
  }
}