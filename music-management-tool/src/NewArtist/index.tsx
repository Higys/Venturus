import { useLocation } from "react-router-dom";
import { ArtistContainer, ArtistInfoContainer, FormContainer, HeaderAddArtists, NewArtistContainer, NewArtistFooterContainer } from "./styles";

export function NewArtist() {

    const location = useLocation();
    const isEdit = location.pathname.includes('edit-artist');
    
    console.log(isEdit)
    return (
        <ArtistContainer>
            <HeaderAddArtists>
                <span>{isEdit ? 'Edit Artist' : 'New Artist'}</span>
            </HeaderAddArtists>
            
            <NewArtistContainer>
                <ArtistInfoContainer>
                    <div>
                        <span>Artist Information</span>
                    </div>
                    <FormContainer>
                        <div>
                            <span>teste</span>
                        </div>
                        <div>
                        <span>teste</span>
                        </div>
                    </FormContainer>
                </ArtistInfoContainer>
            </NewArtistContainer>

            <NewArtistFooterContainer>
            </NewArtistFooterContainer>       
        </ArtistContainer>
    )
}