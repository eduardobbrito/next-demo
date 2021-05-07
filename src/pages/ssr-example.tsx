import { GetServerSideProps } from "next"
import styled from 'styled-components'
import CodeBlock from 'src/components/CodeBlock'
import api from "src/services/api"

const code =
`import { GetServerSideProps } from "next" // tipagem

const SsrExample = ({ productData }) => (
  <>
    <h1>Nome</h1>
    <span>{productData.name}</span>
  </>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const productData = await api
    .get('catalog_system/pub/products/variations/5006212')
    .then(res => res.data)
  return {
    props: {
      productData
    }
  }
}

export default SsrExample
`

const ExampleContainer = styled.div`
  h1, p {
    margin-bottom: 1rem;
  }
`

const SsrExample = ({ productData }) => (
  <ExampleContainer>
    <h1>SSR</h1>
    <p>Essa página demora um certo tempo pra carregar.</p>
    <p>Isso porque o SSR vai requisitar os dados apenas quando o usuário acessar a URL.</p>
    <p>Nome do produto: {productData.name}</p>
    <CodeBlock code={code} language={'typescript'} />
  </ ExampleContainer>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const productData = await api
    .get('catalog_system/pub/products/variations/5006212')
    .then(res => res.data)
  return {
    props: {
      productData
    }
  }
}

export default SsrExample
