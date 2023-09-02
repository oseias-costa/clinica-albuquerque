import { FooterMidiasContainer, IconMidia } from "./footer.styles";
import Insta from "../../public/insta.png";
import Face from "../../public/face.png";

export default function FooterMidias(){
    return(
        <FooterMidiasContainer>
            <a href=''>
                <IconMidia src={Insta} alt='Instagram da Clínica Albuquerque' />
            </a>
            <a href=''>
                <IconMidia src={Face} alt='Facebook da Clínica Albuquerque' />
            </a>
        </FooterMidiasContainer>
    )
}