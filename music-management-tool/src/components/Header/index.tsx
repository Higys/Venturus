import { HeaderContainer, ImageLogo, WhiteCircle } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <ImageLogo src="./src/assets/logo.png"></ImageLogo>
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