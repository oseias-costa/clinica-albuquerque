import { FooterMidiasContainer, IconMidia } from "./footer.styles";
import Insta from "../../public/img/insta.png";
import Face from "../../public/img/face.png";

export default function FooterMidias(){
    return(
        <FooterMidiasContainer>
            <a href='https://www.instagram.com/spimplantes/' target='_blank'>
                <IconMidia src={Insta} alt='Instagram da Clínica Albuquerque' />
            </a>
            <a href='https://www.facebook.com/spimplantes/?locale=pt_BR' target='_blank'>
                <IconMidia src={Face} alt='Facebook da Clínica Albuquerque' />
            </a>
        </FooterMidiasContainer>
    )
}