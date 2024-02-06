import { Data } from "../../store/musicReducer";
import { useStore } from "../../store/store";
import { sortByProperty } from "../../utils/sortArtistByProperty";
import { HeaderTopFiveArtists, TopArtistContainer, TopFiveContainer, TopFiveItem, TopFiveListContainer } from "./styles";

export function TopArtist() {

    const [state] = useStore();
    const { artists } = state;

    const renderTopFive = () => {
        let artistList = sortByProperty(artists, 'rating', 'desc');
        artistList = artistList.slice(0,5);

        console.log(artistList)

        return artistList.map((artist: Data) => {
            return (
                <TopFiveItem key={artist.id}>
                    <span>{artist.name}</span>
                    <span>{artist.rating}</span>
                </TopFiveItem>
            )
        });
    }

    return (
        <TopArtistContainer>
            <HeaderTopFiveArtists>
                <span>
                    Top 5
                </span>
                <span>
                    Highest rate
                </span>
            </HeaderTopFiveArtists>
            <TopFiveContainer>
                <TopFiveListContainer>
                        {renderTopFive()}
                </TopFiveListContainer>
            </TopFiveContainer>
        </TopArtistContainer>
    )
}