import { Bg, Insta, DivInsta } from './styles'
import instaLogo from './assets/insta-logo.png'

// eslint-disable-next-line react/prop-types
function Footer() {


    return (
        <Bg>
            <h3>Nos siga no Instagram</h3>
            <DivInsta><Insta src={instaLogo} /></DivInsta>
            <p>© Cardápio Online, Inc.</p>
        </Bg>
    )
}

export default Footer