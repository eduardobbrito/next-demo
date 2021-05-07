// import styled from 'styled-components'
import api from 'src/services/api'
import MainImages from 'src/components/product/MainImages'
import Description from 'src/components/product/Description'
import timeStampValue from 'src/services/timeStamp'

// const ProductMainContainer = styled.div`

// `

export default function Product({ productData, timeStamp }) {
  const { Fotos_Produto, Descricao_Produto, productName } = productData

  return (
    <>
      <div className="flex">
        <MainImages mainImages={Fotos_Produto[0]} />
        <Description
          productDescription={Descricao_Produto}
          productId={productData.productId}
          productName={productName}
          timeStamp={timeStamp}
        />
      </div>
    </>
  )
}

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

export const getStaticProps = async (context) => {
  const timeStamp = timeStampValue
  const { slug } = context.params;
  const productData = await api
    .get(`catalog_system/pub/products/search/${slug}/p`)
    .then(res =>  res.data[0])
  return {
    props: {
      productData,
      timeStamp
    }
  }
}