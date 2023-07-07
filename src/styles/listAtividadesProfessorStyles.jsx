import styled from "styled-components";

export const MainContainer = styled.main`
display: flex;
flex-direction: column;
width: 90%;
`
export const Header = styled.div`
display: flex;
flex-direction: row;
width: 100%;
p{
    width: 40%;
}
`
export const Linha = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
border-bottom: 1px solid black;
cursor: pointer;
p{
    width: 40%;
}
`

export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 15px;
  box-shadow: inset -1px 1px 5px #808080, inset 2px 3px 5px #d1d1d1;
  margin:10px 0;
  padding:0px 18px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  p {
    width: 75%;
    text-align: left;
  }
`;