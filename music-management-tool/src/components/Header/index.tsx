import { Link } from "react-router-dom";
import { HeaderContainer, ImageLogo, WhiteCircle } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <Link to="/">
                    <ImageLogo src="./src/assets/logo.png"></ImageLogo>
                </Link>
                <span>Music Management Tool</span>
            </div>
            <div>
                <span>Roger Ridley</span>

                <WhiteCircle>
                    <span>RR</span>
                </WhiteCircle>
            </div>
        </HeaderContainer>
    )
}