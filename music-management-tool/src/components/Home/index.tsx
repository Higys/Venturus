import { MyArtist } from "../MyArtist";
import { QuickAdd } from "../QuickAdd";
import { TopArtist } from "../TopArtist";
import { HomeContainer, RightContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <MyArtist/>
            <RightContainer>
                <TopArtist/>
                <QuickAdd/>
            </RightContainer>
        </HomeContainer>
    )
}