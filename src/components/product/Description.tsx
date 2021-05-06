import styled from 'styled-components'

const DescriptionContainer = styled.section`
  width: 20%;
  margin-left: 1rem;
  flex-direction: column;
  p {
    margin: 1rem 0;
  }
`

const Description = ({ productDescription, productId, productName, timeStamp }) => {
  return (
    <DescriptionContainer className="flex">
      <p>Nome: {productName}</p>
      <p>Id: {productId}</p>
      <p>{productDescription}</p>
      <p>Renderizado às: {timeStamp}</p>
    </ DescriptionContainer>
  )
}

export default Description
