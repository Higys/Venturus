import { Button } from "@mui/material";
import { TableArtist } from "../TableArtist";
import { HeaderMyArtists, MyArtistContainer, TableMyArtists } from "./styles";
import { useNavigate } from "react-router-dom";



export function MyArtist() {

    let navigate = useNavigate(); 
    const routeChange = (path: string) =>{ 
        navigate(path);
    }
    return (
        <MyArtistContainer>
            <HeaderMyArtists>
                    <span>
                        My artists
                    </span>
                    <Button onClick={() => {routeChange('/new-artist')}} variant="contained" sx={{width: '5%'}}>+</Button>

            </HeaderMyArtists>
            <TableMyArtists>
                <TableArtist>
                </TableArtist>
            </TableMyArtists>
        </MyArtistContainer>
    )
}