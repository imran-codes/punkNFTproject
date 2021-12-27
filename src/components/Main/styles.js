import styled from "styled-components";

export const Container = styled.div`
max-height: 50vh;

`

export const MainContent = styled.div`
display: flex;
padding-bottom: 20px;
border-bottom: 1px solid white;
`

export const PunkHighlight = styled.div`
flex: 0.25;
display: flex;
align-items: center;
justify-content: center;
`

export const PunkContainer = styled.div`
border-radius: 20px;
overflow: hidden;
display: flex;
margin-right: 20px;

img {
  object-fit: contain;
  max-width: min-content(30vw, 40vh);
  max-height: 30vh;
}
`

export const PunkDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex: 0.75;
color: white;

.title {
  font-size: 96px;
  font-weight: 800;
}

.itemNumber {
  color: #a1a5b0;
  font-size: 72px;
  align-self: center;
}
`

export const OwnerDetails = styled.div``

export const Owner = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 0;
height: 50px;

div {
  margin: 0 5px;
}

.ownerImageContainer {
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
`

export const OwnerNameAndHandle = styled.div``

export const OwnerHandle = styled.div``

export const Links = styled.div`
display: flex;
align-self: center;
justify-content: center;
`

export const OwnerLink = styled.div``



