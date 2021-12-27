import React, { useState, useEffect} from 'react'
import { Container, MainContent, PunkHighlight, PunkContainer, PunkDetails, OwnerDetails, Owner, OwnerNameAndHandle, OwnerHandle, OwnerLink, Links  } from  './styles'
import instaLogo from '../../assets/owner/instagram.png';
import twitter from '../../assets/owner/twitter.png';
import moreIcon from '../../assets/owner/more.png';


function Main({selectedPunk, data }) {
  const [activePunk, setActivePunk] = useState(data[0]);

  useEffect(() => {
    setActivePunk(data[selectedPunk])
  }, [selectedPunk, data])

  return (
    <Container>
      <MainContent>
        <PunkHighlight>
          <PunkContainer>
            <img src={activePunk.image_original_url} alt="" />
          </PunkContainer>
        </PunkHighlight>

        <PunkDetails>
          <div className="title">{activePunk.name}  <span className="itemNumber">#{activePunk.token_id}</span></div>
         
        <Owner>
          <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} alt="" />
          <OwnerDetails>
            <OwnerNameAndHandle>
              <div>{activePunk.owner.address}</div>
              <OwnerHandle>@cleverprogrammer</OwnerHandle>
            </OwnerNameAndHandle>
          </OwnerDetails>
          </div>
          <Links>
            <OwnerLink><img src={instaLogo} alt="" /></OwnerLink>
            <OwnerLink><img src={twitter} alt="" /></OwnerLink>
            <OwnerLink><img src={moreIcon} alt="" /></OwnerLink>
          </Links>
         
        </Owner>
        </PunkDetails>
      </MainContent>
      
    </Container>
  )
}

export default Main
