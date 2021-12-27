import styled from 'styled-components'

export const HeaderContainer = styled.div`
  div {
    margin: 10px;
  }
color: white;
height: 100px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const LogoContainer = styled.div`
img {
  width: 200px;
}
`

export const SearchContainer = styled.div`
display: flex;
align-items: center;
background-color: #1c1c1e;
height: 50px;
flex: 1;
border-radius: 50px;

  img {
    margin: 10px;
  }
  input {
    background-color: transparent;
    border: none;
    width: 100%;
    outline: none;
    color: whitesmoke;
    font-size: 1.6rem;
  }
`

export const HeaderItems = styled.div`
display: flex;
align-items: center;
color: #a1a5b0;
cursor: pointer;

 p {
   margin: 10px;
 }

`

export const HeaderActions = styled.div`
display: flex;
align-items: center;

div {
  margin: 10px;
}
`

export const ThemeSwitchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
 background-color: #1c1c1e;
border-radius: 50px;
padding: 15px;
object-fit: contain;
cursor: pointer;

img {
  height: 25px;
}
`

export const LoginButton = styled.div`
  background: linear-gradient(to right, #59f9b7, #66feea);
  padding: 15px 40px;
  border-radius: 50px;
  color: black;
  cursor: pointer;
  transition: all .2s ease-in-out;

  :hover {
    opacity: 0.9;
    transform: scale(1.2);
    transition-timing-function: ease-in;
  }
`