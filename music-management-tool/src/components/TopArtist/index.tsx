import { useNavigate } from "react-router-dom";
import { Data } from "../../store/musicReducer";
import { useStore } from "../../store/store";
import { sortByProperty } from "../../utils/sortArtistByProperty";
import { HeaderTopFiveArtists, TopArtistContainer, TopFiveContainer, TopFiveItem, TopFiveListContainer } from "./styles";

export function TopArtist() {

    const [state] = useStore();
    const { artists } = state;

    let navigate = useNavigate(); 
    const routeChange = (path: string, artist: Data) =>{ 
        navigate(path, {state: artist});
    }

    const renderTopFive = () => {
        let artistList = sortByProperty(artists, 'rating', 'desc');
        artistList = artistList.slice(0,5);

        console.log(artistList)

        return artistList.map((artist: Data) => {
            return (
                <TopFiveItem key={artist.id} onClick={() => handleClickEditIcon(artist)}>
                    <span>{artist.name}</span>
                    <span>{artist.rating}</span>
                </TopFiveItem>
            )
        });
    }

    const handleClickEditIcon = (artist: Data) => {
        routeChange('/edit-artist', artist);
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