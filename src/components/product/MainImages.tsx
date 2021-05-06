import Image from 'next/image'
import styled from 'styled-components'
import buildCodeArray from 'src/services/buildCodeArray'

const ImagesContainer = styled.section`
  width: 80%;
  max-width: 985px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 25px 25px;
  grid-auto-rows: 1fr;
  grid-template-areas:
    ". ."
    ". .";
`

interface MainImageProps {
  mainImages: string
}

const MainImages = ({ mainImages }) => {
  const imagesArray:[] = buildCodeArray(mainImages)
  return (
    <ImagesContainer className="flex">
      {imagesArray.map(img =>
        <Image
          key={img.urlImagem}
          src={img.urlImagem}
          alt={img.altImagem}
          width={480}
          height={480}
          layout="fixed"
          // objectFit='contain'
        />
      )}
    </ImagesContainer>
  )
}

export default MainImages
