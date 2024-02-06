import { TableArtist } from "../TableArtist";
import { HeaderMyArtists, MyArtistContainer, TableMyArtists } from "./styles";

export function MyArtist() {
    return (
        <MyArtistContainer>
            <HeaderMyArtists>
                    <span>
                        My artists
                    </span>
                    <span>
                        +
                    </span>

            </HeaderMyArtists>
            <TableMyArtists>
                <TableArtist>
                </TableArtist>
            </TableMyArtists>
        </MyArtistContainer>
    )
}