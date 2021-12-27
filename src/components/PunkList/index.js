import CardCollection from '../CardCollection'
import {Container} from './styles'

function PunkList({data, setSelectedPunk}) {
  return (
    <Container>
     
        {data.map((item) => (
          <div onClick={() => setSelectedPunk(item.token_id)}>
            <CardCollection key={item.token_id} id={item.token_id} name={item.name} traits={item.traits} image ={item.image_original_url} />

          </div>
        ))}
      
    </Container>
  )
}

export default PunkList
