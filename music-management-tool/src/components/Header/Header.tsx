import { HeaderContainer, WhiteCircle } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <span>Logo</span>
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