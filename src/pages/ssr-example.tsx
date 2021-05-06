import { GetServerSideProps } from "next"
import api from "src/services/api"

const SsrExample = ({ productData }) => (
  <>
    <p>Here we should see that the page takes a while to load</p>
    <p>Thats because SSR will request data only when the user reaches the url</p>
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
