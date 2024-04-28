import { ContainerItemCardapio, InfosItemCardapio } from './styles'

function ItemCardapio({ nome, descricao, preco, imagem }) {
    return (
        <>
            <ContainerItemCardapio>
                <InfosItemCardapio>
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                    <p>{preco}</p>
                </InfosItemCardapio>
                <img src={imagem} />
            </ContainerItemCardapio>
        </>
    )
}

export default ItemCardapio