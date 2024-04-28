import { Buttons, Button } from './styles'

function Navegacao({ alterarPaginaSelecionada }) {


    return (
        <Buttons>
            <Button onClick={() => alterarPaginaSelecionada(0)}>Pratos Principais</Button>
            <Button onClick={() => alterarPaginaSelecionada(1)}>Sobremesas</Button>
            <Button onClick={() => alterarPaginaSelecionada(2)}>Bebidas</Button>
        </Buttons>
    )
}

export default Navegacao