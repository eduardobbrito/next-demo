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

interface ImagesArrayItemProps {
  altImagem: string,
  urlImagem: string,
  urlVideo: string
}

interface ImagesArrayProps extends Array<ImagesArrayItemProps>{}

const MainImages = ({ mainImages }) => {
  if (mainImages === undefined) return
  const imagesArray: ImagesArrayProps = buildCodeArray(mainImages)
  console.log(imagesArray[0], imagesArray)
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
