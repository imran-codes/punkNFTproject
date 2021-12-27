import styled from "styled-components";

export const Container = styled.div`
 color: white;
 background-color: #1a1a1c;
 border-radius: 20px;
 overflow: hidden;
 width: 300px;
 height: 500px;
 margin-right: 30px;

 img {
   width: 100%;
 }
`

export const Details = styled.div`
padding: 20px;

`

export const Name = styled.div`
font-size: 20px;
font-weight: 900;

`

export const ID = styled.div`
color: #a1a5b0;
font-size: 18px;
font-weight: 600;
`

export const PriceContainer = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
object-fit: contain;

img {
  height: 23px;
  width: 15px;
}
`

export const Price = styled.div`
margin-left: 5px;
font-weight: 600;
`

