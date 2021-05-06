import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import StyledLink from 'src/components/StyledLink'
import api from 'src/services/api'


export default function Products({ productsData, timeStamp }) {
  return (
    <>
      <Head>
        <title>Next Demo | Produtos</title>
      </Head>
      <h1>Produtos</h1>
      <h2>Renderizado às: {timeStamp}</h2>
      <StyledLink href="/" forwardedAs="/">
        Home
      </StyledLink>
      <ul>
        {productsData.map(prod => (
          <li key={prod.id}>
            <Link href={`products/${prod.slug}`}>
              <a>{prod.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await api
    .get('catalog_system/pub/products/search?fq=C:2000094/4005284')
    .then(res => res.data)
  const productsData = products.map(prod => {
    const params = {
      id: prod.productId,
      name: prod.productName,
      slug: prod.linkText,
      link: prod.link
    }
    return params
  })
  const timeStamp = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'long' }).format(new Date())
  console.log(timeStamp)
  return {
    props: {
      productsData,
      timeStamp
    },
    revalidate: 60 * 60 * 24, // 1day
  }
}