import Image from 'next/image'
import api from 'src/services/api'

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
  const { slug } = context.params;
  const productData = await api
    .get(`catalog_system/pub/products/search/${slug}/p`)
    .then(res =>  res.data[0])
  return {
    props: {
      productData
    }
  }
}

const buildCodeArray = productRegisteredArray => {
  if (productRegisteredArray === undefined) return false;
  const dataObjectsArray = [];
  const reponseTextArray = productRegisteredArray.trim().split(';');
  reponseTextArray.forEach(responseItem => {
    if (responseItem !== '') {
      const responseItemTextArray = responseItem
        .trim()
        .replace('‘', "'")
        .replace('’', "'")
        .replace('[', '')
        .replace(']', '')
        .replace(/','/g, '||')
        .split('||');
      const imageObject = {};
      responseItemTextArray.forEach(responseData => {
        const dataTextArray = responseData.split("':'");
        if (dataTextArray.length > 1) {
          const objKey = dataTextArray[0].replace("'", '');
          const objValue = dataTextArray[1].replace("'", '');
          imageObject[objKey] = objValue;
        }
      });
      if (imageObject !== {}) dataObjectsArray.push(imageObject);
    }
  });
  return dataObjectsArray.map(img => <Image key={img.urlImagem} src={img.urlImagem} alt={img.altImagem} width={500} height={500}/>)
};

export default function Product({ productData }) {
  const { Fotos_Produto } = productData

  return (
    <>
      <h1>productId</h1>
      <p>{productData.productId}</p>
      {buildCodeArray(Fotos_Produto[0])}
    </>
  )
}