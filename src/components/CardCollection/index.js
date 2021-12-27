import { Container, Details, Name, ID, PriceContainer, Price  } from './styles';
import weth from '../../assets/weth.png'

function CardCollection({id, name, traits, image}) {
  return (
    <Container>
      <img src={image} alt="" />
      <Details>
        <Name>
          {name} <ID>{id}</ID>
        </Name>
        <PriceContainer>
          <img src={weth} alt="" />
          <Price>{traits[0]?.value}</Price>
        </PriceContainer>
      </Details>
    </Container>
  )
}

export default CardCollection
