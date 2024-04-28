import { ContainerItemCardapio, InfosItemCardapio } from './styles'
import { Price } from './styles'

function ItemCardapio({ nome, descricao, preco, imagem }) {
    return (
        <>
            <ContainerItemCardapio>
                <InfosItemCardapio>
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                    <Price>{preco}</Price>
                </InfosItemCardapio>
                <img src={imagem} />
            </ContainerItemCardapio>
        </>
    )
}

export default ItemCardapio