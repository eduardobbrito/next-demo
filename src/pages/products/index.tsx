import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import CodeBlock from 'src/components/CodeBlock'
import StyledLink from 'src/components/StyledLink'
import api from 'src/services/api'

const codeGetStaticProps =
`export const getStaticProps: GetStaticProps = async () => {
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
  const timeStamp =
    new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'long' })
    .format(new Date())
  return {
    props: {
      productsData,
      timeStamp
    },
    revalidate: 60 * 60 * 24, // 1day
  }
}
`

const codeGetStaticPaths =
`// [slug].tsx
export const getStaticPaths = async () => {
  const products = await api
    .get('catalog_system/pub/products/search?fq=C:2000094/4005284')
    .then(res => res.data)
  const productsData = products.map(prod => {
    const params = {
      slug: prod.linkText,
    }
    return {
      params
    }
  })

  return {
    paths: productsData,
    fallback: false,
  }
}
`

const ProductsContainer = styled.div`
  h1, p {
    margin-bottom: 1rem;
  }
  p.mt-1 {
    margin-top: 1rem;
  }
  ul {
    margin: 1rem 0 1rem 1rem;
    li {
      margin-bottom: .5rem;
    }
  }
`

export default function Products({ productsData, timeStamp }) {
  console.log(timeStamp)
  return (
    <>
      <Head>
        <title>Next Demo | Produtos</title>
      </Head>
      <ProductsContainer>
        <h1>Produtos - SSG</h1>
        <p>Essa página deve carregar imediatamente, apesar de ter dados dinâmicos.</p>
        <p>Renderizado às: {timeStamp}</p>
        <ul>
          {productsData.map(prod => (
            <li key={prod.id}>
              <Link href={`products/${prod.slug}`}>
                <a>{prod.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <CodeBlock code={codeGetStaticProps} language={'typescript'} />
        <p className="mt-1">As páginas de produto também devem carregar imediatamente. Mas como não sabemos de antemão quantas páginas teremos que renderizar, primeiro temos que buscar essa informação</p>
        <CodeBlock code={codeGetStaticPaths} language={'typescript'} />
      </ProductsContainer>
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
  return {
    props: {
      productsData,
      timeStamp: `${timeStamp}`
    },
    revalidate: 60 * 60 * 24, // 1day
  }
}