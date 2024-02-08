import { useLocation, useNavigate } from "react-router-dom";
import { AlbumInfoContainer, ArtistContainer, ArtistInfoContainer, Button, FormContainer, HeaderAddArtists, LeftContainer, NewArtistContainer, NewArtistFooterContainer, RatingContainer, RightContainer, TitleContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { useStore } from "../../store/store";
import { ChangeEvent, useEffect, useState } from "react";
import { Data, addArtist, editArtist } from "../../store/musicReducer";
import { Chip, ListItem, Radio, TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { Album } from "@mui/icons-material";
import { useMediaPredicate } from "react-media-hook";

export function NewArtist() {

    
    const [, dispatch] = useStore();

    const [inputId, setInputId] = useState(new Date().getUTCMilliseconds());

    const [inputName, setInputName] = useState('');
    const [errorName, setErrorName] = useState(false);

    const [inputUrl, setInputUrl] = useState('');
    const [errorUrl, setErrorUrl] = useState(false);

    const [inputDescription, setInputDescription] = useState('');
    const [errorDescription, setErrorDescription] = useState(false);

    const [inputRating, setInputRating] = useState('');
    const [errorRating, setErrorRating] = useState(false);

    const [inputGenre, setInputGenre] = useState(['']);
    const [errorGenre, setErrorGenre] = useState(false);

    const [artistToEdit, setArtistToEdit] = useState({});

    let newArtist: Data;

    const biggerThan600 = useMediaPredicate("(min-width: 600px)");

    const newArtistFormSchema = zod.object({
        name: zod.string({required_error: "Required",}),
        link: zod.string().regex(new RegExp("(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))"))
    })

    const location = useLocation();

    const {register, handleSubmit, watch, reset, trigger, clearErrors, setValue}= useForm({
        resolver: zodResolver(newArtistFormSchema),

    })
    const handleOnArtistAdd = (data: Data) => {
        dispatch(addArtist((data)));
    };

    const handleOnArtistEdit = (data: Data) => {
        dispatch(editArtist((data)));
    };

    const isEdit = location.pathname.includes('edit-artist');
   
    useEffect(() => {
        if(isEdit) {
            setInputId(location.state.id);
            setInputName(location.state.name);
            setInputUrl(location.state.url);
            setErrorUrl(false)
            setInputDescription(location.state.description);
            
            // falta genero

            setInputRating(location.state.rating.toString());          
        }
        
    }, [isEdit]);
   
    

    // setArtistToEdit(location.state)
    // console.log(artistToEdit)
    
    // if(location.state) {
    //     setInputId(location.state.id);
    //     setInputName(location.state.name);
    //     setInputUrl(location.state.link);
    //     setInputDescription(location.state.description);
    //     setInputGenre(location.state.genre);
    //     setInputRating(location.state.rating);

    //     console.log(inputId, inputName, inputUrl, inputDescription, inputRating, inputGenre)
    //     location.state = null
    // }

    const onSubmit = async () => {
        clearErrors()
        const triggerFlag = await trigger();
        if(triggerFlag) {
            setErrorUrl(false)
            console.log(inputId);
            let newArtist = {
                id: inputId,
                name: inputName,
                url: inputUrl,
                rating: Number(inputRating),
                description: inputDescription,
                genre: inputGenre
            }
            if(isEdit) {
                handleOnArtistEdit(newArtist);
            } else{
                handleOnArtistAdd(newArtist);
            }
            navigate('/', {replace: true});
            reset();
        } else {
            setErrorUrl(true)
        }
    }

    let navigate = useNavigate(); 

    const onCancel = () => {
        navigate('/', {replace: true});
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputName(e.target.value);
        if(errorName) {
            setErrorName(false)
        }
    }

    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputDescription(e.target.value);
    }

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputUrl(e.target.value);
        if(errorUrl) {
            setErrorUrl(false)
        }
    }

    
    const handleRatingChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputRating(e.target.value);
        if(errorRating) {
            setErrorRating(false)
        }
    }
    

    const handleInputGenreChange = (e: any, value: any) => {
        setInputGenre(value);
    }

    return (
        <ArtistContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
            <HeaderAddArtists>
                <span>{isEdit ? 'Edit Artist' : 'New Artist'}</span>
            </HeaderAddArtists>
            
            <NewArtistContainer>
                <ArtistInfoContainer>
                    <TitleContainer>
                        <span>Artist Information</span>
                    </TitleContainer>
                    
                    <FormContainer>
                        
                        <LeftContainer>
                            <label htmlFor="name">Artist Name</label>
                        
                            <TextField 
                                type="text" 
                                placeholder="Queen" 
                                {...register('name')}
                                onChange={(e) => handleNameChange(e)}
                                value={inputName}
                                sx={{'& .MuiOutlinedInput-root.Mui-focused': { '& .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid #723172'
                                }}}}
                                
                            />
                            <label htmlFor="description">Description</label>
                            <TextField
                                {...register('description')}
                                type="text" 
                                placeholder="Feel free to describe this artist" 
                                onChange={(e) => handleDescriptionChange(e)}
                                value={inputDescription}
                                sx={{'& .MuiOutlinedInput-root.Mui-focused': { '& .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid #723172'
                                }}}}
                                multiline
                                rows={5}
                            />                           

                        </LeftContainer>

                        <RightContainer>
                            <label htmlFor="name">Favorite music video (Youtube)</label>
                            <TextField
                                    {...register('link')}
                                    type="text" 
                                    placeholder="https://youtube.com/watch?v=..." 
                                    error={errorUrl}
                                    helperText={errorUrl ? "Invalid URL" : " "}
                                    onChange={(e) => handleUrlChange(e)}
                                    value={inputUrl}
                                    sx={{'& .MuiOutlinedInput-root.Mui-focused': { '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #723172'
                                    }}}}
                                />

                                <div>
                                    <label htmlFor="rating">Rating</label>
                                    <RatingContainer>
                                            <div>
                                                <Radio 
                                                    checked={inputRating === '1'}
                                                    id="one" 
                                                    value="1" 
                                                    style={{accentColor:'#723172'}}
                                                    onChange={(e) => handleRatingChange(e)}
                                                />
                                                <label htmlFor="one">1</label>
                                            </div>
                                            <div>
                                                <Radio checked={inputRating === '2'} id="two" value="2" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                                <label htmlFor="two">2</label>
                                            </div>
                                            <div>
                                                <Radio checked={inputRating === '3'} id="three" value="3" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                                <label htmlFor="three">3</label>
                                            </div>
                                            <div>
                                                <Radio checked={inputRating === '4'} id="four"  value="4" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                                <label htmlFor="four">4</label>
                                            </div>
                                            <div>
                                                <Radio checked={inputRating === '5'} id="five" value="5" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                                <label htmlFor="five">5</label>
                                            </div>
                                            
                                            <div>
                                                <Radio checked={inputRating === '6'} id="six" value="6" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                                <label htmlFor="six">6</label>
                                            </div>
                                            <div>
                                                <Radio checked={inputRating === '7'} id="seven" value="7" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                                <label htmlFor="seven">7</label>
                                            </div>
                                            <div>
                                                <Radio checked={inputRating === '8'} id="eight" value="7" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                                <label htmlFor="eight">8</label>
                                            </div>
                                            <div>
                                                <Radio checked={inputRating === '9'} id="nine" value="9" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                                <label htmlFor="nine">9</label>
                                            </div>
                                            <div>
                                                <Radio checked={inputRating === '10'} id="ten" value="10" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                                <label htmlFor="ten">10</label>
                                            </div>
                                            
                                    </RatingContainer>
                                </div>   

                                <label htmlFor="name">Genre</label>

                                <Autocomplete
                                    multiple
                                    onChange={(e, value) => handleInputGenreChange(e, value)}
                                    id="tags-filled"
                                    options={inputGenre.map((option) => option)}
                                    
                                    freeSolo
                                    renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip 
                                            label={option} 
                                            {...getTagProps({ index })} 
                                            size="small"
                                            sx={{background: '#dd2a60', color: 'white', '& .MuiChip-deleteIcon': {color: 'white'}}}
                                            />
                                    ))
                                    }
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            size="small"    
                                            sx={{'& .MuiOutlinedInput-root.Mui-focused': { '& .MuiOutlinedInput-notchedOutline': {
                                                border: '1px solid #723172'
                                            }}
                                            }}
                                        />
                                        )}
                                        sx={{'& .MuiAutocomplete-root .MuiFilledInput-root': {paddingTop: '0px'}
                                            }}
                                />

                        </RightContainer>



                        
                    </FormContainer>
                    
                    <AlbumInfoContainer>
                    
                    </AlbumInfoContainer>
                </ArtistInfoContainer>

            </NewArtistContainer>

            <NewArtistFooterContainer>
                <Button type="button" onClick={() => onCancel()} style={{marginLeft: '2rem', background: '#808080'}}>Cancel</Button>
                <Button 
                    type="button" 
                    onClick={() => onSubmit()} 
                    style={{marginRight: '2rem'}}
                    disabled={inputName === '' || inputRating === '' || inputUrl === ''}
                >
                    {isEdit ? 'Save' : 'Add'}
                </Button>
            </NewArtistFooterContainer>    
            </form>
        </ArtistContainer>
    )
}