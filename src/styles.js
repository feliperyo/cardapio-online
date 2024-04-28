import styled from 'styled-components'

export const Body = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`

export const Capa = styled.img`
    max-height: 15rem;
    width: 100%;
    object-fit: cover;
`

export const Buttons = styled.div`
display: flex;
justify-content: space-between;
`

export const Button = styled.button`
  
    text-align: center;
    margin-top: 1rem;
    width: 30%;
    background-color: #1f1f1f;
    color: #f0f0f0;
    border-radius: 10px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;

    &:hover {
      background-color: #002;
      box-shadow: 3px 2px 10px #002;
    }

    @media screen and (max-width:500px) {
    font-size: 0.9rem;
  }
  `

export const ContainerItemCardapio = styled.div`
  display: flex;
  width: 35rem;
  padding: 1rem;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: -2px 2px 20px #002;

  img{
    height: 11rem;
  }

  @media screen and (max-width:1030px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 20rem;
    gap: 15px;

    img{
        width: 15rem;
        height: 15rem;
    }
  }
  `

export const InfosItemCardapio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-basis: 60%;
    flex-grow: 0;

    h2{
        font-weight: 600;
    }

    @media screen and (max-width:1030px) {
    gap: 10px;
  }
    `

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 35px;
    justify-content: space-between;
    margin-top: 50px;

  @media screen and (max-width:1030px) {
    justify-content: space-evenly;
  }
    `

export const Price = styled.p`
    font-size: 22px;
    font-weight: 700;
    `