import React from 'react'
import restauranteImg from './assets/restaurante-img.jpg'
import Navegacao from './navegacao'
import ItemCardapio from './ItemCardapio'
import Footer from './footer'

import { Body, Capa, Menu } from './styles'

import { pratosPrincipais, sobremesas, bebidas } from './cardapio'

function App() {
  const [paginaSelecionada, alterarPaginaSelecionada] = React.useState(0)
  const sectionsMenu = [pratosPrincipais, sobremesas, bebidas]

  return (
    <Body>
      <Capa src={restauranteImg} />
      <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada} />
      <Menu>
        {sectionsMenu[paginaSelecionada].map((prato) => (
          // eslint-disable-next-line react/jsx-key
          <ItemCardapio
            nome={prato.nome}
            preco={prato.preco}
            descricao={prato.descricao}
            imagem={prato.imagem}
          />
        ))}
      </Menu>
      <Footer></Footer>
    </Body>
  )
}

export default App
